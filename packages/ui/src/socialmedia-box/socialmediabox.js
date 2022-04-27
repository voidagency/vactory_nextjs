import { useContext } from "react"
import { Link } from "@vactory/ui/link"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

export const MediaBox = ({ list, className = "", variant = "default" }) => {
	const { socialmediabox } = useContext(ThemeContext)
	return (
		<div className={clsx(socialmediabox[variant].wrapper, className)}>
			<div className={socialmediabox[variant].container}>
				{list.map((media, index) => {
					return (
						<Link key={index} href={media.href}>
							<Icon
								id={media.id}
								className={socialmediabox[variant].icons}
								aria-hidden="true"
							/>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
