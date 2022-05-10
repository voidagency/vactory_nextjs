export const checkboxV2 = {
	wrapper: "flex items-center gap-x-2",
	input: "h-4 w-4 rounded p-0.5 flex items-center justify-center transition duration-200",
	checked: {
		enabled: "bg-red-500 hover:ring-2 hover:ring-red-300 cursor-pointer",
		disabled: "bg-gray-300 cursor-not-allowed",
	},
	unchecked: {
		enabled: "border border-gray-300 cursor-pointer",
		disabled: "border border-gray-300 cursor-not-allowed",
	},
	label: {
		enabled: "text-sm",
		disabled: "text-sm text-gray-300",
	},
}
