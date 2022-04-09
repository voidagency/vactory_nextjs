import React from "react"

import { MsgValidation } from "./msg-validation"

export default {
	title: "Primitives/MessageDeValidation",
	component: MsgValidation,
}

const ListError = () => (
	<ul className="list-disc">
		<li>Veuillez saisir une email adress valide</li>
		<li>Le champ nom est requis</li>
		<li>Le champ Prenom est requis</li>
		<li>Veuillez valider le captcha</li>
	</ul>
)

const Template = (args) => <MsgValidation {...args} />

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
	state: "success",
	children: <ListError />,
	showClose: true,
}

export const SuccessMessage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuccessMessage.args = {
	state: "success",
	children: <p>Votre soumission a été enregister.</p>,
}

export const error = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
error.args = {
	state: "error",
	children: <ListError />,
	showClose: true,
}

export const warning = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
warning.args = {
	state: "warning",
	children: <ListError />,
	showClose: true,
}
