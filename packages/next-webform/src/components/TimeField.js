import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { toRegister } from "../utils/toRegister"
import { FormControl } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"

export const TimeField = forwardRef(({ id, name, field }, ref) => {
	const { label, placeholder, htmlInputType, helperText, validation, shouldDisplay } =
		field
	const { t } = useTranslation()
	const { register, watch } = useFormContext()
	const errorMessage = useErrorMessage(name, label)
	const values = watch({ nest: true })
	const isVisible = useMemo(() => {
		return shouldDisplay ? shouldDisplay(values) : true
	}, [values, shouldDisplay])

	// console.log(errorMessage)

	return isVisible ? (
		<FormControl
			key={`${name}-control`}
			isRequired={validation?.required}
			isInvalid={!!errorMessage}
			className={"field--" + name}
		>
			<div
				className={classNames("ui-form__formControlInner", {
					"ui-form__formControlInner_noLabel": !label,
				})}
			>
				{!!label && (
					<label htmlFor={name} className="ui-form__formControlLabel">
						{label}
					</label>
				)}

				<div className="ui-form__formControlField">
					<input
						id={name}
						data-testid={id}
						defaultValue=""
						type={htmlInputType || "time"}
						name={name}
						aria-invalid={!!errorMessage}
						aria-describedby={
							!!errorMessage ? `field-${name}-error` : `field-${name}-description`
						}
						className={classNames("ui-form__formField", !!errorMessage && "errored")}
						ref={register(toRegister(label || name, validation, values, t))}
						placeholder={placeholder}
					/>
				</div>

				{!!helperText && (
					<p className="ui-form__helperText" id={`field-${name}-description`}>
						<Wysiwyg html={helperText} />
					</p>
				)}

				{!!errorMessage && (
					<p className="ui-form__errorMessage" id={`field-${name}-error`}>
						<Wysiwyg html={errorMessage} />
					</p>
				)}
			</div>
		</FormControl>
	) : null
})
