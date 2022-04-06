import React, { useContext } from "react"
import clsx from "clsx"
import { BaseBackToTop } from "./back-to-top"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

export const BackToTop = ({ variant = "default", className = "", icon, ...rest }) => {
	const { backTotop } = useContext(ThemeContext)
	let buttonIcon = <Icon id="arrow-circle-up" width="36" height="36" />
	if (icon) {
		buttonIcon = icon
	}
	return (
		<BaseBackToTop
			showOnScrollUp={true}
			showAt={backTotop[variant].showAt}
			speed={backTotop[variant].speed}
			easing={backTotop[variant].easing}
			className={clsx(backTotop[variant].className, className)}
			{...rest}
		>
			{buttonIcon}
		</BaseBackToTop>
	)
}

export { BaseBackToTop }
