import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { Card } from "@vactory/ui/card"

export const cardContainer = ({ data, containerId }) => {
	return (
		<Container layout="full" id={containerId} className="">
			<div className="Container px-4 lg:px-32 py-16 ml-auto mr-auto">
				{data.Title && (
					<Heading
						level={2}
						className="text-left mb-10 mt-10 before:content-['-__'] before:text-indigo-500 "
					>
						{data.Title}
					</Heading>
				)}
				{data.paragraph && (
					<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
						{data.paragraph}
					</p>
				)}
				{data.dataCard && (
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
						{data.dataCard.map((item, index) => {
							return (
								<a href={item.url} className="group block px-4 py-4" key={index}>
									<Card
										title={
											<a href={item.url}>
												<span className="group-hover:text-blue-1000 ">{item.title}</span>
											</a>
										}
										urlContent={item.urlContent}
										image={item.image}
										url={item.url}
										category={
											item.category && (
												<a href={item.url}>
													<span className="bg-blue-900 rounded-md px-2 py-1">
														{item.category}
													</span>
												</a>
											)
										}
										className="max-w-sm"
									/>
								</a>
							)
						})}
					</div>
				)}
				{data.button && (
					<div className="flex items-center justify-center mt-16">
						<Button outline="true" Variant="primary" size="large">
							{data.button}
						</Button>
					</div>
				)}
			</div>
		</Container>
	)
}
