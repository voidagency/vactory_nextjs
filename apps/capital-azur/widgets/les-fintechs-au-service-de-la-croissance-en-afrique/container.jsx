import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { data, themeContainer } from "./data"

export const Container2 = ({}) => {
	return (
		<Container layout="full" className="bg-blue-1000">
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last pt-4">
						<Heading
							level={2}
							className="text-left tracking-widest text-white mb-12 mt-10 before:content-['-__'] before:text-white"
						>
							{data.title}
						</Heading>
						<p className="text-white tracking-wide antialiased mb-8 text-xl font-sans">
							{data.description}
						</p>
						{data.button && (
							<div className="flex items-center justify-center py-6">
								<Button outline="true" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className="mt-16">
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</div>
		</Container>
	)
}
