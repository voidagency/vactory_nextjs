import { Button } from "@vactory/ui/button"
import { useContext } from "react"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"
import { Link } from "@vactory/ui/link"

export const ToolBox = ({ list, className = "", variant }) => {
	const { toolbox } = useContext(ThemeContext)
	return (
		<div className={clsx(toolbox[variant].wrapper, className)}>
			<nav className={clsx(toolbox[variant].position, className)}>
				<ul className={toolbox[variant].items}>
					{list.map((item, index) => {
						return (
							<li key={item.id}>
								<Link
									key={index}
									href={item.href}
									className={toolbox[variant].item.wrapper}
									variant={variant}
								>
									<div className={toolbox[variant].item.itemIcon}>{item.icon}</div>
									<div className={toolbox[variant].item.itemTitle}>
										<span className="block m-2">{item.title}</span>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
