import React from "react"
import { Box, Button, Flex, Row, Col, Text } from "vactory-ui"
import { Form, RenderField } from "../components"

export default {
	title: "Form",
}

const schema = {
	name: {
		type: "text",
		label: "Name",
		placeholder: "Name",
	},
	email: {
		type: "text",
		label: "Email",
		placeholder: "admin@void.fr",
		validation: {
			required: true,
			requiredError: "Le champ email est requis",
			pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i",
			patternError: "Le mail n'est pas valide",
		},
	},
	confirm_email: {
		type: "text",
		label: "Email Confirm",
		placeholder: "admin@void.fr",
		validation: {
			required: true,
			requiredError: "Le champ confirm email est requis",
			pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i",
			patternError: "Le champ confirm email n'est pas valide",
			sameAs: "email",
			sameAsError: "Le champ confirm email doit être pareil que email.",
		},
	},
	about: {
		type: "textArea",
		label: "About",
		placeholder: "Write something about yourself",
	},
	number: {
		type: "number",
		label: "Age",
		placeholder: "Age",
	},
	phoneNumber: {
		type: "text",
		label: "Phone Number",
		htmlInputType: "tel",
		validation: {
			required: true,
			requiredError: "Le champ Phone Number est requis",
			pattern: "/(\\+212|0)([ \\-_/]*)(\\d[ \\-_/]*){9}/",
			patternError:
				"Le champ 'Phone Number' n'est pas un numéro de téléphone Marocain valide",
		},
	},
	select: {
		type: "select",
		label: "Gender",
		options: [
			{
				value: "Male",
			},
			{
				value: "Female",
			},
			{
				value: "Rather not say",
			},
		],
		validation: {
			required: true,
			requiredError: "Le champ Gender est requis",
		},
	},
	agree: {
		type: "checkbox",
		label: "Do you agree",
		validation: {
			required: true,
			requiredError: "Ce champ est requis",
		},
	},
	do_you_agree: {
		type: "radios",
		label: "Do you agree radio",
		validation: {
			required: true,
			requiredError: "Ce champ est requis",
		},
		options: [
			{
				name: "Yes",
				value: "yes",
			},
			{
				name: "No",
				value: "no",
			},
		],
	},
	days: {
		type: "checkboxes",
		label: "Days of the Week",
		validation: {
			required: true,
			requiredError: "Ce champ est requis",
		},
		options: [
			{
				name: "Monday",
				value: "monday",
			},
			{
				name: "Tuesday",
				value: "tuesday",
			},
			{
				name: "Wednesday",
				value: "wednesday",
			},
			{
				name: "Thursday",
				value: "thursday",
			},
			{
				name: "Friday",
				value: "friday",
			},
		],
	},
	images: {
		type: "upload",
		label: "Images",
		helperText: "Please upload some images",
		validation: {
			// required: true,
			// requiredError: 'Le champ Images est requis',
			maxSizeBytes: 1024 * 1024 * 9,
			extensions: ".gif,.jpg,.jpeg,.png",
			maxFiles: 2,
		},
		isMultiple: true,
		maxSizeMb: "1",
		extensionsClean: "gif jpg jpeg png",
	},
	captcha: {
		type: "captcha",
		// label: 'Captcha',
		helperText: "Please check reCaptcha",
		validation: {
			required: true,
			requiredError: "Le champ reCaptcha est requis",
		},
	},
}

const styles = {
	reCaptchaField: {
		errorMessage: {
			color: "warning500",
		},
	},
	helperText: {},
}

export const Layout = () => {
	const render = (resetForm, isLoading, isSuccess, isError) => {
		return (
			<Box>
				{isSuccess && (
					<Box>
						<Text>Thank you for filling our form.</Text>
					</Box>
				)}
				<RenderField
					field={[
						"name",
						{
							...schema.name,
							label: null,
						},
					]}
				/>

				<Row>
					<Col xs={12} md={6}>
						<RenderField field={["email", schema.email]} />
					</Col>
					<Col xs={12} md={6}>
						<RenderField field={["confirm_email", schema.confirm_email]} />
					</Col>
				</Row>

				<Flex justifyContent="space-between" alignItems="flex-start" flexWrap="wrap">
					<RenderField field={["captcha", schema.captcha]} />
					<Button type="submit" disabled={isLoading}>
						Submit
					</Button>
				</Flex>
			</Box>
		)
	}

	return <Form webformId={"test_form"} schema={schema} render={render} styles={styles} />
}
