export const layer = {
	default: {
		"top-left": {
			position: "top-2 left-2",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "-translate-x-[100%] opacity-0",
				enterTo: "translate-x-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "translate-x-0 opacity-1",
				leaveTo: "-translate-x-[100%] opacity-0",
			},
		},
		"bottom-left": {
			position: "bottom-0 left-0",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "-translate-x-[100%] opacity-0",
				enterTo: "translate-x-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "translate-x-0 opacity-1",
				leaveTo: "-translate-x-[100%] opacity-0",
			},
		},
		"top-right": {
			position: "top-0 right-0",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "translate-x-[100%] opacity-1",
				enterTo: "translate-x-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "translate-x-0 opacity-1",
				leaveTo: "translate-x-[100%] opacity-1",
			},
		},
		"bottom-right": {
			position: "bottom-0 right-0",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "translate-x-[100%] opacity-1",
				enterTo: "translate-x-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "translate-x-0 opacity-1",
				leaveTo: "translate-x-[100%] opacity-1",
			},
		},
		"top-center": {
			position: "top-3 -translate-x-1/2 left-1/2",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "-translate-y-[100%] opacity-0",
				enterTo: "translate-y-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "-translate-y-0 opacity-1",
				leaveTo: "-translate-y-[100%] opacity-0",
			},
		},
		"bottom-center": {
			position: "bottom-3 -translate-x-1/2 left-1/2",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "translate-y-[100%] opacity-0",
				enterTo: "translate-y-0 opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "-translate-y-0 opacity-1",
				leaveTo: "translate-y-[100%] opacity-0",
			},
		},
		modal: {
			position:
				"fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50",
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "translate-y-40 opacity-0 scale-0",
				enterTo: "translate-y-0 opacity-1 scale-1",
				leave: "transition-all duration-500",
				leaveFrom: "translate-y-0 opacity-1 scale-1",
				leaveTo: "translate-y-40 opacity-0 scale-0",
			},
		},
		opacity: {
			animation: {
				enter: "transition-all duration-500",
				enterFrom: "opacity-0",
				enterTo: "opacity-1",
				leave: "transition-all duration-500",
				leaveFrom: "opacity-1",
				leaveTo: "opacity-0",
			},
		},
	},
}
