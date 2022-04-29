import mapImg from "../../public/img/map-footer/map.png"

const Content = () => (
	<div className="text-[16px] leading-[24px] text-gray-500">
		<p>
			Prenez rendez-vous en appelant le
			<a href="#" className="text-primary-500">
				0520-151151
			</a>
			ou en envoyant un mail à
			<a href="#" className="text-primary-500">
				info@chaibilld.ma
			</a>
			et venez visiter notre dépôt pour découvrir tous les véhicules disponibles.
		</p>
	</div>
)

export const data = {
	title: "Visitez notre showroom",
	content: <Content />,
	image: mapImg.src,
	image_alt: "image alt",
	meeting_title: "Prenez rendez-vous",
	tel: "0520-151151",
	email: "info@chaabilld.ma",
	adressTitle: "Visitez notre dépôt",
	adress: "Chaabi LLD - 19 Rue des Papillons, Casablanca 20410",
}
