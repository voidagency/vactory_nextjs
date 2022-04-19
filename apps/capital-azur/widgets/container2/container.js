import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const Container2 = ({}) => {
	return (
		<Container layout="full" className="bg-blue-1000">
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last mt-16">
						<Heading
							level={2}
							className="text-left text-white mb-12 mt-10 before:content-['-__'] before:text-white"
						>
							LES FINTECHS AU SERVICE DE LA CROISSANCE EN AFRIQUE
						</Heading>
						<p className="text-white tracking-wide antialiased mb-8 text-xl font-sans ">
							La raison d’être de Capital Azur : Favoriser financière en Afrique afin
							d’accompagner le continent dans sa croissl’inclusionance. C’est pour cela
							que nous nous reposons sur le State Of The Art de la technologie. Fintechs,
							Blockchain, Mobile Banking, Digital Banking.. sont autant de moyens que nous
							mettons en oeuvre pour répondre à vos besoins, qui que vous soyez, où que
							vous voyez..
						</p>
						<div className="flex items-start py-6 mb-10">
							<Button outline="true" size="large">
								EN SAVOIR PLUS
							</Button>
						</div>
					</div>
					<div className="image mt-16">
						<img
							className="object-contain h-full scale-110"
							src="https://capital-azur.com/sites/default/files/2020-05/Group%2035.png"
							alt="Workflow"
							height="540px"
							width="515px"
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
