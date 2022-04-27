import { Button } from "@vactory/ui/button"
import { useContext } from "react"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

export const ToolBox = ({ list, className = "", variant = "default" }) => {
	const { toolbox } = useContext(ThemeContext)
	return (
		<div className={clsx(toolbox[variant].wrapper, className)}>
			<div className={toolbox[variant].container}>
				{list.map((tool, index) => {
					return (
						<Button
							key={index}
							variant={toolbox[variant].button.variant}
							size={toolbox[variant].button.size}
							icon={tool.icon}
						>
							{tool.name}
						</Button>
					)
				})}
			</div>
		</div>
	)
}
