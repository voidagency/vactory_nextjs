import { React } from "react"
import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"
import { data } from "./data"

export const Vision = ({}) => {
	return (
		<Container layout="full" id="container4" className="bg-blue-1000">
			<Container className="Container md:px-6">
				<div className="grid md:grid-cols-2">
					<div className="md:pt-16 md:mr-4">
						<div className="flex flex-row">
							<Icon
								id="minus"
								className="mb-6 mt-10 mr-2 text-white"
								width="60"
								height="30"
							/>
							<Heading
								level={2}
								className="text-left tracking-widest text-white mb-6 mt-10"
							>
								{data.title}
							</Heading>
						</div>
						<p className="text-white tracking-wide antialiased mb-6 text-md font-sans">
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
					<div className="image  md:pt-16 ">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</Container>
		</Container>
	)
}
