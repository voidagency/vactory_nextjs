import { Button } from "@vactory/ui/button"

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
