export const button = {
	base: "focus:outline-none transition ease-in-out duration-300 rounded-md", // delete border border from base end add to specific variant --> to use for nav button
	disabled: "opacity-50 cursor-not-allowed",
	pill: "rounded-full",
	icon: "flex items-center gap-3",
	size: {
		small: "px-2 py-1 text-sm",
		normal: "text-sm leading-[21px] px-[10px] py-[9px]",
		large: "px-8 py-3 text-sm",
		xlarge: "px-10 py-5 text-3xl",
	},
	variant: {
		primary:
			"bg-blue-500 hover:bg-white border border-solid border-blue-500 text-white hover:text-indigo-500 pl-2 rounded-md whitespace-nowrap",
		secondary:
			"bg-gray-200 border-gray-200 border border-solid hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
		danger:
			"bg-red-500 border-red-500 border border-solid hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
		// This would be for the navbar
		nav: "",
	},
	outlineVariant: {
		primary: `bg-transparent hover:bg-indigo-500 border border-indigo-500 text-indigo-500 hover:text-white`,
		secondary: `bg-transparent border-gray-200 text-gray-600 hover:text-white hover:bg-gray-200`,
		danger: `bg-transparent border-red-500 text-red-500 hover:text-white hover:bg-red-500`,
	},
}
