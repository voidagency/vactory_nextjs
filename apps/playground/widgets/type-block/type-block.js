import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"
import { Icon } from "@vactory/ui/icon"

import { data as defaultData } from "./mock-data"

export const TypeBlock = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			<Heading level="2" className="text-black mb-10 text-center">
				Trouvez le véhicule de votre choix
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => {
					return (
						<div className="relative" key={item.id}>
							<img src={item.image} className="w-full h-full object-cover" />
							<div className="text-white bg-gradient-to-b from-black/30 to-black/100 hover:to-black/80  absolute top-0 left-0 rtl:left-auto rtl:right-0 flex flex-row justify-between items-end w-full h-full px-10 py-[38px] transition transition-all ease-in duration-300">
								<Heading level={3} className="">
									{item.title}
								</Heading>
								{item.url && (
									<Link
										href={item.url}
										className="text-[28px] leading-[38px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full"
									>
										<Icon id="arrow-right" width="36" height="36" />
									</Link>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</Container>
	)
}
