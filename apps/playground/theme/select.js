const span = () => <span className="text-white"></span>
export const select = {
	default: {
		wrapper: "w-full relative",
		button: {
			base: "relative w-full py-[11px] pl-[14px] pr-[30px] text-base leading-6 text-gray-500 text-left rtl:text-right bg-white cursor-default border boder-gray-300 border-solid focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm truncate",
			icon: {
				id: "chevron-down",
				width: "16",
				height: "16",
				className:
					"absolute top-1/2 -translate-y-1/2 right-[19px] rtl:right-auto rtl:left-[19px] flex items-center pointer-events-none",
			},
		},
		options: {
			wrapper:
				"z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white border boder-gray-300 border-solid shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
			base: "cursor-default truncate select-none relative py-2 pl-10 pr-4 relative transition transition-all ease-in-out duration-500",
			active: "font-medium text-gray-300 bg-primary-500/30",
			inactive: "font-normal text-gray-500",
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
