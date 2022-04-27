import { Container } from "@vactory/ui/container"
import { navigation } from "./data"
import { Link } from "@vactory/ui/link"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const NavigationList = ({ navigation }) => {
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

export const MenuNav = () => {
	return (
		<Container layout="fluid" id="container1" className="sticky top-0 bg-white pt-4 z-10">
			<div className="flex relative flex-row shadow-xl items-center justify-center divide-x mx-16 mt-6">
				<NavigationList navigation={navigation} />
			</div>
		</Container>
	)
}
