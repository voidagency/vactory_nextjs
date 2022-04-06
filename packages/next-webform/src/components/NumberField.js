import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"
import { FormControl } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { toRegister } from "../utils/toRegister"

export const NumberField = forwardRef(({ id, name, field }, ref) => {
	const {
		label,
		placeholder,
		htmlInputType,
		helperText,
		validation,
		shouldDisplay,
		styles = {},
	} = field
	const fieldStyles = useStyles("numberField", styles)
	const formControlLayout = useStyles("formControlLayout", styles)
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
			className={"field--" + name}
		>
			<div
				className={classNames("ui-form__formControlInner", {
					"ui-form__formControlInner_noLabel": !!label,
				})}
				__css={formControlLayout?.inner}
			>
				{!!label && (
					<label
						htmlFor={name}
						className="ui-form__formControlLabel block text-sm font-medium text-gray-700"
						__css={formControlLayout?.label}
						{...fieldStyles?.label}
					>
						{label}
					</label>
				)}

				<div
					className="ui-form__formControlField mt-1 relative rounded-md shadow-sm"
					__css={formControlLayout?.field}
				>
					<input
						id={name}
						data-testid={id}
						defaultValue=""
						type={htmlInputType || "number"}
						name={name}
						aria-invalid={!!errorMessage}
						aria-describedby={
							!!errorMessage ? `field-${name}-error` : `field-${name}-description`
						}
						className={`
                            block w-full focus:outline-none sm:text-sm rounded-md shadow-sm
                            ${
															!!errorMessage
																? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
																: "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
														}
                        `}
						ref={register(toRegister(label || name, validation, values, t))}
						placeholder={placeholder}
						{...fieldStyles?.input}
					/>
				</div>

				{!!helperText && (
					<p className="mt-2 text-sm text-gray-500" id={`field-${name}-description`}>
						<Wysiwyg html={helperText} />
					</p>
				)}

				{!!errorMessage && (
					<p
						className="mt-2 text-sm text-red-600"
						id={`field-${name}-error`}
						{...fieldStyles?.errorMessage}
					>
						<Wysiwyg html={errorMessage} />
					</p>
				)}
			</div>
		</FormControl>
	) : null
})
