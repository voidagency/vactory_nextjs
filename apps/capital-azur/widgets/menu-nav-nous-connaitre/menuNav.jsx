import { useScrollPosition } from "hooks/useScrollPosition"
import { Container } from "@vactory/ui/container"
import { navigation } from "./data"
import { Ancre } from "../../components/ancre/ancre"

export const MenuNav = () => {
	const scrollPosition = useScrollPosition()

	return (
		<Container layout="fluid" className="sticky px-0  top-0 bg-white mt-6 z-10 mb-16">
			<div
				className={`flex relative flex-row shadow-2xl items-center justify-center divide-x pt-6 ${
					scrollPosition > 0 ? `mx-0` : `md:mx-28 `
				}`}
			>
				<Ancre navigation={navigation} />
			</div>
		</Container>
	)
}
