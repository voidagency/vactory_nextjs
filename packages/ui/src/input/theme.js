export const input = {
	default: {
		wrapper: "relative",
		prefix:
			"absolute bg-gray-100 top-0 h-full flex items-center  pointer-events-none px-1 ltr:left-0 rtl:right-0 text-black sm:text-sm",
		element: {
			base: "mt-1 block w-full focus:outline-none sm:text-sm rounded-md shadow-sm",
			hasNotError:
				"text-black border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
			hasError:
				"block w-full ltr:pr-10 rtl:pl-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
			hasPrefix: "pl-14",
		},
		msgError: "sm:text-sm text-red-600",
		description: "text-sm text-indigo-500",
		icon: {
			id: "paper-airplane",
			width: 20,
			height: 20,
			className:
				"absolute top-1/2 -translate-y-1/2 pointer-events-none rtl:left-1 ltr:right-1 text-red-500",
		},
	},
}
