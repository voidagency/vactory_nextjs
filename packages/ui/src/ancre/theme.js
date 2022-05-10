export const itemAncre = {
	default: {
		wrapper: "flex flex-col",
		item: {
			wrapper:
				"block px-4 text-xs hover:text-blue-500  active:text-white active:border-left ",
			active: "text-yellow-500 font-bold",
			notActive: "text-gray-900 font-normal",
		},
	},
	Ancrebox: {
		wrapper: "flex flex-row",
		item: {
			wrapper:
				"block  flex flex-row px-4 py-2 text-xs hover:text-blue-500  active:text-white active:border-left active:border-solid",
			active: "text-yellow-500 font-bold",
			notActive: "text-gray-900 font-normal",
		},
	},
}

export const ancre = {
	default: {
		position: "sticky px-0  top-0 bg-white mt-6 z-10 mb-16",
		wrapper:
			"flex relative flex-row shadow-2xl items-center justify-center divide-x py-4 md:mx-28",
	},
	Ancrebox: {
		position: "fixed py-0 left-10 rtl:right-10 bottom-64  z-10",
		wrapper:
			"fixed absolute  shadow-2xl items-center justify-center divide-y w-16 bg-white rounded-md ",
	},
}
