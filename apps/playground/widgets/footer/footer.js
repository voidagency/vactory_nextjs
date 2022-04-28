import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Icon } from "@vactory/ui/icon"
import { Link } from "@vactory/ui/link"

import logoWhite from "../../public/img/chaibi-logo-white.png"
import logoTruckWhite from "../../public/img/chaibi-truck-white.png"

export const Footer = () => {
	return (
		<div>
			<FooterTop />
			<FooterBottom />
		</div>
	)
}

const FooterTop = () => {
	return (
		<div className="bg-white py-16">
			<Container className="">
				<div className="bg-primary-500 p-16 text-white grid grid-cols-1 lg:grid-cols-2">
					<div>
						<Heading level="2" variant="3" className="mb-[25px]">
							Nous contacter
						</Heading>
						<div className="flex items-center gap-[21px]">
							<Icon id="call-center" width="42" height="42" className="text-white" />
							<Text className="text-white text-lg leading-[25px]">
								Appelez-nous au
								<Link
									href="tel:0520151151"
									className="font-bold ml-2 hover:text-primary-200 transition transition-all duration-300 ease-in"
								>
									05 20 151 151
								</Link>
							</Text>
						</div>
					</div>
					<div>
						<Text className="text-primary-100 text-base lg:text-lg lg:leading-6 max-w-[449px]">
							Vous avez des questions sur nos appels d'offres ? Un probleme
							d'authentification ou vous avez simplement besoin d'assistance, nos
							conseillers sont à votre écoute
						</Text>
					</div>
				</div>
			</Container>
		</div>
	)
}

const FooterBottom = () => {
	return (
		<div className="bg-gray-900 py-10 lg:pt-16 lg:pb-12">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center pb-12 lg:pb-[70px] border-b border-b-gray-700 border-b-solid">
					<div className="mb-12 lg:mb-0">
						<div className="flex items-center gap-8 mb-12">
							<img src={logoWhite.src} />
							<img src={logoTruckWhite.src} />
						</div>
						<div className="flex lg:items-center flex-col lg:flex-row gap-4 lg:gap-8 text-white">
							<Link
								href="/"
								className="hover:text-primary-500 transition transition-all duration-300"
							>
								Trouvrer un véhicule
							</Link>
							<Link
								href="/"
								className="hover:text-primary-500 transition transition-all duration-300"
							>
								Comment ça marche
							</Link>
						</div>
					</div>
					<div className="flex flex-col lg:items-end">
						<Text className="text-white max-w-[438px]" variant="body2">
							Pour être alerté en avant-premiére de toutes nos vontes, inscrivez-vous à la
							newsletter
						</Text>
					</div>
				</div>

				<div className="text-gray-400 pt-8 flex flex-col-reverse lg:flex-row lg:justify-between text-base leading-6">
					<Text>© 2022 Chaabi LLD. All rights reserved.</Text>
					<div className="mb-10 lg:mb-0 flex flex-col lg:flex-row gap-4 lg:gap-6">
						<Link
							href="/"
							className="hover:text-primary-500 transition transition-all duration-300"
						>
							conditions d'utilisation
						</Link>
						<Link
							href="/"
							className="hover:text-primary-500 transition transition-all duration-300"
						>
							politique de confidentialité
						</Link>
					</div>
				</div>
			</Container>
		</div>
	)
}
