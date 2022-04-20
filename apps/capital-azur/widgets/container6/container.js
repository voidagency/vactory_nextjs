import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const Container6 = ({}) => {
	return (
		<Container layout="full" className="bg-gray-1000">
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2 py-16">
					<div className="my-10">
						<Heading
							level={2}
							className="text-left text-black mb-12 mt-10 before:content-['-__'] before:text-blue-400"
						>
							ACCÉDEZ À NOS SERVICES, OÙ QUE VOUS SOYEZ.
						</Heading>
						<p className="text-black tracking-wide antialiased mb-8 text-xl font-sans ">
							Nos services sont accessibles au niveau de 13 pays en Afrique, et bien plus
							dans les prochains mois !
						</p>
						<div className="flex items-start py-6">
							<Button outline="true">EN SAVOIR PLUS</Button>
						</div>
					</div>
					<div className="image my-10">
						<img
							className=""
							src="https://capital-azur.com/sites/default/files/2020-05/carte.png"
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
