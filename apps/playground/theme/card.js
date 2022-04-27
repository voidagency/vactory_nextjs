export const card = {
	chaibi: {
		wrapper:
			"bg-white flex flex-col items-center text-center pt-[77px] pb-6 px-9 shadow ",
		image: "h-20 mx-auto mb-5",
		body: "",
		tag: "text-xl leading-8 font-semibold",
		title: "text-black text-xl leading-[30px] font-semibold mb-5",
		excerpt: "text-[#667085] text-base leading-6",
		link: "text-primary underline",
	},
	marque: {
		wrapper:
			"flex flex-col items-center shadow-lg overflow-hidden ltr:text-left rtl:text-right bg-white hover:bg-primary-500 text-black hover:text-white transition-all ease-in duration-300",
		image: "flex justify-center items-center h-52 w-full bg-white",
		body: "relative w-full px-6 pb-5 pt-3",
		tag: "text-xl leading-8 font-semibold",
		title: "text-base leading-6 font-semibold mb-5",
		excerpt: "text-sm leading-5 text-gray-500",
		link: "absolute bottom-6 right-4",
	},
	cardImagetitle: {
		wrapper:
			"flex flex-col items-center overflow-hidden text-left rtl:text-right text-black bg-[#F2F4F7]",
		image: "h-[279px] w-full",
		body: "py-[19px] px-[25px]", // @TODO: A voir avec soulayman les code coleur gray-100
		title: "text-xl leading-[30px] font-semibold",
	},
}

const span = () => <span className="text-white text-xl leading-[30px] px-"></span>
