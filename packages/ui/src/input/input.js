import React, { useContext, forwardRef } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Input = forwardRef(
	(
		{
			label,
			variant = "default",
			placeholder,
			addonAfter = null,
			addonBefore = null,
			prefix = null,
			sufix = null,
			type = "text",
			handleSufixClick = null, // this only used in password case and it maight be optimized
			handleInputChange,
			hasError,
			errorMessage,
			description,
			props,
		},
		ref
	) => {
		const { input } = useContext(ThemeContext)
		return (
			<div className="w-full">
				{label && <label className={clsx(input[variant].label)}>{label}</label>}
				<div
					className={clsx(input[variant].wrapper, hasError && input[variant].hasError)}
				>
					{addonBefore && (
						<div className={clsx("flex", input[variant].addonBefore)}>{addonBefore}</div>
					)}
					<span
						className={clsx(
							addonBefore && addonAfter
								? input[variant].inputWrapper.inside
								: addonAfter
								? input[variant].inputWrapper.left
								: addonBefore
								? input[variant].inputWrapper.right
								: input[variant].inputWrapper.full,
							hasError && input[variant].hasError
						)}
					>
						{prefix && <div className={clsx(input[variant].prefix)}>{prefix}</div>}
						<input
							ref={ref}
							onChange={(e) => handleInputChange?.(e.target.value)}
							className={clsx(input[variant].input)}
							type={type}
							placeholder={placeholder}
							{...props}
						/>
						{sufix && (
							<div
								className={clsx(input[variant].sufix)}
								onClick={() => {
									handleSufixClick?.()
								}}
							>
								{sufix}
							</div>
						)}
					</span>

					{addonAfter && (
						<div className={clsx("flex", input[variant].addonAfter)}>{addonAfter}</div>
					)}
				</div>
				{errorMessage && hasError && (
					<p className={input[variant].errorMessage}>{errorMessage}</p>
				)}
				{description && <p className={input[variant].description}>{description}</p>}
			</div>
		)
	}
)

export default Input
