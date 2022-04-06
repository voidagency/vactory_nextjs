import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { FormControl } from "./FormControls"
import { toRegister } from "../utils/toRegister"

export const SelectField = forwardRef(({ id, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay } = field
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
					<select
						id={name}
						name={name}
						data-testid={id}
						className={classNames("ui-form__formField", !!errorMessage && "errored")}
						ref={register(toRegister(label || name, validation, values, t))}
					>
						{field.options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label || option.value}
							</option>
						))}
					</select>
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
