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
				item.current
					? "text-blue-500 font-bold"
					: "text-gray-900 dark:text-gray-300 font-normal",
				"block px-4 py-1  text-xs hover:text-blue-500 after:inline-block active:text-white active:bg-blue-1000 whitespace-nowrap"
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
			<Disclosure.Panel className="md:hidden w-64 h-full shadow-md bg-white fixed z-50">
				<div className="px-2 pt-2 pb-3 space-y-1">
					<div className="flex-shrink-0 flex items-center px-2 py-6">{image}</div>
					<hr className="my-6 border-indigo-700 sm:mx-auto dark:border-indigo-700 lg:my-8" />
					<NavigationList navigation={navigation} />
					<div className="block  rounded-md text-base font-medium">
						<Button
							variant={"primary"}
							className="bg-blue-1000"
							icon={<Icon id="lock-closed-solid" width="15" height="15" />}
						>
							BANQUE DIGITAL
						</Button>
						<Select
							list={lang}
							selected={lang[0]}
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
			<div className="absolute z-10 items-center md:hidden right-4 top-6 ">
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
		<div className="flex flex-row max-w-7xl  mx-auto px-2 sm:px-4 h-28 ">
			<div className="hidden md:flex items-center justify-between px-6 pb-2">
				<div className="flex justify-center md:items-center md:justify-start">
					<div className="flex-shrink-0 flex items-center">
						{image}
						<a href="">
							<img
								className="hidden lg:block h-24 w-auto"
								src="https://capital-azur.com/themes/capital_azur/logo.png"
								alt="Workflow"
							/>
						</a>
					</div>
					<div className="hidden md:block sm:ml-24 md:ml-32 lg:ml-64">
						<div className="flex space-x-4 divide-x">
							<NavigationList navigation={navigation} />
						</div>
					</div>
				</div>
				<div className="hidden py-0 inset-y-0 md:flex sm:items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-2">
					<Button
						variant={"primary"}
						className="bg-blue-1200 hover:bg-white hover:text-blue-1200 border border-blue-1200 mr-4 font-semibold shadow-lg"
						icon={<Icon id="lock-closed-solid" width="20" height="20" />}
					>
						BANQUE DIGITAL
					</Button>
					<Select
						list={lang}
						selected={lang[0]}
						chevronDownIcon={<Icon id="chevron-down" width="15" height="15" />}
					/>
				</div>
			</div>
		</div>
	)
}

export const Header = () => {
	const navigation = [
		{ name: "NOS PRODUITS", href: "produits-services", current: false },
		{ name: "NOUS CONNAITRE", href: "nous-connaitre", current: false },
		{ name: "NEWS", href: "insights", current: false },
		{ name: "RECHERCHE", href: "search", current: true },
	]

	const lang = [
		{
			value: 0,
			content: "FR",
		},
		{
			value: 1,
			content: "EN",
		},
		{
			value: 2,
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
		<Disclosure as="nav" className="bg-white dark:bg-black">
			{({ open }) => (
				<>
					<HeaderMobile navigation={navigation} lang={lang} image={Image} open={open} />
					<HeaderDefault navigation={navigation} lang={lang} image={Image} />
				</>
			)}
		</Disclosure>
	)
}
