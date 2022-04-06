import React, { useMemo, forwardRef } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { useStyles } from "../hooks/useStyles"
import { FormControl, FormLabel } from "./FormControls"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { toRegister } from "../utils/toRegister"

export const CheckboxesField = forwardRef(({ id, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay, styles = {} } = field
	const { t } = useTranslation()
	const fieldStyles = useStyles("checkboxesField", styles)
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
					<div className="ui-form__formControlLabel" __css={formControlLayout?.label}>
						<FormLabel
							className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							{...fieldStyles?.label}
						>
							{label}
						</FormLabel>
					</div>
				)}
				<div className="ui-form__formControlField" __css={formControlLayout?.field}>
					<div>
						{field.options.map((checkbox, i) => (
							<div key={i} className="relative flex items-start">
								<div className="flex items-center h-5">
									<input
										id={checkbox.name}
										name={name}
										type="checkbox"
										defaultChecked={!!checkbox.value}
										className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										ref={register(
											toRegister(checkbox.label || checkbox.name, validation, values, t)
										)}
										data-testid={`${id}-${checkbox.name}`}
										{...fieldStyles?.input}
									/>
								</div>
								<div className="ltr:ml-3 rtl:mr-3 text-sm">
									<label htmlFor={checkbox.name} className="font-medium text-gray-700">
										{checkbox.label || checkbox.name}
									</label>
									{false && <p className="text-gray-500">{checkbox.description}</p>}
								</div>
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
