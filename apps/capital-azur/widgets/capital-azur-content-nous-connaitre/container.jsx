import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"
import { data, themeContainer } from "./data"

export const BlogImgContainer = ({}) => {
	return (
		<Container layout="full" id="container1" className="bg-pink-10">
			<Container className="Container">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last md:ml-4 md:mt-16 py-10">
						<div className="flex flex-row">
							<Icon id="minus" className="mb-12 text-blue-1000" width="60" height="30" />
							<Heading
								level={2}
								className="text-left tracking-widest text-blue-1000 mb-6 md:mb-12 ml-2 font-bold"
							>
								{data.title}
							</Heading>
						</div>

						<p className="text-blue-1000 tracking-wide antialiased md:mb-8 text-md font-sans">
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
					<div className="image md:pt-24">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</Container>
		</Container>
	)
}
