import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"

const data = [
	{
		id: 1,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 2,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 3,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 4,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
]

const sliderSettings = {
	rtl: false,
	loop: true,
	disabled: false,
	mode: "snap",
	rubberband: true,
	defaultAnimation: { duration: 500 },
	renderMode: "precision",
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
	},
	opacity: false,
}

export const SliderHp = () => {
	return (
		<Container layout="full">
			<Slider settings={sliderSettings} variant="default">
				{data.map((item) => {
					return (
						<Slide key={item.id} bgImage={item.image}>
							<Container className="flex w-full h-full items-center justify-start">
								<div className="max-w-[630px]">
									<Heading level="1" className="mb-[30px]">
										{item.title}
									</Heading>
									<p className="text-lg leading-6">{item.description}</p>
								</div>
							</Container>
						</Slide>
					)
				})}
			</Slider>
		</Container>
	)
}
