import React from "react"
import { Ancre } from "./ancre"
import { Icon } from "@vactory/ui/icon"
import { Container } from "@vactory/ui/container"

const Template = (args) => {
	return (
		<>
			<Ancre {...args} />
			<div>
				<Container
					className="bg-slate-400  flex items-center justify-center"
					id="container1"
				>
					<img
						className="hidden lg:block h-auto w-auto"
						src="https://capital-azur.com/sites/default/files/2020-05/1.jpg"
						alt="Workflow"
					/>
				</Container>
				<Container
					className="h-screen bg-slate-500 flex items-center justify-center"
					id="container2"
				>
					<img
						className="hidden lg:block h-auto w-auto"
						src="https://capital-azur.com/sites/default/files/2020-05/3.jpg"
						alt="Workflow"
					/>
				</Container>
				<Container
					className="h-screen bg-slate-600 flex items-center justify-center"
					id="container3"
				>
					<img
						className="hidden lg:block h-auto w-auto"
						src="https://capital-azur.com/sites/default/files/2020-06/gerer-mon-epargne.jpg"
						alt="Workflow"
					/>
				</Container>
				<Container
					className="h-screen bg-slate-800 flex items-center justify-center"
					id="container4"
				>
					<img
						className="hidden lg:block h-auto w-auto"
						src="https://capital-azur.com/sites/default/files/2020-12/slider-pro.jpg"
						alt="Workflow"
					/>
				</Container>
			</div>
		</>
	)
}

export const Default = Template.bind({})
Default.args = {
	variant: "default",
	navigation: [
		{ name: "ONE", id: "#container1", current: true },
		{ name: "TWO", id: "#container2", current: false },
		{ name: "THREE", id: "#container3", current: false },
		{ name: "FOR", id: "#container4", current: false },
	],
	//icon: <Icon id="check-solid" width="30" height="30" />,
}

export const AncreFixedBox = Template.bind({})
AncreFixedBox.args = {
	variant: "Ancrebox",
	navigation: [
		{ name: "ONE", id: "#container1", current: true },
		{ name: "TWO", id: "#container2", current: false },
		{ name: "THREE", id: "#container3", current: false },
		{ name: "FOR", id: "#container4", current: false },
	],
	//icon: <Icon id="check-solid" width="30" height="30" />,
}

export default {
	title: "Components/Ancre",
	component: Ancre,
}
