export const accordionButton = {
	default: {
		className: "",
		p: "w-full flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
	},
}

export const accordionPanel = {
	default: {
		className: "",
		transition: {
			enter: "transition duration-100 ease-out",
			enterFrom: "transform scale-95 opacity-0",
			enterTo: "transform scale-100 opacity-100",
			leave: "transition duration-75 ease-out",
			leaveFrom: "transform scale-100 opacity-100",
			leaveTo: "transform scale-95 opacity-0",
		},
		disclosurePanel: {
			className: "px-4 pt-4 pb-2 text-sm text-gray-500",
		},
	},
}
