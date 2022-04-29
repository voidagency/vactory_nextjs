import { Text } from "@vactory/ui/text"
import { Button } from "@vactory/ui/button"

import logoLld from "../../public/img/logo-vehicule.png"
import logoTruck from "../../public/img/logo-truck.png"

export const CardCaution = ({
	title,
	amount,
	type = "lld",
	url,
	chaibiLogo = logoLld,
}) => {
	return (
		<div className="bg-gray-100 p-[30px]">
			<div className="flex flex-col md:flex-row-reverse gap-6 md:items-start md:justify-between mb-5">
				{type == "lld" && (
					<img
						src={chaibiLogo ? chaibiLogo : logoLld.src}
						alt={title}
						className="h-[41px] w-auto"
					/>
				)}
				{type == "truck" && (
					<img
						src={chaibiLogo ? chaibiLogo : logoTruck.src}
						alt={title}
						className="h-[41px] w-auto"
					/>
				)}
				<Text
					as="h3"
					variant="subtitle2"
					className="text-gray-900 font-semibold md:max-w-[50%]"
				>
					{title}
				</Text>
			</div>
			<Text variant="body1" className="text-gray-500 mb-[7px]">
				Montant de la caution
			</Text>
			<p className="text-primary-500 font-semibold text-sm leading-[21px] mb-10">
				{amount}
			</p>

			<Button variant="secondary" href={url}>
				Télécharger le reçu de la caution
			</Button>
		</div>
	)
}
