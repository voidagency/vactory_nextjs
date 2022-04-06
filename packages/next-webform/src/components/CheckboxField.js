import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { FormControl, FormLabel } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { toRegister } from "../utils/toRegister"

export const CheckboxField = forwardRef(({ id, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay, value = 1 } = field
	const { t } = useTranslation()
	const { register, watch } = useFormContext()
	const values = watch({ nest: true })
	const errorMessage = useErrorMessage(name, label)
	const isVisible = useMemo(() => {
		return shouldDisplay ? shouldDisplay(values) : true
	}, [values, shouldDisplay])

	return isVisible ? (
		<FormControl
			key={`${name}-control`}
			isRequired={validation?.required}
			isInvalid={!!errorMessage}
			className={`ui-form__CheckboxField field--${name}`}
		>
			<div className="ui-form__formControlInner ui-form__formControlInner_noLabel">
				<div className="ui-form__formControlField">
					{!!label && (
						<FormLabel htmlFor={name}>
							<input
								type="checkbox"
								defaultChecked={value}
								className={`ui-form__formField ${!!errorMessage ? "errored" : ""}`}
								name={name}
								id={name}
								ref={register(toRegister(label || name, validation, values, t))}
								data-testid={`${id}-${name}`}
							/>
							{label || name}
						</FormLabel>
					)}
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
