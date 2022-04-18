import { Container } from "@vactory/ui/container"
import { EspacePrive } from "./espace-prive"
import { Menu } from "./menu"

import logo from "../../public/logo.png"

export const Header = () => {
	return (
		<Container variant="full" className="bg-white py-8">
			<Container className="flex lg:justify-between items-center">
				<div>
					<img src={logo.src} className="h-16 w-auto" />
				</div>
				<Menu />
				<EspacePrive />
			</Container>
		</Container>
	)
}
