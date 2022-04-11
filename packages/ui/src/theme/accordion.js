export const accordion = {
	default: {
		wrapper: "",
		element: "mb-3",
		button: {
			base: "flex justify-between w-full px-4 py-2 text-sm font-medium ltr:text-left rtl-text-right rounded-lg",
			inactive: "text-purple-900 bg-purple-100 hover:bg-purple-200",
			active: "text-purple-100 bg-purple-900 hover:bg-purple-800",
			icon: {
				id: "arrow-sm-down-solid",
				base: "transition ease-in duration-300",
				inactive: "rotate-180",
				active: "",
				width: "20",
				height: "20",
			},
		},
		panel: "px-4 pt-4 pb-2 text-sm text-gray-500",
	},
	secondary: {
		wrapper: "bg-indigo-100 p-10 rounded-xl",
		element: "mb-5",
		button: {
			base: "flex justify-between font-bold text-2xl w-full px-5 py-4 border shadow border-indigo-500 rounded-full transition-all duration-300 ease-in",
			inactive: "bg-white hover:bg-indigo-500 text-indigo-500 hover:text-white",
			active: "bg-indigo-500 hover:bg-white text-white hover:text-indigo-500",
			icon: {
				id: "chevron-right",
				base: "transition ease-in duration-300",
				inactive: "rotate-0",
				active: "rotate-90",
				width: "35",
				height: "35",
			},
		},
		panel: "px-4 pt-4 pb-2 text-sm text-gray-500",
	},
}
