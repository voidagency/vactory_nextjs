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
				"text-blue-1000 absolute invisible md:visible top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2 px-2 hover:bg-indigo-500 hover:text-white rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "left-12 rtl:left-auto rtl:right-12 ",
			right: "right-12 rtl:right-auto rtl:left-12",
		},
		dots: {
			wrapper:
				"dots absolute left-1/2 -translate-x-1/2 rtl:left-auto rtl:right-1/2 rtl:-translate-x-1/2 flex items-center justify-center bottom-0 w-full inline-blocks w-auto rounded-full overflow-hidden",
			dot: "w-3 h-3 bg-black opacity-10 px-10 md:px-20 p-2 md:p-1 cursor-pointer",
			dotActive:
				"w-2 h-3 text-white opacity-100 bg-gradient-to-l from-white to-blue-1000 md:px-20 p-2 md:p-1 sm:transition sm:ease-in-out sm:delay-100 ",
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
			wrapper: "md:invisible flex items-center justify-center bottom-10",
			dot: "w-2 h-2 bg-slate-500 md:px-20 p-2 md:p-1 cursor-pointer mx-1 rounded-full ",
			dotActive:
				"w-2 h-2 bg-blue-700 md:px-20 p-2 md:p-1 rounded-full sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	cardSlider: {
		wrapper: "navigation-wrapper w-full w-full h-full",
		slide: {
			wrapper: "h-full w-full rounded-xl",
			content: "",
		},
		arrows: {
			wrapper:
				"text-blue-1000 absolute invisible md:visible top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2 px-2 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "-left-12 -rtl:left-auto -rtl:right-12 ",
			right: "-right-12 -rtl:right-auto -rtl:left-12",
		},
		dots: {
			wrapper: "dots flex items-center justify-center top-10  right-1/2 left-1/2 ",
			dot: "dot w-6 h-6 bg-slate-500 p-2 md:p-1 cursor-pointer mx-1 rounded-full ",
			dotActive:
				"active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
}

//iconSlider
