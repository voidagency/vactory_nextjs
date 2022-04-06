import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"
import { FormControl } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { toRegister } from "../utils/toRegister"

export const RadiosField = forwardRef(({ id, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay, styles = {} } = field
	const { t } = useTranslation()
	const fieldStyles = useStyles("checkdivesField", styles)
	const formControlLayout = useStyles("formControlLayout", styles)
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
				className={classNames(
					"ui-form__formControlInner",
					!!label ? "" : "ui-form__formControlInner_noLabel"
				)}
				__css={formControlLayout?.inner}
			>
				{!!label && (
					<div
						className="ui-form__formControlLabel block text-sm font-medium text-gray-700"
						__css={formControlLayout?.label}
						{...fieldStyles?.label}
					>
						{label}
					</div>
				)}

				<div className="ui-form__formControlField" __css={formControlLayout?.field}>
					<div className="mt-4 space-y-4">
						{field.options.map((radio, i) => (
							<div key={i} className="flex items-center">
								<input
									id={radio.name}
									name={name}
									value={radio.value}
									type="radio"
									className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
									ref={register(
										toRegister(radio.label || radio.name, validation, values, t)
									)}
									data-testid={`${id}-${radio.name}`}
									{...fieldStyles?.input}
								/>
								<label
									{...fieldStyles?.labelOptions}
									htmlFor={radio.name}
									className="ltr:ml-3 rtl:mr-3 block text-sm font-medium text-gray-700"
								>
									{radio.label || radio.name}
								</label>
							</div>
						))}
					</div>
					{!!helperText && (
						<p
							className="mt-2 text-sm text-gray-500"
							id={`field-${name}-description`}
							{...fieldStyles?.helperText}
						>
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
			</div>
		</FormControl>
	) : null
})
