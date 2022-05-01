export const Input = forwardRef(
	(
		{
			label,
			variant = "default",
			placeholder,
			addonAfter,
			addonBefore,
			prefix,
			sufix,
			type = "text",
			handleSufixClick = null,
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
			<div>
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
						{prefix && <div className="flex items-center pl-3">{prefix}</div>}
						<input
							ref={ref}
							onChange={(e) => handleInputChange?.(e.target.value)}
							className={clsx(input[variant].input)}
							type={"file"}
							placeholder={placeholder}
							{...props}
						/>
						{sufix && (
							<div
								className="flex items-center pr-3"
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
