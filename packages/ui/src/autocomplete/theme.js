export const comboxOption = {
	default: {
		className: "cursor-default select-none relative py-2 pl-10 pr-4",
		active: "text-white bg-teal-600 rounded-md",
		notActive: "text-gray-900",
		span: {
			className: "block truncate",
			selected: "font-medium",
			notselected: "font-normal",
		},

		selected: {
			span: { className: "absolute inset-y-0 left-0 flex items-center pl-3" },
			active: "text-white",
			notActive: "text-teal-600",
		},
	},
}

export const autocomplete = {
	default: {
		className: "w-72 fixed top-16",
		combobox: {
			className: "relative mt-1",
			div: {
				className:
					"relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden",
				input:
					"w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900",
				button: "absolute inset-y-0 right-0 flex items-center pr-2",
			},
			transition: {
				leave: "transition ease-in duration-100",
				leaveFrom: "opacity-100",
				leaveTo: "opacity-0",
				comboboxoptions: {
					className:
						"absolute w-full p-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
					div: {
						className: "cursor-default select-none relative py-2 px-4 text-gray-700",
					},
				},
			},
		},
	},
}
