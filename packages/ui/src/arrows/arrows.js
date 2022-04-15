import { useContext } from "react"
import { Button } from "@vactory/ui/button"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Arrow = (props) => {
	const { arrows } = useContext(ThemeContext)
	return (
		<Button
			onClick={props.onClick}
			variant="nav"
			className={`${clsx(arrows[props.variant].wrapper)} ${
				props.left ? arrows[props.variant].left : arrows[props.variant].right
			} `}
		>
			{props.left && props.iconLeft}
			{props.right && props.iconRight}
		</Button>
	)
}
