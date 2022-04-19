export const slider = {
	default: {
		wrapper: "navigation-wrapper h-128 w-full ",
		carousel: "keen-slider w-full h-full",
		slider: {
			wrapper: "keen-slider__slide h-full w-full rounded-xl ",
		},
		Arrows: "text-blue-1000",
		Dotes: {
			wrapper: "dots flex items-center justify-center right-1/2 left-1/2",
			dot: "dot w-2 h-2 bg-slate-500 md:px-20 p-2 md:p-1 cursor-pointer  rounded-full ",
			dotActive:
				"active bg-blue-1000 p-2 sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	iconSlider: {
		wrapper: "navigation-wrapper h-48 w-full ",
		carousel: "keen-slider w-full h-full",
		slider: {
			wrapper: "keen-slider__slide  h-full w-full rounded-xl",
		},
		Arrows: "text-blue-1000",
		Dotes: {
			wrapper:
				"dots md:hidden flex items-center justify-center bottom-10 right-1/2 left-1/2",
			dot: "dot w-2 h-2 bg-slate-500 md:px-20 p-2 md:p-1 cursor-pointer  rounded-full ",
			dotActive:
				"active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	cardSlider: {
		wrapper: "navigation-wrapper h-96 w-full ",
		carousel: "keen-slider w-full h-full",
		slider: {
			wrapper: "keen-slider__slide h-full w-full rounded-xl ",
		},
		Arrows: "text-blue-1000",
		Dotes: {
			wrapper: "dots flex items-center justify-center top-10 right-1/2 left-1/2 ",
			dot: "dot w-6 h-6 bg-slate-500 p-2 md:p-1 cursor-pointer  rounded-full ",
			dotActive:
				"active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
}
