export const tabs = {
	default: {
		wrapper: "w-full max-w-md px-2 py-16 sm:px-0",
		listwrapper: "flex p-1 space-x-1 bg-blue-900 rounded-xl",
		title: {
			base: "w-full py-2.5 text-sm leading-5 font-medium rounded-lg transition-all duration-300 ease-in",
			active: "bg-white shadow text-blue-500",
			inactive: "text-blue-100 hover:bg-white/[0.12] hover:text-white",
		},
		panel:
			"bg-white rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
	},
	secondary: {
		wrapper:
			"w-full max-w-xl border border-purple-300 border-solid rounded-xl overflow-hidden",
		listwrapper: "flex",
		title: {
			base: "w-full py-2.5 text-sm leading-5 font-medium transition-all duration-300 ease-in",
			active: "text-purple-100 bg-purple-900 hover:bg-purple-800",
			inactive: "text-purple-900 bg-purple-100 hover:bg-purple-200",
		},
		panel:
			"bg-white rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
	},
}
