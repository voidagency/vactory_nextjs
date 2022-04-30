import React, { useEffect, useState } from "react"
import Input from "./input"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

// Predefined password state trigger component
const PasswordSufix = () => {
	const [passwordTriggerVisibility, setPasswordTriggerVisibility] = useState(false)

	const togglePassword = () => {
		setPasswordTriggerVisibility((prev) => !prev)
	}

	return (
		<div className="flex items-center">
			<button onClick={togglePassword}>
				{passwordTriggerVisibility ? (
					<Icon id="eye-off" className="w-5 h-5" />
				) : (
					<Icon id="eye" className="w-5 h-5" />
				)}
			</button>
		</div>
	)
}

// Actual password input component
export const InputPassword = ({ handlePasswordChange, sufix, ...props }) => {
	const [showPassword, setShowPassword] = useState(false)
	useEffect(() => {
		console.log(showPassword)
	}, [showPassword])

	const triggerPasswordVisibility = () => {
		setShowPassword((prev) => {
			return !prev
		})
	}

	return (
		<Input
			type={!showPassword ? "password" : "text"}
			sufix={sufix || <PasswordSufix></PasswordSufix>}
			handleSufixClick={triggerPasswordVisibility}
			handleInputChange={(e) => {
				handlePasswordChange?.(e.target.value)
			}}
			{...props}
		></Input>
	)
}

export default InputPassword
