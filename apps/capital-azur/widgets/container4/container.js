import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { Card } from "@vactory/ui/card"
import { cardData } from "./data"

export const Container4 = ({}) => {
	return (
		<Container layout="full" className="">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 before:content-['-__'] before:text-blue-1000 "
				>
					Insights
				</Heading>
				<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
					Découvrez nos actualités, nos analyses et les points de vue de nos experts
				</p>
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
					{cardData.map((item, index) => {
						return (
							<a href={item.url} className="group block px-4 py-4" key={index}>
								<Card
									title={
										<a href={item.url}>
											<span className="group-hover:text-blue-1000">{item.title}</span>
										</a>
									}
									urlContent={item.urlContent}
									image={item.image}
									url={item.url}
									category={
										<a href={item.url}>
											<span className="bg-blue-900 rounded-md px-2 py-1">
												{item.category}
											</span>
										</a>
									}
									className="max-w-sm"
								/>
							</a>
						)
					})}
				</div>
				<div className="flex items-center justify-center mt-16">
					<Button outline="true" Variant="primary" size="large">
						VOIR PLUS D'ACTUALITES
					</Button>
				</div>
			</Container>
		</Container>
	)
}
