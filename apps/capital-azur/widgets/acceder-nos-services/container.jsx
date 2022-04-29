import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"
import { data } from "./data"

export const AccederService = ({}) => {
	return (
		<Container layout="full" className="bg-gray-1000">
			<div className="Container px-4 lg:max-w-1200 mx-auto">
				<div className="grid md:grid-cols-2 py-16">
					<div className="my-10">
						<div className="flex flex-row">
							<Icon
								id="minus"
								className="mb-12 mt-8 text-blue-1000"
								width="50"
								height="50"
							/>
							<Heading
								level={2}
								className="text-left tracking-widest text-black mb-12 mt-10 ml-2 "
							>
								{data.title}
							</Heading>
						</div>

						<p className="text-black tracking-wide antialiased mb-8 text-xl font-sans ">
							{data.description}
						</p>
						{data.button && (
							<div className="text-black tracking-wide antialiased mb-8 text-xl font-semibold font-sans ">
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
