export const accordion = {
	default: {
		wrapper: "",
		element: "mb-6",
		button: {
			base: "flex justify-between w-full px-6 py-5 text-xl bg-white font-medium ltr:text-left rtl-text-right",
			inactive:
				"text-gray-900 hover:text-blue-500 rounded-md border border-slate-100 shadow-md",
			active:
				"text-blue-500 rounded-t-md border-t border-r border-l border-slate-100 shadow-md",
			icon: {
				id: "plus",
				base: "transition ease-in duration-300",
				inactive: "",
				active: "rotate-45",
				width: "25",
				height: "25",
			},
		},
		panel: "text-sm text-gray-500 border border-slate-50 rounded-b-md",
	},
}
