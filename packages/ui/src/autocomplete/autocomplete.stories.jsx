import React from "react"
import { Autocomplete } from "./autocomplete"
import { Icon } from "@vactory/ui/icon"

export default {
	title: "Components/autocomplete",
	component: Autocomplete,
}

const Template = (args) => {
	return <Autocomplete {...args} />
}

export const autocomplete = Template.bind({})
autocomplete.args = {
	people: [
		{ id: 1, name: "Casablanca" },
		{ id: 2, name: "Paris" },
		{ id: 3, name: "Agadir" },
	],
	icon: <Icon id="check-solid" width="15" height="15" />,
}
