import React, { useContext, forwardRef } from "react"
import clsx from "clsx"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Input = forwardRef(
	(
		{
			prefix,
			value,
			type = "text",
			placeholder,
			className = "",
			description,
			hasError = false,
			msgValidation,
			variant = "default",
			...props
		},
		ref
	) => {
		const [inputValue, handleChangeValue] = React.useState(value)
		const { input } = useContext(ThemeContext)

		return (
			<div>
				<div className={input[variant].wrapper}>
					{prefix && (
						<div className={input[variant].prefix}>
							<span>{prefix}</span>
						</div>
					)}
					<input
						ref={ref}
						type={type}
						value={inputValue}
						className={clsx(
							input[variant].element.base,
							prefix && input[variant].element.hasPrefix,
							hasError
								? input[variant].element.hasError
								: input[variant].element.hasNotError,
							className
						)}
						onChange={(e) => handleChangeValue(e.target.value)}
						placeholder={placeholder}
						{...props}
					/>
					{hasError && (
						<Icon
							id={input[variant].icon.id}
							width={input[variant].icon.width}
							height={input[variant].icon.height}
							className={input[variant].icon.className}
						/>
					)}
				</div>
				{msgValidation && hasError && (
					<p className={input[variant].msgError}>{msgValidation}</p>
				)}
				{description && <p className={input[variant].description}>{description}</p>}
			</div>
		)
	}
)
