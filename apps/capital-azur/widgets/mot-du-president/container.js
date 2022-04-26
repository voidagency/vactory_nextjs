import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"

export const ProfileContainer = () => {
	return (
		<Container layout="full" id="container3" className="">
			<div className="Container lg:px-32 px-2 py-16 md:mx-24">
				<div className="grid md:grid-cols-3 w-full shadow-lg">
					<div className="flex-col px-24 md:p-6 md:mx-0 ">
						<div className="image mb-6 mx-4">
							<img
								className="top-0 left-0 w-full object-cover rounded-xl"
								src="https://capital-azur.com/sites/default/files/2020-05/Capture%20d%E2%80%99e%CC%81cran%202020-05-15%20a%CC%80%2002.26.40.png"
							/>
						</div>
						<div className="mx-4 md:text-left ">
							<Heading
								level={1}
								className="text-gray-400 before:content-['-__'] before:text-blue-1000 "
							>
								YOHAN LABAH,
							</Heading>
							<p className="text-sm text-blue-1000">Président, Capital Azur</p>
						</div>
					</div>

					<div className="md:col-span-2 p-6">
						<Heading
							level={2}
							className="text-left text-black before:content-['-__'] before:text-blue-1000 mb-6"
						>
							VOTRE SATISFACTION, NOTRE PASSION
						</Heading>
						<p className="text-left leading-relaxed">
							Si le digital banking n'est pas né en Afrique, il y évolue à grande vitesse
							grâce à la forte progression des réseaux mobiles et au déploiement du haut
							débit. C’est dans ce contexte que Capital Azur a vu le jour, afin de piloter
							le changement du paradigme « client » dans le continent et de permettre
							l’inclusion financière de chaque citoyen des pays africains. Avec le support
							de nos partenaires Start-ups révolutionnant le modèle bancair dans les pays
							du continent.
							<p className="pt-2">
								Aujourd’hui, nous sommes présent au niveau de 15 pays africains et
								accélérons notre expansion à travers le continent. Nous nous efforçons
								chaque jour de tenir nos 3 engagements à l’ensemble de nos clientèles
								(Particuliers, Professionnels, Entreprises et Corporates) :
								<p>
									<a className="font-bold">1er engagement: </a>Offrir des services
									différenciant - aller au-delà du transactionnel
								</p>
								<p>
									<a className="font-bold">2ème engagement : </a>Développer une expérience
									client alliant simplicité et excellence
								</p>
								<p>
									<a className="font-bold">3e engagement :</a>
									S’appuyer sur les dernières technologies pour soutenir la croissance en
									Afrique
								</p>
								<p>
									Parce que votre satisfaction est notre leitmotiv, notre drive quotidien,
									notre “WHY”, et notre{" "}
									<a className="text-blue-1000" href="https://www.google.com/">
										passion
									</a>
									.
								</p>
							</p>
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
