import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { Card } from "@vactory/ui/card"
import { TemplateWrapper } from "@/components/template-wrapper/templateWrapper"
import { data } from "./data"

export const Conseil = () => {
	return (
		<Container layout="full" id="container5" className="">
			<TemplateWrapper data={data}>
				{data.dataCard && (
					<div className="">
						<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
							{data.dataCard.map((item, index) => {
								return (
									<a href={item.url} className="group block px-4 py-4" key={index}>
										<Card
											title={
												<a href={item.url}>
													<span className="group-hover:text-blue-1000 ">
														{item.title}
													</span>
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
						{data.button && (
							<div className="flex items-center justify-center mt-16">
								<Button outline="true" Variant="primary" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
				)}
			</TemplateWrapper>
		</Container>
	)
}
