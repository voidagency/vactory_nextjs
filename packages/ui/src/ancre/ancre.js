import { useState, useContext } from "react"
import { useScrollId } from "../../hooks/useScrollId"
import { Link } from "@vactory/ui/link"
import { Container } from "@vactory/ui/container"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const ItemAncre = ({ item, icon, variant }) => {
	const [variable, setVariable] = useState(item.id)
	const scrollId = useScrollId(variable)
	const { itemAncre } = useContext(ThemeContext)
	return (
		<div className={`${clsx(itemAncre[variant].wrapper)}`}>
			<Link
				href={item.id}
				className={classNames(
					item.id.split("#")[1] === scrollId
						? `${itemAncre[variant].item.active}`
						: `${itemAncre[variant].item.notActive}`,
					`${itemAncre[variant].item.wrapper} `
				)}
				aria-current={item.current ? "page" : undefined}
			>
				{item.name && item.name}
				{icon && icon}
			</Link>
		</div>
	)
}

export const Ancre = ({ navigation, icon, variant }) => {
	const { ancre } = useContext(ThemeContext)
	return (
		<Container layout="fluid" className={`${clsx(ancre[variant].position)}`}>
			<div className={ancre[variant].wrapper}>
				{navigation.map((item) => (
					<ItemAncre key={item.id} item={item} icon={icon} variant={variant} />
				))}
			</div>
		</Container>
	)
}
