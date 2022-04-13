export const button = {
	pill: "rounded-full",
	icon: "flex items-center gap-2",
	size: {
		small: "px-3 py-2 text-sm",
		normal: "text-sm leading-5 py-[9px] px-6",
		large: "px-8 py-3 text-lg",
		xlarge: "px-10 py-5 text-3xl",
	},
	variant: {
		primary:
			"bg-primary-500 hover:bg-white border-primary-500 text-white hover:text-primary-500",
		secondary:
			"bg-gray-200 border-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
		danger:
			"bg-red-500 border-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
		test: "bg-red-500 border-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
	},
	outlineVariant: {
		primary: `bg-white hover:bg-primary-500 border-primary-500 text-primary-500 hover:text-white`,
		secondary: `bg-transparent border-gray-200 text-gray-600 hover:text-white hover:bg-gray-200`,
		danger: `bg-transparent border-red-500 text-red-500 hover:text-white hover:bg-red-500`,
	},
}

const span = () => {
	return <span className="text-white text-white text-sm leading-5 py-[9px] px-6"></span>
}
