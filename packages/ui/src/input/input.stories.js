import React from "react"
//import { withKnobs, boolean } from "@storybook/addon-knobs";
//import {ChiffreCleWrapper} from "../chiffreCleWrapper";
//import {Banner} from '../banner'
import { Input } from "./input"

const colors = ["primary", "secondary", "success", "danger"]

export const input = () => {
	return (
		<div className="container">
			<Input type="text" />
		</div>
	)
}

export const inputWithPlaceholder = () => {
	return (
		<div className="container">
			<Input type="text" placeholder="input with placeholder" />
		</div>
	)
}
export const inputWithDescription = () => {
	return (
		<div className="container">
			<Input type="text" description="input with Description" />
		</div>
	)
}

export const inputWithDefaultValue = () => {
	return (
		<div className="container">
			<Input type="text" value="input with default value" />
		</div>
	)
}

export const inputHasError = () => {
	return (
		<div className="container">
			<Input
				type="text"
				placeholder="input has error"
				hasError={true}
				msgValidation="Your password must be less than 4 characters."
			/>
		</div>
	)
}

export const inputWithPrefix = () => {
	return (
		<div className="container">
			<Input type="text" placeholder="input with Prefix" prefix="http://" />
		</div>
	)
}

export default {
	title: "Primitives/inputs",
}
