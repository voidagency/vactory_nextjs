export const select = {
	default: {
		wrapper: "w-full max-w-xs relative shadow-lg hover:shadow-none ",
		button: {
			base: "relative w-full py-3 pl-3 pr-10 text-left bg-gray-1000  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm truncate",
			icon: {
				id: "chevron-down",
				width: "30",
				height: "30",
				className:
					"absolute inset-y-0 my-auto right-0 flex items-center pr-2 pointer-events-none",
			},
		},
		options: {
			wrapper:
				"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
			base: "cursor-default truncate select-none relative py-2 pl-6 pr-4 relative",
			active: "font-medium text-blue-900 bg-blue-100",
			inactive: "font-normal text-gray-900",
			icon: {
				id: "check-solid",
				width: "15",
				height: "15",
				className:
					"hidden absolute -translate-y-1/2 top-1/2 ltr:left-3 rtl:right-3 flex items-center text-amber-600",
			},
		},
		animation: {
			enter: "transition ease-in duration-300",
			enterFrom: "opacity-0 scale-0",
			enterTo: "opacity-100 scale-1",
			leave: "transition ease-in duration-100",
			leaveFrom: "opacity-100",
			leaveTo: "opacity-0",
		},
	},

	filterSelect: {
		wrapper: "relative inline-block w-full",
		button: {
			base: "relative flex flex-items-center px-4 py-3 pr-8 overflow-hidden w-full text-left bg-white border border-slate-300 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm ",
			icon: {
				id: "chevron-down",
				width: "30",
				height: "30",
				className:
					"absolute inset-y-0 my-auto right-0 flex items-center pr-2 pointer-events-none",
			},
		},
		options: {
			wrapper:
				"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
			base: "cursor-default truncate select-none relative py-2 pl-10 pr-4 relative",
			active: "font-medium text-blue-900 bg-blue-100",
			inactive: "font-normal text-gray-900",
			icon: {
				id: "check-solid",
				width: "15",
				height: "15",
				className:
					"absolute -translate-y-1/2 top-1/2 ltr:left-3 rtl:right-3 flex items-center text-amber-600",
			},
		},
		animation: {
			enter: "transition ease-in duration-300",
			enterFrom: "opacity-0 scale-0",
			enterTo: "opacity-100 scale-1",
			leave: "transition ease-in duration-100",
			leaveFrom: "opacity-100",
			leaveTo: "opacity-0",
		},
	},
}
