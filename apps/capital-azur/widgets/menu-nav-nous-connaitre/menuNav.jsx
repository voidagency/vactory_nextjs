import { useScrollPosition } from "hooks/useScrollPosition"
import { useScrollId } from "hooks/useScrollId"
import { Container } from "@vactory/ui/container"
import { navigation } from "./data"
import { Link } from "@vactory/ui/link"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const NavigationList = ({ navigation }) => {
	const scrollId = useScrollId("container2")
	return navigation.map((item) => (
		<Link
			key={item.name}
			href={item.id}
			className={classNames(
				item.id === scrollId ? "text-blue-500 font-bold" : "text-gray-900 font-normal",
				`block px-4 mb-4 text-xs hover:text-blue-500 after:inline-block active:text-white active:border-left `
			)}
			aria-current={item.current ? "page" : undefined}
		>
			{item.name}
		</Link>
	))
}

export const MenuNav = () => {
	const scrollPosition = useScrollPosition()

	return (
		<Container layout="fluid" className="sticky px-0  top-0 bg-white mt-6 z-10 mb-16">
			<div
				className={`flex relative flex-row shadow-2xl items-center justify-center divide-x pt-6 ${
					scrollPosition > 0 ? `mx-0` : `md:mx-28 `
				}`}
			>
				<NavigationList navigation={navigation} />
			</div>
		</Container>
	)
}
