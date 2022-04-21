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
				"z-10 absolute w-full py-1 mt-1 overflow-auto text-base leading-6 bg-white rounded-[4px] border boder-gray-100 border-solid g max-h-80 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)]",
			base: "cursor-default truncate select-none relative py-2 pl-4 pr-10 relative transition transition-all ease-in-out duration-500",
			active: "text-gray-900 bg-gray-50",
			inactive: "text-gray-500",
			icon: {
				id: "check-solid",
				width: "15",
				height: "15",
				className:
					"absolute -translate-y-1/2 top-1/2 right-3 rtl:right-auto rtl:left-3 flex items-center text-amber-600",
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

const p = () => <p class="text-white max-h-"></p>
