/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Disclosure } from "@vactory/headlessui/disclosure"
import { Icon } from "@vactory/ui/icon"
import { Link } from "@vactory/ui/link"
import { Button } from "@vactory/ui/button"
import { Select } from "@vactory/ui/select"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

//To add in UI packages

// this Nav list contains both mobile and desktop version
export const NavigationList = ({ navigation }) => {
	return navigation.map((item) => (
		<Link
			key={item.name}
			href={item.href}
			className={classNames(
				item.current ? "text-blue-500 font-bold" : "text-gray-900 font-normal",
				"block px-4 py-1  text-xs hover:text-blue-500 after:inline-block active:text-white active:bg-blue-1000"
			)}
			aria-current={item.current ? "page" : undefined}
		>
			{item.name}
		</Link>
	))
}

//To add in UI packages
const ButtonIcon = ({ open }) => {
	const IconMenu = <Icon id="menu" className="block h-6 w-6" aria-hidden="true" />
	const IconX = <Icon id="x" className="block h-6 w-6" aria-hidden="true" />
	return (
		<>
			{/**/}
			<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-1000 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
				<span className="sr-only">Open main menu</span>
				{open ? IconX : IconMenu}
			</Disclosure.Button>
		</>
	)
}

//To add in UI packages
const NavPanel = ({ navigation, lang, image }) => {
	return (
		<>
			<Disclosure.Panel className="md:hidden w-64 h-full shadow-md bg-white fixed z-10">
				<div className="px-2 pt-2 pb-3 space-y-1">
					<div className="flex-shrink-0 flex items-center px-2 py-6">{image}</div>
					<hr className="my-6 border-indigo-700 sm:mx-auto dark:border-indigo-700 lg:my-8" />
					<NavigationList navigation={navigation} />
					<div className="block  rounded-md text-base font-medium">
						<Button
							variant={"primary"}
							icon={<Icon id="lock-closed-solid" width="30" height="30" />}
						>
							BANQUE DIGITAL
						</Button>
						<Select
							list={lang}
							selected={"FR"}
							chevronDownIcon={<Icon id="chevron-down" width="15" height="15" />}
						/>
					</div>
				</div>
			</Disclosure.Panel>
		</>
	)
}

const HeaderMobile = ({ open, navigation, lang, image }) => {
	return (
		<>
			<div className="fixed z-10 items-center md:hidden right-4 top-6 ">
				<ButtonIcon open={open} />
			</div>
			<div className="absolute items-center md:hidden left-4 top-6 ">
				<div className="flex-shrink-0 flex items-center">{image}</div>
			</div>
			<NavPanel navigation={navigation} lang={lang} image={image} />
		</>
	)
}

const HeaderDefault = ({ navigation, lang, image }) => {
	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-24 ">
			<div className="hidden md:flex items-center justify-between px-6 py-4">
				<div className="flex justify-center md:items-stretch md:justify-start">
					<div className="flex-shrink-0 flex items-center">
						{image}
						<img
							className="hidden lg:block h-16  w-auto"
							src="https://capital-azur.com/themes/capital_azur/logo.png"
							alt="Workflow"
						/>
					</div>
					<div className="hidden md:block sm:ml-24 md:ml-32 lg:ml-64">
						<div className="flex space-x-4 divide-x mt-6">
							<NavigationList navigation={navigation} />
						</div>
					</div>
				</div>
				<div className="hidden py-0 inset-y-0 md:flex sm:items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-2">
					<Button
						variant={"primary"}
						className="bg-blue-1200 hover:bg-white hover:text-blue-1200 border border-blue-1200"
						icon={<Icon id="lock-closed-solid" width="30" height="30" />}
					>
						BANQUE DIGITAL
					</Button>
					<Select
						list={lang}
						selected={"FR"}
						chevronDownIcon={<Icon id="chevron-down" width="15" height="15" />}
					/>
				</div>
			</div>
		</div>
	)
}

export const Header = () => {
	const navigation = [
		{ name: "NOS PRODUITS", href: "#", current: false },
		{ name: "NOUS CONNAITRE", href: "#", current: false },
		{ name: "NEWS", href: "#", current: false },
		{ name: "RECHERCHE", href: "#", current: true },
	]

	const lang = [
		{
			value: "FR",
			content: "FR",
		},
		{
			value: "EN",
			content: "EN",
		},
		{
			value: "AR",
			content: "AR",
		},
	]

	const Image = (
		<img
			className="block lg:hidden h-16 w-auto"
			src="https://capital-azur.com/themes/capital_azur/logo.png"
			alt="Workflow"
		/>
	)

	return (
		<Disclosure as="nav" className="bg-white">
			{({ open }) => (
				<>
					<HeaderMobile navigation={navigation} lang={lang} image={Image} open={open} />
					<HeaderDefault navigation={navigation} lang={lang} image={Image} />
				</>
			)}
		</Disclosure>
	)
}
