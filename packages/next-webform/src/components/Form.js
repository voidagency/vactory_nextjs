import React, { useRef } from "react"
import router from "next/router"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { useForm, FormContext, useFormContext } from "react-hook-form"
import { Icon } from "@vactory/ui/icon"
import merge from "lodash.merge"
import { StyleCtx, useWebformRequest } from "../hooks"
import { defaultStyles } from "./FormStyles"
import { TextField } from "./TextField"
import { TextAreaField } from "./TextAreaField"
import { NumberField } from "./NumberField"
import { CheckboxField } from "./CheckboxField"
import { CheckboxesField } from "./CheckboxesField"
import { RadiosField } from "./RadiosField"
import { SelectField } from "./SelectField"
import { ReCaptchaField } from "./ReCaptchaField"
import { UploadField } from "./UploadField"
import { DateField } from "./DateField"
import { TimeField } from "./TimeField"
import cogoToast from "cogo-toast"

export const RenderField = (props) => {
	const fieldData = props.field
	const [name, field] = fieldData
	const { webformId, internalRefs } = useFormContext()
	let Component = null

	switch (field.type) {
		case "text":
			Component = TextField
			break

		case "textArea":
			Component = TextAreaField
			break

		case "number":
			Component = NumberField
			break

		case "checkbox":
			Component = CheckboxField
			break

		case "checkboxes":
			Component = CheckboxesField
			break

		case "radios":
			Component = RadiosField
			break

		case "select":
			Component = SelectField
			break

		case "captcha":
			Component = ReCaptchaField
			break

		case "upload":
			Component = UploadField
			break

		case "date":
			Component = DateField
			break

		case "time":
			Component = TimeField
			break

		case "custom":
			Component = field.component
			return (
				<Component
					name={name}
					webformId={webformId}
					field={field}
					ref={(r) => (internalRefs.current[name] = r)}
					{...field.props}
				/>
			)

		default:
			return (
				<div className="alert alert-warning">
					<p>
						Component <i>{field.type}</i> is not found. Checkout
						`packages/next-webform/src/components/Form.js` for more.
					</p>
				</div>
			)
	}

	return (
		<Component
			name={name}
			webformId={webformId}
			field={field}
			ref={(r) => (internalRefs.current[name] = r)}
		/>
	)
}

export const Form = ({
	webformId,
	schema,
	overwriteDefaultStyles,
	buttons,
	styles = {},
	render,
	handleSubmitRedirection = true,
	formatSubmitData = (data) => data,
}) => {
	const { t } = useTranslation()
	const form = useForm({
		validateCriteriaMode: "all",
	})
	const internalRefs = useRef({})
	const baseStyles = overwriteDefaultStyles ? styles : merge({}, defaultStyles, styles)
	const submitWebform = useWebformRequest()
	const [isLoading, setIsLoading] = React.useState(false)
	const [isSuccess, setIsSuccess] = React.useState(false)
	const [isError, setIsError] = React.useState(false)

	const onSubmit = async (data) => {
		let submit_data = formatSubmitData(data)
		submit_data.webform_id = webformId

		setIsLoading(true)
		setIsSuccess(false)
		setIsError(false)

		submitWebform(submit_data)
			.then((response) => {
				setIsLoading(false)
				if (response?.status === 200) {
					setIsSuccess(true)
					if (handleSubmitRedirection === true) {
						if (
							response?.data?.settings?.confirmation_type === "page" ||
							response?.data?.settings?.confirmation_type === "inline" ||
							response?.data?.settings?.confirmation_type === "message" ||
							response?.data?.settings?.confirmation_type === "url_message" ||
							response?.data?.settings?.confirmation_type === "modal" ||
							response?.data?.settings?.confirmation_type === "none"
						) {
							const confirmation_message =
								response?.data?.settings?.confirmation_message ||
								t("Merci d'avoir rempli notre formulaire!")
							const { hide } = cogoToast.success(confirmation_message, {
								hideAfter: 0,
								onClick: () => {
									hide()
								},
							})
						} else if (response?.data?.settings?.confirmation_type === "url") {
							const confirmation_url =
								response?.data?.settings?.confirmation_url || "/fr/"
							router.push(confirmation_url)
						}
					}
				} else {
					setIsError(true)
					Object.entries(response).forEach(([name, message]) => {
						form.setError(name, "server", message)
						// Internal name is used to target upload fields.
						form.setError("__" + name + "_internal", "server", message)
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const resetForm = () => {
		form.reset()
		/* eslint-disable no-unused-expressions */
		try {
			Object.entries(schema).forEach(([name]) => internalRefs?.current?.[name]?.reset())
		} catch (err) {}
	}

	return (
		<StyleCtx.Provider value={baseStyles}>
			<FormContext webformId={webformId} internalRefs={internalRefs} {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					{render ? (
						render(resetForm, isLoading, isSuccess, isError)
					) : (
						<React.Fragment>
							<div className="ui-form__fieldGroups">
								{Object.entries(schema).map((field, key) => (
									<RenderField key={`${field[0]}-container`} field={field} />
								))}
							</div>
							<div className="ui-form__buttonGroup">
								{buttons?.reset?.hidden ? null : (
									<button
										type="reset"
										onClick={resetForm}
										{...baseStyles?.resetButton}
										disabled={isLoading}
									>
										{buttons?.reset?.text || t("webform:Reset")}
									</button>
								)}
								<button type="submit" {...baseStyles?.submitButton} disabled={isLoading}>
									{!!buttons?.submit?.leftIcon && (
										<Icon
											mr="14px"
											name={buttons.submit.leftIcon}
											__css={baseStyles?.submitButtonLeftIcon}
											size="14px"
										/>
									)}
									{buttons?.submit?.text || t("webform:Submit")}
									{!!buttons?.submit?.rightIcon && (
										<Icon
											name={buttons.submit.rightIcon}
											__css={baseStyles?.submitButtonRightIcon}
										/>
									)}
								</button>
							</div>
						</React.Fragment>
					)}
				</form>
			</FormContext>
		</StyleCtx.Provider>
	)
}
