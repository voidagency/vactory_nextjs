export const avatar = {
	default: {
		base: "inline-block rounded-full",
	},
	placeholder: {
		base: "inline-block rounded-full overflow-hidden bg-gray-100",
		svg: "h-full w-full text-gray-300",
	},
	initials: {
		base: "inline-flex items-center justify-center rounded-full bg-gray-500",
		text: "text-xs font-medium leading-none text-white",
		textSizes: {
			small: "text-xs font-medium",
			normal: "text-sm font-medium",
			large: "font-medium",
			xlarge: "text-lg font-medium",
			xxlarge: "text-xl font-medium",
		},
	},
	size: {
		small: "h-6 w-6",
		normal: "h-8 w-8",
		large: "h-10 w-10",
		xlarge: "h-12 w-12",
		xxlarge: "h-14 w-14",
	},
}
