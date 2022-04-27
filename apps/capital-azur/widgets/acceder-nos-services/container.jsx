import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { data } from "./data"

export const AccederService = ({}) => {
	return (
		<Container layout="full" className="bg-gray-1000">
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2 py-16">
					<div className="my-10">
						<Heading
							level={2}
							className="text-left tracking-widest text-black mb-12 mt-10 before:content-['-__'] before:text-blue-400"
						>
							{data.title}
						</Heading>
						<p className="text-black tracking-wide antialiased mb-8 text-xl font-sans ">
							{data.description}
						</p>
						{data.button && (
							<div className="text-black tracking-wide antialiased mb-8 text-xl font-sans ">
								<Button outline="true" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className="image my-10">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</div>
		</Container>
	)
}
