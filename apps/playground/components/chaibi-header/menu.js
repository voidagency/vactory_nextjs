import {Link} from "@vactory/ui/link"


const menu = [
	{
		id: "menu_1",
		title: "Trouver un vehicule",
		url: "/",
		subdomaine: [
			{
				title: "Voiture",
				icon: "",
				url: "",
			},
			{
				title: "Moto",
				icon: "",
				url: "",
			},
			{
				title: "Trucks",
				icon: "",
				url: "",
			},
		],
	},
	{
		id: "menu_2",
		title: "Comment ça marche",
		url: "/",
	},
]

export const Menu = () => {
	return (
		<div>
			{menu.map((item, index) => {
				return (
					<Link key={item.id} href={item.url} variant="menu" className="ml-10">
						{item.title}
					</Link>
				)
			})}
		</div>
	)
}