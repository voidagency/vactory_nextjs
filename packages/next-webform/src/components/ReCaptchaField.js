import React, { useMemo, useEffect, forwardRef, useImperativeHandle } from "react"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import ReCaptcha from "react-google-recaptcha"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { useErrorMessage } from "../hooks/useErrorMessage"
import { FormControl, FormLabel } from "./FormControls"
import { toRegister } from "../utils/toRegister"

export const ReCaptchaField = forwardRef(({ id, name, field }, ref) => {
	const { label, helperText, validation, shouldDisplay } = field
	const recaptchaRef = React.createRef()
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language
	const { register, watch, setValue } = useFormContext()
	const errorMessage = useErrorMessage("g-recaptcha-response", label)
	const values = watch({ nest: true })
	const isVisible = useMemo(() => {
		return shouldDisplay ? shouldDisplay(values) : true
	}, [values, shouldDisplay])

	useImperativeHandle(ref, () => ({
		reset: () => {
			/* eslint-disable no-unused-expressions */
			recaptchaRef?.current?.reset()
			setValue("g-recaptcha-response", null)
		},
	}))

	useEffect(() => {
		register(
			{
				name: "g-recaptcha-response",
			},
			toRegister(label || name, validation, values, t)
		)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return isVisible ? (
		<FormControl
			key={`${name}-control`}
			isRequired={validation?.required}
			isInvalid={!!errorMessage}
			className={`ui-form__ReCaptchaField field--${name}`}
		>
			<div
				className={classNames(
					"ui-form__formControlInner",
					!!label ? "" : "ui-form__formControlInner_noLabel"
				)}
			>
				{!!label && (
					<div className="ui-form__formControlLabel">
						<FormLabel htmlFor={name}>{label}</FormLabel>
					</div>
				)}

				<div className="ui-form__formControlField">
					<input
						type="hidden"
						name="captcha_response"
						ref={register}
						value="Google no captcha"
					/>

					<ReCaptcha
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
						hl={currentLanguage}
						ref={recaptchaRef}
						onChange={(val) => {
							setValue("g-recaptcha-response", val)
						}}
						onExpired={() => {
							setValue("g-recaptcha-response", null)
						}}
						onErrored={() => {
							setValue("g-recaptcha-response", null)
						}}
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
