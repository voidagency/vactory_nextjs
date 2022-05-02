export const tooltip = {
	wrapper:
		"absolute bg-black rounded px-3 py-2 after:content-[''] after:absolute after:transform after:w-2 after:h-2 after:rotate-45 after:bg-black",
	position: {
		topCenter:
			"bottom-full left-1/2 transform -translate-x-1/2 mb-3 after:-translate-x-1/2 after:left-1/2 after:-bottom-1",
		topLeft: "bottom-full left-0 mb-3 after:left-3 after:-bottom-1",
		topRight: "bottom-full right-0 mb-3 after:right-3 after:-bottom-1",

		bottomCenter:
			"top-full left-1/2 transform -translate-x-1/2 mt-3 after:-translate-x-1/2 after:left-1/2 after:-top-1",
		bottomLeft: "top-full left-0 mt-3 after:left-3 after:-top-1",
		bottomRight: "top-full right-0 mt-3 after:right-3 after:-top-1",

		leftCenter:
			"right-full  bottom-1/2 transform translate-y-1/2 mr-3 after:-translate-y-1/2 after:top-1/2 after:-right-1",
		leftTop: "right-full top-0 mr-3 after:top-2 after:-right-1",
		leftBottom: "right-full bottom-0 mr-3 after:bottom-2 after:-right-1",

		rightCenter:
			"left-full bottom-1/2 transform translate-y-1/2 ml-3 after:-translate-y-1/2 after:top-1/2 after:-left-1",
		rightTop: "left-full top-0 ml-3 after:top-2 after:-left-1",
		rightBottom: "left-full bottom-0 ml-3 after:bottom-2 after:-left-1",
	},
	size: {
		xsmall: "whitespace-nowrap text-white text-xs",
		small: "whitespace-nowrap text-white text-sm",
		default: "whitespace-nowrap text-white text-base",
	},
	animation: {
		enter: "transition ease-out duration-100",
		enterFrom: "transform opacity-0 scale-95",
		enterTo: "transform opacity-100 scale-100",
		leave: "transition ease-in duration-75",
		leaveFrom: "transform opacity-100 scale-100",
		leaveTo: "transform opacity-0 scale-95",
	},
}
