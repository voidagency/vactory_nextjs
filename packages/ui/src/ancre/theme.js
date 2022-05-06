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
	Ancrefill: {
		wrapper: "",
		item: {
			wrapper: "block px-1  py-6 text-xs  hover:text-blue-500 ",
			active: "text-blue-500 font-bold  px:4  bg-yellow-500 md:to-white",
			notActive: "text-gray-900 font-normal bg-white opacity-50",
		},
	},
	Ancredots: {
		wrapper: "flex items-center justify-center",
		item: {
			wrapper: "block flex w-2 h-2  my-4 px-1 py-1 rounded-full overflow-hidden",
			active: "bg-yellow-500 px-2 py-2 md:transition md:ease-in-out m:delay-100 ",
			notActive: "bg-white md:opacity-50 cursor-pointer rounded-full bg-white",
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
	Ancrefill: {
		position: "fixed py-0 left-10 rtl:right-10 bottom-64  z-10",
		wrapper: "fixed absolute shadow-2xl items-center justify-center divide-y rounded-xl ",
	},
	Ancredots: {
		position: "fixed py-0 left-10  rtl:right-10 bottom-64  z-10",
		wrapper: "fixed absolute  items-center justify-center rounded-xl ",
	},
}
