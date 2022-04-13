export const card = {
	chaibi: {
		wrapper:
			"flex flex-col items-center rounded-lg shadow-lg overflow-hidden text-black text-center pt-20 pb-8 px-10",
		image: "mb-6",
		body: "",
		tag: "text-xl leading-8 font-semibold",
		title: "text-xl font-semibold text-gray-900 mb-6 text-black",
		excerpt: "text-base leading-6 text-gray-400",
		link: "text-primary underline",
	},
	marque: {
		wrapper:
			"flex flex-col items-center shadow-lg overflow-hidden ltr:text-left rtl:text-right",
		image: "flex justify-center items-center h-52",
		body: "relative w-full px-6 pb-5 pt-3 hover:bg-primary-500 transition-all ease-in duration-300",
		tag: "text-xl leading-8 font-semibold",
		title: "text-base leading-6 font-semibold text-black mb-5",
		excerpt: "text-sm leading-5 text-gray-500",
		link: "absolute bottom-6 right-4",
	},
}

const span = () => <span className="text-white right-4"></span>
