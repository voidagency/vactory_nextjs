export const msgValidation = {
	base: "py-5 px-8",
	animation: {
		enter: "transform ease-out duration-300 transition",
		enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
		enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
		leave: "transition ease-in duration-100",
		leaveFrom: "opacity-100",
		leaveTo: "opacity-0",
	},
	success: {
		box: "bg-green-200 text-green-800",
		close: "text-white absolute right-4 top-3",
		icon: "h-8 w-8 transition-all ease-in duration-300",
	},
	error: {
		box: "bg-red-200 text-red-800",
		close: "text-white absolute right-4 top-3",
		icon: "h-8 w-8 transition-all ease-in duration-300",
	},
	warning: {
		box: "bg-yellow-200 text-yellow-800",
		close: "text-white absolute right-4 top-3",
		icon: "h-8 w-8 transition-all ease-in duration-300",
	},
}
