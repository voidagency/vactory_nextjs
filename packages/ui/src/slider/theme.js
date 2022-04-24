export const slider = {
	default: {
		wrapper: "h-96 w-full",
		slide: {
			wrapper: "h-full w-full flex relative text-black",
			content:
				"absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col",
			bgVideo: "w-full h-full absolute top-0 left-0 overflow-hidden",
			image: "absolute top-0 left-0 w-full h-full object-cover",
			video: "absolute top-0 left-0 w-full h-full overflow-hidden",
		},
		arrows: {
			wrapper:
				"absolute top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer py-2 px-2 border border-solid border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full  transition transition-all ease-in-out delay-200 rtl:rotate-180",
			left: "left-12 rtl:left-auto rtl:right-12 ",
			right: "right-12 rtl:right-auto rtl:left-12",
		},
		dots: {
			wrapper:
				"dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ",
			dot: "dot w-2 h-2 bg-gray-400 p-1 cursor-pointer  rounded-full my-0 mx-1.5 ",
			dotActive:
				"active bg-yellow-500 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	v1: {
		wrapper: "h-96 w-full",
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
				"arrow md:visible absolute  sm:translate-y-1/2 items-center justify-center bottom-10   sm:bottom-1/2  sm:cursor-pointer py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 rtl:rotate-180",
			left: "arrow--left ltr:left-12 rtl:right-12 ",
			right: "arrow--right ltr:right-12 rtl:left-12",
		},
		dots: {
			wrapper:
				"dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ",
			dot: "dot w-2 h-2 bg-gray-400 p-1 cursor-pointer  rounded-full my-0 mx-1.5 ",
			dotActive:
				"active bg-yellow-500 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
	cardSlider: {
		wrapper: "w-full",
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
				"arrow md:visible absolute  sm:translate-y-1/2 items-center justify-center bottom-10   sm:bottom-1/2  sm:cursor-pointer py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 rtl:rotate-180",
			left: "arrow--left ltr:left-12 rtl:right-12 ",
			right: "arrow--right ltr:right-12 rtl:left-12",
		},
		dots: {
			wrapper:
				"dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ",
			dot: "dot w-2 h-2 bg-gray-400 p-1 cursor-pointer  rounded-full my-0 mx-1.5 ",
			dotActive:
				"active bg-yellow-500 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 ",
		},
	},
}
