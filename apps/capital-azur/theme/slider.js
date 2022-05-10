export const slider = {
	default: {
		wrapper: "navigation-wrapper h-128 w-full ",
		slide: {
			wrapper: "h-full w-full flex relative bg-red-300 text-black",
			content:
				"absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col",
			bgVideo: "w-full h-full absolute top-0 left-0 overflow-hidden",
			image: "absolute top-0 left-0 w-full h-full object-cover",
			video: "absolute top-0 left-0 w-full h-full overflow-hidden",
		},
		arrows: {
			wrapper:
				"text-blue-1000 absolute invisible md:visible top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2   rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "left-10 rtl:left-auto rtl:right-10",
			right: "right-10 rtl:right-auto rtl:left-10",
		},
		dots: {
			wrapper:
				"dots absolute  left-1/2 -translate-x-1/2 rtl:left-auto rtl:right-1/2 rtl:-translate-x-1/2 flex items-center justify-center md:bottom-0 bottom-6 w-full inline-blocks w-auto rounded-full overflow-hidden",
			dot: "w-3 h-3 bg-white md:opacity-50 md:px-20 p-2 md:p-1 mx-1 md:mx-0 cursor-pointer rounded-full",
			dotActive:
				"w-2 h-3 bg-blue-1000 md:bg-black md:bg-gradient-to-r md:from-blue-1000 md:to-white  md:transition md:ease-in-out m:delay-100 ",
		},
	},
	iconSlider: {
		wrapper: "navigation-wrapper w-full ",
		slide: {
			wrapper: "h-full w-full flex justify-center relative text-black",
			content: "w-full",
			bgVideo: "w-full h-full absolute top-0 left-0 overflow-hidden",
			image: "absolute top-0 left-0 w-full h-full object-cover",
			video: "absolute top-0 left-0 w-full h-full overflow-hidden",
		},
		arrows: {
			wrapper:
				"invisible text-indigo-700 absolute top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2 px-2 border border-solid border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "left-12 rtl:left-auto rtl:right-12 ",
			right: "right-12 rtl:right-auto rtl:left-12",
		},
		dots: {
			wrapper: "md:invisible flex items-center justify-center bottom-30",
			dot: "w-2 h-2 bg-white md:px-20 p-2 md:p-1 cursor-pointer mx-1 rounded-full ",
			dotActive:
				"w-2 h-2 bg-blue-700 md:px-20 p-2 md:p-1 rounded-full sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	cardSlider: {
		wrapper: "navigation-wrapper w-full ",
		slide: {
			wrapper: "h-full  rounded-xl",
			content: "",
		},
		arrows: {
			wrapper:
				"text-blue-1000 absolute invisible md:visible top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2 px-2  rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "-left-12 -rtl:left-auto -rtl:right-12 ",
			right: "-right-12 -rtl:right-auto -rtl:left-12",
		},
		dots: {
			wrapper: "dots flex items-center justify-center top-10  right-1/2 left-1/2 ",
			dot: "dot w-6 h-6 bg-white p-2 md:p-1 cursor-pointer mx-1 rounded-full ",
			dotActive:
				"active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	chiffreSlider: {
		wrapper: "navigation-wrapper w-full ",
		slide: {
			wrapper: "h-full w-full ",
			content: "",
		},
		arrows: {
			wrapper: "hidden",
			left: " ",
			right: "",
		},
		dots: {
			wrapper: "hidden",
			dot: "",
			dotActive: "",
		},
	},
}
