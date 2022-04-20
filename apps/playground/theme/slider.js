const span = () => <psna className="text-[44px] left-11"></psna>

export const slider = {
	default: {
		wrapper: "h-96 md:h-[693px] w-full",
		slide: {
			wrapper:
				"h-full w-full flex relative text-white before:content-['-__'] before:bg-black/40 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1]",
			content:
				"absolute z-[2] top-0 left-0 w-full h-full flex items-center justify-center flex-col",
			bgVideo: "w-full h-full absolute top-0 left-0 overflow-hidden",
			image: "absolute top-0 left-0 w-full h-full object-cover",
			video: "absolute top-0 left-0 w-full h-full overflow-hidden",
		},
		arrows: {
			wrapper:
				"text-[44px] absolute top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer h-[72px] w-[72px] bg-white/30 hover:bg-primary-500/100 text-white rounded-full  transition transition-all ease-in-out delay-500 rtl:rotate-180",
			left: "left-11 rtl:left-auto rtl:right-11 ",
			right: "right-11 rtl:right-auto rtl:left-11",
		},
		dots: {
			wrapper:
				"dots flex items-center z-[3] justify-center py-2.5 absolute bottom-[32px] right-1/2 left-1/2 ",
			dot: "inline-flex min-w-[56px] w-[56px] h-[5px] bg-white/50  cursor-pointer mx-[10px] hover:bg-primary-500/100 transition transition-all duration-500",
			dotActive:
				"inline-flex min-w-[56px] w-[56px] h-[5px] bg-primary-500/100  cursor-pointer  mx-[10px] hover:bg-white/50 transition transition-all duration-500",
		},
	},
	logoSlider: {
		wrapper: "flex items-center",
		slide: {
			wrapper: "",
			content: "",
		},
		arrows: {
			wrapper:
				"invisible text-[44px] absolute top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer h-[72px] w-[72px] bg-white/30 hover:bg-primary-500/100 text-white rounded-full  transition transition-all ease-in-out delay-500 rtl:rotate-180",
			left: "left-11 rtl:left-auto rtl:right-11 ",
			right: "right-11 rtl:right-auto rtl:left-11",
		},
		dots: {
			wrapper:
				"dots invisible items-center z-[3] justify-center py-2.5 absolute bottom-[32px] right-1/2 left-1/2 ",
			dot: "inline-flex min-w-[56px] w-[56px] h-[5px] bg-white/50  cursor-pointer mx-[10px] hover:bg-primary-500/100 transition transition-all duration-500",
			dotActive:
				"inline-flex min-w-[56px] w-[56px] h-[5px] bg-primary-500/100  cursor-pointer  mx-[10px] hover:bg-white/50 transition transition-all duration-500",
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
