import React, {
	useMemo,
	useEffect,
	useState,
	useImperativeHandle,
	forwardRef,
} from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext, useFieldArray } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"
import { toRegister } from "../utils/toRegister"
import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"
// import "react-dropzone-uploader/dist/styles.css"
// import "./dropzone/dropzone.css"
import Dropzone from "react-dropzone-uploader"
import { DropzonePreview } from "./dropzone/dropzone-preview"
import deburr from "lodash.deburr"

export const UploadField = forwardRef(({ id, webformId, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay, isMultiple, styles = {} } = field
	// We validate against this field.
	const internalName = "__" + name + "_internal"
	// Upload endpoint.
	const urlUploadDocuments = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}webform_rest/${webformId}/upload/${name}`
	// Uploaded files.
	const [uploadedFiles, setUploadedFiles] = useState([])
	const [isUploading, setIsUploading] = useState(false)
	const [hasServerError, setHasServerError] = useState(false)
	// Fields Styles.
	const fieldStyles = useStyles("uploadField", styles)
	const formControlLayout = useStyles("formControlLayout", styles)
	const helperTextSeparatorStyle = useStyles("helperTextSeparator", styles)
	const { t } = useTranslation()
	const { register, unregister, watch, setValue, clearError } = useFormContext()
	const errorMessage = useErrorMessage(internalName, label)
	const values = watch({ nest: true })
	const isVisible = useMemo(() => {
		return shouldDisplay ? shouldDisplay(values) : true
	}, [values, shouldDisplay])
	const { fields, append, remove } = useFieldArray({
		name: name,
	})

	useImperativeHandle(ref, () => ({
		reset: () => {
			uploadedFiles.forEach((f) => f.remove())
			setUploadedFiles([])
		},
	}))

	// Read file.
	const readFileAsync = (file) => {
		return new Promise((resolve, reject) => {
			let reader = new FileReader()

			reader.onload = () => {
				resolve(reader.result)
			}

			reader.onerror = reject
			reader.readAsArrayBuffer(file)
		})
	}

	// specify upload params and url for your files
	const getUploadParams = async ({ file, meta }) => {
		let contentBuffer = await readFileAsync(file)
		const blob = new Blob([contentBuffer], { type: file.type })
		return {
			url: urlUploadDocuments + "?_format=json",
			body: blob,
			headers: {
				"Content-Type": "application/octet-stream",
				"Content-Disposition": `file; filename="${deburr(meta.name)}"`,
			},
		}
	}

	// called every time a file's `status` changes
	const handleChangeStatus = ({ meta, file, xhr, ...rest }, status) => {
		const fileRemove = rest.remove
		if (status === "uploading") {
			setIsUploading(true)
			setHasServerError(false)
		}

		if (
			status === "error_upload" ||
			status === "removed" ||
			status === "aborted" ||
			status === "exception_upload" ||
			status === "done"
		) {
			setIsUploading(false)
		}

		if (status === "error_upload") {
			// Can't get an XHR response until
			// https://github.com/fortana-co/react-dropzone-uploader/pull/25/files is resolved.
			setHasServerError(true)
		}

		if (status === "removed") {
			setUploadedFiles((fids) => fids.filter((item) => item.id_internal !== meta.id))
			remove(fields.findIndex((item) => item.id === meta.id))
			if (isMultiple === true) {
				if (fields.length <= 1) {
					setValue(internalName, "", true)
				}
			} else {
				setValue(internalName, "", true)
				setValue(name, "", true)
			}
		}

		if (status === "done") {
			const response = JSON.parse(xhr.response)
			if (response["fid"] && response["fid"][0]) {
				const fid = response["fid"][0]["value"]
				setUploadedFiles((fids) => [
					...fids,
					{
						name: file.name,
						id: fid,
						id_internal: meta.id,
						remove: fileRemove,
					},
				])
				if (isMultiple === true) {
					append({
						value: fid,
						id: meta.id,
					})
					setValue(internalName, "OK", true)
					clearError(internalName)
				} else {
					setValue(internalName, "OK", true)
					setValue(name, fid, true)
				}
			}
		}
	}

	useEffect(() => {
		let fieldRegister = toRegister(label || name, validation, values, t)
		fieldRegister.validate = {
			isPending: () =>
				!isUploading || t("webform:Des fichiers sont en cours de transfert."),
			hasError: () =>
				!hasServerError ||
				t("webform:Une erreur s'est produite, essayez avec un autre fichier."),
		}
		register({ name: internalName }, fieldRegister)

		return () => unregister(internalName) // unregister input after component unmount
	}, [register, hasServerError, isUploading]) // eslint-disable-line react-hooks/exhaustive-deps

	return isVisible ? (
		<FormControl
			key={`${name}-control`}
			isRequired={validation?.required}
			isInvalid={!!errorMessage}
			className={"field--" + name}
		>
			<div
				className={classNames(
					"ui-form__formControlInner",
					!!label ? "" : "ui-form__formControlInner_noLabel"
				)}
				__css={formControlLayout?.inner}
			>
				{!!label && (
					<div className="ui-form__formControlLabel" __css={formControlLayout?.label}>
						<FormLabel htmlFor={name}>
							<span>{label}</span>
						</FormLabel>
					</div>
				)}

				<div className="ui-form__formControlField" __css={formControlLayout?.field}>
					<div className="hidden">
						{isMultiple === true ? (
							<div>
								{fields.map((field, index) => (
									<input
										key={field.id}
										name={`${name}[${index}]`}
										ref={register()}
										defaultValue={field.value}
									/>
								))}
							</div>
						) : (
							<div>
								<input type={"hidden"} name={name} ref={register} />
							</div>
						)}
					</div>
					<Dropzone
						getUploadParams={getUploadParams}
						onChangeStatus={handleChangeStatus}
						accept={field?.validation?.extensions}
						multiple={isMultiple}
						inputContent={t(
							"webform:Faites glisser des fichiers ou cliquez pour parcourir"
						)}
						inputWithFilesContent={t("webform:Ajouter des fichiers")}
						submitButtonContent={t("webform:Transférer")}
						maxFiles={field?.validation?.maxFiles ? field?.validation?.maxFiles : 1}
						maxSizeBytes={
							field?.validation?.maxSizeBytes ? field?.validation?.maxSizeBytes : null
						}
						PreviewComponent={(props) => <DropzonePreview {...props} />}
						addClassNames={{
							dropzone: errorMessage ? "dzu-dropzoneInvalid" : "",
						}}
					/>

					<FormHelperText {...fieldStyles?.helperText}>
						{!!helperText && (
							<div>
								<Wysiwyg html={helperText} />
								<hr {...helperTextSeparatorStyle} />
							</div>
						)}

						{field.maxSizeMb && (
							<p>
								{t("webform:Les fichiers ne doivent pas dépasser")}
								<strong>
									{" "}
									{field?.maxSizeMb} {t("webform:Mo")}
								</strong>
								.
							</p>
						)}

						{field?.validation?.maxFiles && (
							<p>
								{t("webform:Limité à ")}
								<strong>
									{" "}
									{field?.validation?.maxFiles} {t("webform:Fichiers")}
								</strong>
								.
							</p>
						)}

						{field?.extensionsClean && (
							<p>
								{t("webform:Extensions autorisées :")}{" "}
								<strong> {field?.extensionsClean}</strong>.
							</p>
						)}
					</FormHelperText>
					<FormErrorMessage {...fieldStyles?.errorMessage}>
						{errorMessage}
					</FormErrorMessage>
				</div>
			</div>
		</FormControl>
	) : null
})
