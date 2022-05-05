import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { data } from "./data"

export const Container2 = ({}) => {
	return (
		<Container layout="full" className="bg-blue-1000">
			<Container className="Container px-4 lg:px-auto ">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last py-8 pr-12">
						<Heading
							level={2}
							className="text-left tracking-widest text-white mb-12 md:mt-10 before:content-['-__'] before:text-white"
						>
							{data.title}
						</Heading>
						<p className="text-white tracking-wide antialiased mb-8 text-md font-sans">
							{data.description}
						</p>
						{data.button && (
							<div className="flex pt-6">
								<Button outline="true" size="large" className="font-semibold">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className="md:mt-20 md:mx-auto">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</Container>
		</Container>
	)
}
