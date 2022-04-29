import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Button } from "@vactory/ui/button"

const data = {
	title: "Si vous souhaitez soumissionner pour ce véhicule, veuillez vous identifier",
	urlLogin: "/",
	urlLoginTitle: "Se connecter",
	urlRegister: "/",
	urlRegisterTitle: "S'inscrire",
}

export const ContentInBg = ({
	title = data.title,
	urlLogin = data.urlLogin,
	urlLoginTitle = data.urlLoginTitle,
	urlRegister = data.urlRegister,
	urlRegisterTitle = data.urlRegisterTitle,
}) => {
	return (
		<Container>
			<div className="bg-gray-300/20 pt-[50px] px-10 pb-[60px] text-center">
				<Heading level="2" variant="5" className="mb-8 max-w-[600px] mx-auto">
					{title}
				</Heading>
				<div className="flex justify-center items-center gap-4">
					<Button href={urlRegister}>{urlRegisterTitle}</Button>
					<Button variant="secondary" href={urlLogin}>
						{urlLoginTitle}
					</Button>
				</div>
			</div>
		</Container>
	)
}
