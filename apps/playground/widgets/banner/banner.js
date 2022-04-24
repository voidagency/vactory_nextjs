import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { data as defaultData } from "./mock-data"

export const Banner = ({ data = defaultData }) => {
	return (
		<div className="relative w-full text-white h-[140px] lg:h-[300px] pb-4 lg:pb-[64px] flex items-end justify-start before:content-[''] before:bg-gray-900/50 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1]">
			<img
				src={data.image}
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>
			<Container className="relative z-[1]">
				<h1
					level="1"
					className="text-white text-xl leading-[30px] lg:text-5xl lg:leading-normal font-semibold -tracking-[1px]"
				>
					{data.title}
				</h1>
			</Container>
		</div>
	)
}
