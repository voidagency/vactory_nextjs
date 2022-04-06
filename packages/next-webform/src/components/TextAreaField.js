import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { FormControl } from "./FormControls"
import { toRegister } from "../utils/toRegister"

export const TextAreaField = forwardRef(({ id, name, field }, ref) => {
	const { label, placeholder, helperText, validation, shouldDisplay } = field
	const { t } = useTranslation()
	const { register, watch } = useFormContext()
	const errorMessage = useErrorMessage(name, label)
	const values = watch({ nest: true })
	const isVisible = useMemo(() => {
		return shouldDisplay ? shouldDisplay(values) : true
	}, [values, shouldDisplay])

	return isVisible ? (
		<FormControl
			key={`${name}-control`}
			isRequired={validation?.required}
			isInvalid={!!errorMessage}
			className={`ui-form__TextAreaField field--${name}`}
		>
			<div
				className={classNames(
					"ui-form__formControlInner",
					!!label ? "" : "ui-form__formControlInner_noLabel"
				)}
			>
				{!!label && (
					<label htmlFor={name} className="ui-form__formControlLabel">
						{label}
					</label>
				)}
				<div className="ui-form__formControlField">
					<textarea
						id={name}
						data-testid={id}
						name={name}
						rows="3"
						className={`ui-form__formField ${!!errorMessage && "errored"}`}
						ref={register(toRegister(label || name, validation, values, t))}
						placeholder={placeholder}
						aira-invalid={!!errorMessage}
					/>
				</div>
				{!!helperText && (
					<p className="ui-form__helperText">
						<Wysiwyg html={helperText} />
					</p>
				)}
				{!!errorMessage && (
					<p className="ui-form__errorMessage">
						<Wysiwyg html={errorMessage} />
					</p>
				)}
			</div>
		</FormControl>
	) : null
})
