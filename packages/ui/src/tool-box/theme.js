export const toolbox = {
	default: {
		wrapper: "",
		position: "fixed bottom-48 right-0 rtl:left-0 w-48 z-50 rounded-md shadow-md",
		items: "space-y-1 w-full mx-auto bg-white rounded-md ",
		item: {
			wrapper: "group",
			itemIcon: "",
			itemTitle:
				"flex items-center justify-center text-blue-1000 text-sm w-48 font-bold  group-hover:text-white flex items-center group-hover:bg-indigo-500",
		},
	},
	animatedBox: {
		wrapper: "overflow-hidden ",
		position: "fixed right-0 rtl:left-0 top-1/2  translate-x-48 rtl:-translate-x-48",
		items: "flex flex-col space-y-0.5",
		item: {
			wrapper:
				"flex rounded-l-lg delay-75 transform hover:-translate-x-36 rtl:hover:translate-x-36 focus:translate-x-0 transition group",
			itemIcon:
				"flex items-center justify-center text-white bg-gray-500 rounded-l-md rtl:rounded-r-md p-2 group-hover:bg-yellow-500 ",
			itemTitle: "w-48  text-white bg-white flex items-center group-hover:bg-yellow-500",
		},
	},
}
