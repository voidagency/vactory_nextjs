import React, { forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
//import { ThemeContext } from "@vactory/ui/context";
import { ThemeContext } from "../context/context"

const Button = forwardRef(
	(
		{
			children,
			type = "button",
			className,
			variant = "primary",
			size = "normal",
			pill,
			outline = false,
			disabled = false,
			onClick = null,
			icon,
			...props
		},
		ref
	) => {
		const { button } = useContext(ThemeContext)
		return (
			<button
				ref={ref}
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={clsx(
					button.base,
					button.size[size],
					!outline ? button.variant[variant] : button.outlineVariant[variant],
					pill && button.pill,
					disabled && button.disabled,
					className
				)}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.PropTypes = {
	children: PropTypes.node.isRequired,
	submit: PropTypes.oneOf(["submit", "button"]),
	className: PropTypes.string,
	pill: PropTypes.bool,
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
}

export { Button }
