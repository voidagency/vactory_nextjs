import { Button } from "@vactory/ui/button"
import { IconHref } from "./IconHref"

const tools = [
	{
		name: "OUVRIR UN COMPTE",
		href: "#",
		icon: "",
	},
	{
		name: "RECLAMATION",
		href: "#",
		icon: "",
	},
	{
		name: "FAQ",
		href: "#",
		icon: "",
	},
]

const socialsmedia = [
	{ id: "youtube-solid", href: "#" },
	{ id: "twitter-solid", href: "#" },
	{ id: "linkedin-solid", href: "#" },
	{ id: "facebook-solid", href: "#" },
]

export const ToolBox = () => {
	return (
		<div className=" w-full py-10">
			<div className="space-y-1 w-full mx-auto bg-white rounded-md">
				{tools.map((tool, index) => {
					return (
						<Button key={index} variant="toolBox" size="large" icon={tool.icon}>
							{tool.name}
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export const MediaBox = () => {
	return (
		<div className=" w-full py-10">
			<div className="space-y-1 w-full mx-auto bg-indigo-500 rounded-md">
				{socialsmedia.map((socialmedia, index) => {
					return <IconHref key={index} media={socialmedia} />
				})}
			</div>
		</div>
	)
}
