export const notification = {
	default: {
		wrapper:
			"fixed right-3 top-3 inset-0-cancel w-96 max-w-full flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start",
		animation: {
			enter: "transform ease-out duration-300 transition",
			enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
			enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
			leave: "transition ease-in duration-100",
			leaveFrom: "opacity-100",
			leaveTo: "opacity-0",
		},
	},
}
