import React, { forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Link } from "@vactory/ui/link"

const CustomButton = ({ children, icon, ...props }) => {
	return (
		<button {...props}>
			{icon && icon}
			{children}
		</button>
	)
}

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
			href = null,
			target = null,
			...props
		},
		ref
	) => {
		const { button } = useContext(ThemeContext)
		const Button = href ? Link : CustomButton
		return (
			<Button
				ref={ref}
				disabled={disabled}
				type={type}
				onClick={onClick}
				href={href}
				target={target}
				className={clsx(
					button.base,
					button.size[size],
					!outline ? button.variant[variant] : button.outlineVariant[variant],
					pill && button.pill,
					disabled && button.disabled,
					icon && button.icon,
					className
				)}
				{...props}
			>
				{icon && icon}
				{children}
			</Button>
		)
	}
)

Button.propTypes = {
	children: PropTypes.node.isRequired,
	submit: PropTypes.oneOf(["submit", "button"]),
	className: PropTypes.string,
	pill: PropTypes.bool,
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
}

export { Button }
