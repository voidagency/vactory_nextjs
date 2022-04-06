import React, { useCallback, useContext, useState } from "react"
import classNames from "classnames"
import isClient from "is-client"
import { FormControlContext } from "../context/FormControl"

function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8 // eslint-disable-line no-mixed-operators
		return v.toString(16)
	})
}

function generatePrefix(prefix, id) {
	return `${prefix}-${id}`
}

/**
 * Reack hook to generate unique id
 *
 * @param idProp the external id passed from the user
 * @param prefix prefix to append before the id
 */
export function useId(idProp, prefix) {
	const uuid = uuidv4()
	const id = idProp ?? uuid
	return prefix ? generatePrefix(prefix, id) : id
}

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export function useBoolean(initialState = false) {
	const [value, setValue] = useState(initialState)

	const on = useCallback(() => {
		setValue(true)
	}, [])

	const off = useCallback(() => {
		setValue(false)
	}, [])

	const toggle = useCallback(() => {
		setValue((prev) => !prev)
	}, [])

	return [value, { on, off, toggle }]
}

/**
 * useSafeLayoutEffect enables us to safely call `useLayoutEffect` on the browser
 * (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
export const useSafeLayoutEffect = isClient() ? React.useLayoutEffect : React.useEffect

function useFormControlProvider(props) {
	const {
		id: idProp,
		isRequired,
		isInvalid,
		isDisabled,
		isLoading,
		isReadOnly,
		...htmlProps
	} = props

	// Generate all the required ids
	const uuid = useId()
	const id = idProp || `field-${uuid}`

	const labelId = `${id}-label`
	const feedbackId = `${id}-feedback`
	const helpTextId = `${id}-helptext`

	/**
	 * Track of when the `FormHelperText` has been rendered.
	 * We use this to append it's id the the `aria-describedby` of the `input`
	 */
	const [hasHelpText, setHasHelpText] = useBoolean()

	// Let's keep track of when we focus the form element (e.g, `input`)
	const [isFocused, setFocus] = useBoolean()

	const context = {
		isRequired: !!isRequired,
		isInvalid: !!isInvalid,
		isLoading: !!isLoading,
		isReadOnly: !!isReadOnly,
		isDisabled: !!isDisabled,
		isFocused: !!isFocused,
		onFocus: setFocus.on,
		onBlur: setFocus.off,
		hasHelpText,
		setHasHelpText,
		id,
		labelId,
		feedbackId,
		helpTextId,
		htmlProps,
	}

	return context
}

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = (props) => {
	const { className, children, showRequiredIndicator = true, ...rest } = props
	const field = useContext(FormControlContext)

	return (
		<label className={classNames("ui-form__label", className)} {...rest}>
			{children}
			{field?.isRequired && showRequiredIndicator && <RequiredIndicator />}
		</label>
	)
}

/**
 * FormControl provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 */
export const FormControl = (props) => {
	const { htmlProps, ...context } = useFormControlProvider(props)
	const _className = classNames("ui-form-control", props.className, {
		"is-invalid": props?.isInvalid,
		"is-disabled": props?.isDisabled,
		"is-required": props?.isRequired,
	})

	return (
		<FormControlContext.Provider value={context}>
			<div role="group" {...htmlProps} className={_className} />
		</FormControlContext.Provider>
	)
}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = (props) => {
	const field = useContext(FormControlContext)

	if (!field?.isRequired) return null

	const _className = classNames("ui-form__required-indicator", props.className)

	return (
		<span
			role="presentation"
			aria-hidden
			{...props}
			className={_className}
			children={props.children || "*"}
		/>
	)
}

/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided
 */
export const FormHelperText = (props) => {
	const field = useContext(FormControlContext)
	// if (field?.isInvalid) return null;

	/**
	 * Notify the field context when the help text is rendered on
	 * screen, so we can apply the correct `aria-describedby` to the field (e.g. input, textarea)
	 */
	// useSafeLayoutEffect(() => {
	//     field?.setHasHelpText.on();
	//     return () => field?.setHasHelpText.off()
	// }, []);

	const _className = classNames("ui-form__helper-text", props.className)

	return <div {...props} className={_className} id={props.id ?? field?.helpTextId} />
}

/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
export const FormErrorMessage = (props, ref) => {
	const field = useContext(FormControlContext)

	if (!field?.isInvalid) return null

	const _className = classNames("ui-form__error-message", props.className)

	return (
		<div
			aria-live="polite"
			{...props}
			className={_className}
			id={props.id ?? field?.feedbackId}
		/>
	)
}
