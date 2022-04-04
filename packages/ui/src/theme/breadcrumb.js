export const breadcrumb = {
	default: {
		wrapper: "",
		list: "flex items-center space-x-4",
		listElement: "flex items-center",
		link: "ml-4 text-sm font-medium text-gray-500 hover:text-indigo-500",
		linkActive: "ml-4 text-sm font-medium text-indigo-500 hover:text-gray-700",
		separateIcon: {
			id: "arrow-sm-right-solid",
			width: "20",
			height: "20",
			className: "",
		},
		homeIcon: {
			id: "home",
			width: "30",
			height: "30",
			className: "",
		},
	},
	secondary: {
		wrapper: "",
		list: "flex items-center space-x-4",
		listElement: "flex items-center",
		link: "ml-4 text-base text-gray-500 hover:text-indigo-500",
		linkActive: "ml-4 text-base text-red-500 hover:text-gray-700",
		separateIcon: {
			id: "chevron-right",
			width: "15",
			height: "15",
			className: "text-gray-400",
		},
		homeIcon: {
			id: "home",
			width: "30",
			height: "30",
			className: "",
		},
	},
}
