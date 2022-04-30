import React from "react"
//import { withKnobs, boolean } from "@storybook/addon-knobs";
//import {ChiffreCleWrapper} from "../chiffreCleWrapper";
//import {Banner} from '../banner'
import { Input } from "./input"
import { InputPassword } from "./inputPassword"
import { Icon } from "@vactory/ui/icon"

export const defaultInput = () => {
	return (
		<div className="container">
			<Input variant="default" placeholder="Email..." />
		</div>
	)
}

export const roundedInput = () => {
	return (
		<div className="container">
			<Input variant="rounded" placeholder="Email..." />
		</div>
	)
}

export const inputWithLabelAndDescription = () => {
	return (
		<div className="container">
			<Input
				variant="rounded"
				label="Email"
				placeholder="Email..."
				description="This is the description of the input"
			/>
		</div>
	)
}

export const inputWithPrefix = () => {
	return (
		<div className="container">
			<Input
				label="First name"
				placeholder="Firstname..."
				description="This is the description of the input"
				prefix={<Icon id="user" className="w-5 h-5" />}
			/>
		</div>
	)
}

export const inputWithSufix = () => {
	return (
		<div className="container">
			<Input
				label="First name"
				placeholder="Firstname..."
				description="This is the description of the input"
				sufix={<Icon id="user" className="w-5 h-5" />}
			/>
		</div>
	)
}

export const inputWithAddonAfter = () => {
	return (
		<div className="container">
			<Input
				label="First name"
				placeholder="Firstname..."
				description="This is the description of the input"
				addonAfter={<Icon id="user" className="w-5 h-5 mx-3" />}
			/>
		</div>
	)
}

export const inputWithAddonBefore = () => {
	return (
		<div className="container">
			<Input
				label="Domaine name"
				placeholder="Enter your domaine"
				description="This is the description of the input"
				addonBefore={<span className="mx-3">https://</span>}
			/>
		</div>
	)
}

export const inputHasError = () => {
	return (
		<div className="container">
			<Input
				label="City"
				type="text"
				placeholder="input has error"
				hasError={true}
				errorMessage="Your password must be less than 4 characters."
			/>
		</div>
	)
}

export const inputPassword = () => {
	return (
		<div className="container">
			<InputPassword
				variant={"rounded"}
				label="Password"
				prefix={<Icon id="user" className="w-5 h-5" />}
				placeholder={"Password"}
				description="The password must contain at least 8 caracters"
			/>
		</div>
	)
}

export const roundedInputPassword = () => {
	return (
		<div className="container">
			<InputPassword
				variant={"default"}
				label="Password"
				prefix={<Icon id="user" className="w-5 h-5" />}
				placeholder={"Password"}
				description="The password must contain at least 8 caracters"
			/>
		</div>
	)
}

export default {
	title: "Primitives/inputText",
}
