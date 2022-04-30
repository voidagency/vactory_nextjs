import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { data } from "./data"

export const Vision = ({ containerId }) => {
	return (
		<Container layout="full" className="bg-blue-1000" id={containerId}>
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2">
					<div className="pt-4">
						<Heading
							level={2}
							className="text-left tracking-widest text-white mb-6 mt-10 before:content-['-__'] before:text-white"
						>
							{data.title}
						</Heading>
						<p className="text-white tracking-wide antialiased mb-6 text-xl font-sans">
							{data.description}
						</p>
						{data.button && (
							<div className="">
								<Button outline="true" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className="image px-6 pt-32 ">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</div>
		</Container>
	)
}
