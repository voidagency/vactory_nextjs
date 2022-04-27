import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { data, themeContainer } from "./data"

export const BlogImgContainer = ({ containerId }) => {
	return (
		<Container layout="full" id={containerId} className="bg-pink-10">
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last mt-16">
						<Heading
							level={2}
							className="text-left tracking-widest text-blue-1000 mb-12 mt-10 before:content-['-__'] before:text-blue-1000"
						>
							{data.title}
						</Heading>
						<p className="text-blue-1000 tracking-wide antialiased mb-8 text-xl font-sans">
							{data.description}
						</p>
						{data.button && (
							<div className={themeContainer.container.grid.gridCol1.Button}>
								<Button outline="true" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className="image mt-16">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</div>
		</Container>
	)
}
