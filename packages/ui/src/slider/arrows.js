import React, { useContext, forwardRef } from "react"
import clsx from "clsx"
import { Button } from "@vactory/ui/button"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"

const IconLeft = () => <Icon id="chevron-left" width="30" height="30" />

const IconRight = () => <Icon id="chevron-right" width="30" height="30" />

export const Arrows = forwardRef(
	(
		{
			onClick,
			className = "",
			variant,
			left,
			right,
			iconLeft = <IconLeft />,
			iconRight = <IconRight />,
			...props
		},
		ref
	) => {
		const { slider } = useContext(ThemeContext)
		return (
			<button
				onClick={onClick}
				ref={ref}
				className={clsx(
					className,
					slider[variant].arrows.wrapper,
					left && slider[variant].arrows.left,
					right && slider[variant].arrows.right
				)}
				{...props}
			>
				{left && iconLeft && iconLeft}
				{right && iconRight && iconRight}
			</button>
		)
	}
)
