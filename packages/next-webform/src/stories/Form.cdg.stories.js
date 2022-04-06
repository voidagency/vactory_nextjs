import React from "react"
import { action } from "@storybook/addon-actions"

import { Form } from "../components"

export default {
	title: "Form",
}

export const Inline = () => (
	<Form
		webformId={"contact"}
		schema={{
			name: {
				type: "text",
				label: "Nom et Prénom",
				validation: {
					required: true,
					requiredError: 'Le champ "Nom et Prénom" est requis',
				},
			},
			select: {
				type: "select",
				label: "Vous êtes",
				options: [
					{
						value: "",
						label: "Sélectionner",
					},
					{
						value: "Investisseurs institutionnels",
					},
					{
						value: "Investisseurs corporates",
					},
					{
						value: "Investisseurs particuliers",
					},
					{
						value: "_other_",
						label: "Autre...",
					},
				],
				validation: {
					required: true,
					requiredError: 'Le champ "Vous êtes" est requis',
				},
			},
			email: {
				type: "text",
				label: "Adresse email",
				validation: {
					required: true,
					requiredError: "Le champ email est requis",
					pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i",
					patternError: "Le mail n'est pas valide",
				},
			},
			phoneNumber: {
				type: "text",
				label: "Téléphone",
				htmlInputType: "tel",
				validation: {
					required: true,
					requiredError: 'Le champ "Téléphone" est requis',
					pattern: "/(\\+212|0)([ \\-_/]*)(\\d[ \\-_/]*){9}/",
					patternError:
						"Le champ 'Téléphone' n'est pas un numéro de téléphone Marocain valide",
				},
			},
			object: {
				type: "text",
				label: "Objet de la demande",
				validation: {
					required: true,
					requiredError: 'Le champ "Objet de la demande" est requis',
				},
			},
			about: {
				type: "textArea",
				label: "Message",
				validation: {
					required: true,
					requiredError: 'Le champ "Objet de la demande" est requis',
				},
			},
			agree: {
				type: "checkbox",
				label:
					"J'ai lu et j'accepte les conditions générales d'utilisation, notamment la mention relative à la protection des données personnelles.",
				validation: {
					required: true,
					requiredError: "Ce champ est requis",
				},
			},
			captcha: {
				type: "captcha",
				// label: 'Captcha',
				helperText: "Please check reCaptcha",
				validation: {
					required: true,
					requiredError: "Ce champ est requis",
				},
			},
		}}
		buttons={{
			submit: {
				leftIcon: "floppy-disk",
			},
			reset: {
				hidden: true,
			},
		}}
		styles={{
			submitButton: {
				outline: "primary",
				borderRadius: "rounded",
				width: "100%",
				size: "large",
				justifyContent: "center",
				pt: "10px",
				pb: "10px",
				transition: "all .2s",
			},
			submitButtonLeftIcon: {
				size: "18px",
			},
			formControlLayout: {
				inner: {
					width: "100%",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					"&&.ui-form__formControlInner_noLabel": {
						ml: ["0px", "33.33%"],
						width: "auto",
					},
				},
				label: {
					flexBasis: ["100%", "33.33%"],
				},
				field: {
					flexGrow: 1,
				},
			},
		}}
	/>
)
