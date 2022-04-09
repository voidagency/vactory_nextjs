export const headerMobile = {
	default: {
		wrapper: "absolute items-center md:hidden right-4 top-6",
		disclosureButton: {
			wrapper:
				"inline-flex bg-gray-700 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
			openIcon: "block h-6 w-6",
			notOpenIcon: "block h-6 w-6",
			ariaHidden: "true",
		},
		disclosurePanel: {
			wrapper: "md:hidden",
			buttonsWrapper: "block px-1 py-2 rounded-md text-base font-medium",
		},
	},
}
