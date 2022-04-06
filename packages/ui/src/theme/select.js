export const select = {
	default: {
		wrapper: "w-72 fixed top-16",
		listBox: {
			wrapper: "relative mt-1",
			button: {
				wrapper:
					"relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",
				selected: "block truncate",
				selectedIcon:
					"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
			},
			transition: {
				leave: "transition ease-in duration-100",
				leaveFrom: "opacity-100",
				leaveTo: "opacity-0",
				listBoxOptions: {
					wrapper:
						"absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
					listBoxOption: {
						wrapper: "cursor-default select-none relative py-2 pl-10 pr-4",
						active: "text-amber-900 bg-amber-100",
						notActive: "text-gray-900",
						content: {
							wrapper: "block truncate",
							selectedfont: "font-medium",
							notSelectedFont: "font-normal",
							selected: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
						},
					},
				},
			},
		},
	},
}
