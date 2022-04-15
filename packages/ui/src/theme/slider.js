export const slider = {
	default: {
		wrapper: "navigation-wrapper h-96 w-full",
		carousel: "keen-slider w=full h-full",
		slider: {
			wrapper: "keen-slider__slide  z-0 h-full w-full  rounded-xl",
		},
		Arrows: "text-indigo-700",
		Dotes: {
			wrapper: "dots flex items-center justify-center bottom-10 right-1/2 left-1/2",
			dot: "dot w-2 h-2 bg-slate-500 md:px-20 p-2 md:p-1 cursor-pointer  rounded-full ",
			dotActive:
				"active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},

	v1: {
		wrapper: "relative w-screen h-96  items-center justify-center ",
		carousel: "keen-slider relative h-full  overflow-hidden ",
		slider: {
			wrapper:
				"keen-slider__slide number-slide relative group  bg-fixed h-full  max-h-10 rounded-xl",
		},
		Arrows: "text-indigo-700",
		Dotes: {
			wrapper:
				"dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ",
			dot: "dot w-2 h-2 bg-gray-400 p-1 cursor-pointer  rounded-full my-0 mx-1.5 ",
			dotActive:
				"active bg-yellow-500 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
}
