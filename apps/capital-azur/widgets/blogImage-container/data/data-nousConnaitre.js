export const container1Theme = {
	wrapper: "bg-pink-10",
	container: {
		wrapper: "Container px-4 lg:px-32",
		grid: {
			wrapper: "grid md:grid-cols-2",
			gridCol1: {
				wrapper: "md:order-last mt-16",
				header:
					"text-left tracking-widest text-blue-1000 mb-12 mt-10 before:content-['-__'] before:text-blue-1000",
				paragraph: "text-blue-1000 tracking-wide antialiased mb-8 text-xl font-sans",
			},
			gridCol2: {
				wrapper: "image mt-16",
			},
		},
		button: "flex items-center justify-center py-6",
	},
}

export const container2Theme = {
	wrapper: "bg-blue-1000",
	header:
		"text-left tracking-widest text-blue-1000 mb-12 mt-10 before:content-['-__'] before:text-blue-1000",
	paragraph: "text-blue-1000 tracking-wide antialiased mb-8 text-xl font-sans",
	image: "image mt-16",
	button: "flex items-center justify-center py-6",
}
