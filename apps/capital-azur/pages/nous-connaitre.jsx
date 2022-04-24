import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { Heading } from "@vactory/ui/heading"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { Container } from "@vactory/ui/container"
import { Link } from "@vactory/ui/link"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

const navigation = [
	{ name: "CREDIT AZUR", href: "#container1", current: true },
	{ name: "EN CHIFFRE", href: "#container2", current: false },
	{ name: "MOTS DU PRESIDENT", href: "#", current: false },
	{ name: "VISION", href: "#", current: false },
	{ name: "CONSEIL D'ADMINISTRATION", href: "#", current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export const NavigationList = ({ navigation }) => {
	return navigation.map((item) => (
		<Link
			key={item.name}
			href={item.href}
			className={classNames(
				item.current ? "text-blue-500 font-bold" : "text-gray-900 font-normal",
				"block px-4 mb-4 text-xs hover:text-blue-500 after:inline-block active:text-white active:border-left"
			)}
			aria-current={item.current ? "page" : undefined}
		>
			{item.name}
		</Link>
	))
}

export default function NousConnaitre() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Container layout="full" className="">
				<div className="flex relative flex-shrink-0 bg-gray-1200">
					<img
						src="https://capital-azur.com/sites/default/files/styles/banner_1280_155/public/2020-05/cp-banner-1.png?h=45fedb52"
						className="top-0 left-0 w-full h-64 object-cover"
					/>
					<div className="container absolute flex-col md:mx-16 px-10">
						<Heading level={5} className="text-left text-blue-1000 mb-6 mt-24">
							Accueil
						</Heading>
						<Heading
							level={2}
							className="text-left text-blue-1000 mb-6 mt-10 before:content-['-__'] before:text-blue-1000 "
						>
							NOUS CONNAITRE
						</Heading>
					</div>
				</div>
			</Container>
			<Container layout="fluid" id="container1" className="relative pt-4 pb-24">
				<div className="flex relative flex-row shadow-xl items-center justify-center divide-x mx-16 mt-6">
					<NavigationList navigation={navigation} />
				</div>
			</Container>
			<Container layout="full" className="bg-pink-10">
				<div className="Container px-4 lg:px-32">
					<div className="grid md:grid-cols-2">
						<div className="md:order-last mt-16">
							<Heading
								level={2}
								className="text-left tracking-widest text-blue-1000 mb-12 mt-10 before:content-['-__'] before:text-blue-1000"
							>
								Capital Azur, la première banque 100% Digitale en Afrique
							</Heading>
							<p className="text-blue-1000 tracking-wide antialiased mb-8 text-xl font-sans ">
								Chez Capital Azur, nous nous sommes convaincus qu’une banque doit
								s’adapter à vos besoins et à votre quotidien. Pour cette raison, nous
								proposons une expérience bancaire 100 % digitale, pensée pour être simple
								et transparente. Nos outils, conçus grâce aux technologies les plus
								innovantes, ont été pensés pour nos utilisateurs pour vous permettre de
								réaliser vos projets de vie et vous offrir une expérience bancaire
								agréable, qui vous correspond.
							</p>
						</div>
						<div className="image mt-16">
							<img
								className=""
								src="https://capital-azur.com/sites/default/files/2020-05/Group%2021.png"
								alt="Workflow"
								height="540px"
								width="515px"
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container layout="full" id="container2" className="bg-gray-1000">
				<div className="Container px-4 lg:px-32">
					<div className="py-16">
						<div className="mx-16 px-2">
							<div className="capital-azur-chiffre grid md:grid-cols-3 h-80">
								<div className="px-4">
									<div className="h-full bg-white  border border-blue-1000 rounded-lg">
										<div className="p-6">
											<div className="">
												<p>
													<span className="bg-white font-black">9</span>
													<span>E</span>
												</p>
											</div>
											<Heading
												level={5}
												className="text-center text-gray-400 mb-12 mt-10 "
											>
												Banque digital en Afrique
											</Heading>
										</div>
									</div>
								</div>
								<div className="px-4">
									<div className="h-full bg-white  border border-blue-1000 rounded-lg "></div>
								</div>
								<div className="px-4">
									<div className="h-full bg-white border border-blue-1000 rounded-lg"></div>
								</div>
							</div>
							<div className="flex items-center justify-center mt-12 ">
								<Button
									variant="primary"
									icon={<Icon id="lock-closed-solid" width="30" height="30" />}
								>
									Communication financiere 2019
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container layout="full" id="container3" className="bg-gray-1000 ">
				<div className="Container lg:px-32 px-2">
					<div className="px-4 bg-white">
						<div className="grid grid-cols-3 gap-4  px-4 w-full ">
							<div className="mx-2">
								<div className="flex-col p-6">
									<div className="image mb-6 mx-4">
										<img
											className="top-0 left-0 w-full object-cover rounded-xl"
											src="https://capital-azur.com/sites/default/files/2020-05/Capture%20d%E2%80%99e%CC%81cran%202020-05-15%20a%CC%80%2002.26.40.png"
										/>
									</div>
									<div className="mx-4">
										<Heading
											level={1}
											className="text-left text-gray-400 before:content-['-__'] before:text-blue-1000 "
										>
											YOHAN LABAH,
										</Heading>
										<p className="text-sm text-blue-1000">Président, Capital Azur</p>
									</div>
								</div>
							</div>
							<div className="col-span-2 p-6">
								<Heading
									level={2}
									className="text-left text-black before:content-['-__'] before:text-blue-1000 mb-6"
								>
									VOTRE SATISFACTION, NOTRE PASSION
								</Heading>
								<p className="text-left leading-relaxed">
									Si le digital banking n'est pas né en Afrique, il y évolue à grande
									vitesse grâce à la forte progression des réseaux mobiles et au
									déploiement du haut débit. C’est dans ce contexte que Capital Azur a vu
									le jour, afin de piloter le changement du paradigme « client » dans le
									continent et de permettre l’inclusion financière de chaque citoyen des
									pays africains. Avec le support de nos partenaires Start-ups
									révolutionnant le modèle bancair dans les pays du continent.
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
											<a className="font-bold">2ème engagement : </a>Développer une
											expérience client alliant simplicité et excellence
										</p>
										<p>
											<a className="font-bold">3e engagement :</a>
											S’appuyer sur les dernières technologies pour soutenir la croissance
											en Afrique
										</p>
										<p>
											Parce que votre satisfaction est notre leitmotiv, notre drive
											quotidien, notre “WHY”, et notre{" "}
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
				</div>
			</Container>
			<Footer />
		</AppWrapper>
	)
}
