export const button = {
	pill: "rounded-full",
	icon: "flex items-center gap-2",
	size: {
		small:
			"px-[12px] py-[12px] text-base leading-6 rounded-[4px] transition transition-all ease-in-out duration-300",
		normal:
			"text-base leading-[20px] text-center px-[20px] py-[12px] rounded-[4px] transition transition-all ease-in-out duration-300 inline-flex items-center justify-center flex-row gap-[8px]",
		large: "px-8 py-3 text-lg",
		xlarge: "px-10 py-5 text-3xl",
	},
	variant: {
		primary:
			"text-white bg-primary-500 border border-solid border-primary-500 shadow-[0px_1px_2px_rgba(16,24,40,0.05)] hover:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_4px_#FAE403] active:bg-primary-600 active:border-primary-600",
		secondary:
			"text-gray-700 bg-white border border-solid border-gray-300 shadow-[0px_1px_2px_rgba(16,24,40,0.05)] hover:shadow[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F2F4F7] active:bg-gray-50",
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

const s = () => <p className="text-white px-1 gap-[10px]"></p>
