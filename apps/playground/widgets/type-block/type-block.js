import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"

import { data } from "./mock-data"

export const TypeBlock = (props) => {
	return (
		<Container className="py-16">
			<Heading level="2" className="text-black mb-10">
				Trouvez le véhicule de votre choix
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => {
					return (
						<div className="relative">
							<img
								src={item.image.src}
								width={item.image.width}
								height={item.image.height}
							/>
							<div className="bg-gradient-to-t from-black to-black/40  absolute top-0 left-0 rtl:left-auto rtl:right-0 flex flex-col justify-end w-full h-full px-12 py-[38px]">
								<Heading level="3" className="text-white">
									{item.title}
								</Heading>
								{}
							</div>
						</div>
					)
				})}
			</div>
		</Container>
	)
}
