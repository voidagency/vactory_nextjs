/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react"
import { useI18n as useTranslation } from "@vactory/next/i18n"

import { formatBytes, formatDuration } from "react-dropzone-uploader"
import cancelImg from "../../assets/cancel.svg"
import removeImg from "../../assets/remove.svg"
import restartImg from "../../assets/restart.svg"

const iconByFn = {
	cancel: { backgroundImage: `url(${cancelImg})` },
	remove: { backgroundImage: `url(${removeImg})` },
	restart: { backgroundImage: `url(${restartImg})` },
}

export const DropzonePreview = (props) => {
	const {
		className,
		imageClassName,
		style,
		imageStyle,
		fileWithMeta: { cancel, remove, restart },
		meta: {
			name = "",
			percent = 0,
			size = 0,
			previewUrl,
			status,
			duration,
			validationError,
		},
		isUpload,
		canCancel,
		canRemove,
		canRestart,
		extra: { minSizeBytes },
	} = props
	const { t } = useTranslation()

	let elliptedName = name.length > 64 ? name.slice(0, 31) + "..." + name.slice(-32) : name
	let title = `${elliptedName || "?"}, ${formatBytes(size)}`
	if (duration) title = `${title}, ${formatDuration(duration)}`

	if (status === "error_file_size" || status === "error_validation") {
		return (
			<div className={"dzu-previewStatusContainer " + className} style={style}>
				<span className="dzu-previewFileName dzu-previewFileNameError">{title}</span>
				<br />
				{status === "error_file_size" && (
					<span>
						{size < minSizeBytes
							? t("webform:Fichier trop petit")
							: t("webform:Fichier trop gros")}
					</span>
				)}
				{status === "error_validation" && <span>{String(validationError)}</span>}
				{canRemove && (
					<span className="dzu-previewButton" style={iconByFn.remove} onClick={remove} />
				)}
			</div>
		)
	}

	if (
		status === "error_upload_params" ||
		status === "exception_upload" ||
		status === "error_upload"
	) {
		title = `${title} ${t("webform:(échec du téléchargement)")}`
	}
	if (status === "aborted") title = `${title} ${t("webform:(annulé)")}`

	return (
		<div className={className} style={style}>
			{previewUrl && (
				<img
					className={imageClassName}
					style={imageStyle}
					src={previewUrl}
					alt={title}
					title={title}
				/>
			)}
			{!previewUrl && <span className="dzu-previewFileName">{title}</span>}

			<div className="dzu-previewStatusContainer">
				{isUpload && (
					<progress
						max={100}
						value={status === "done" || status === "headers_received" ? 100 : percent}
					/>
				)}

				{status === "uploading" && canCancel && (
					<span className="dzu-previewButton" style={iconByFn.cancel} onClick={cancel} />
				)}
				{status !== "preparing" &&
					status !== "getting_upload_params" &&
					status !== "uploading" &&
					canRemove && (
						<span
							className="dzu-previewButton"
							style={iconByFn.remove}
							onClick={remove}
						/>
					)}
				{[
					"error_upload_params",
					"exception_upload",
					"error_upload",
					"aborted",
					"ready",
				].includes(status) &&
					canRestart && (
						<span
							className="dzu-previewButton"
							style={iconByFn.restart}
							onClick={restart}
						/>
					)}
			</div>
		</div>
	)
}
