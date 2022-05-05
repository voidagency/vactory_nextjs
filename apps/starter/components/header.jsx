import { Fragment, useContext } from "react"
import { Link } from "@vactory/ui/link"
import { useSession } from "next-auth/react"
import { useMenu, getEnabledLanguages, NodePageContext } from "@vactory/next"
import { useRouter } from "next/router"
import { useSignIn, useSignOut } from "@vactory/next-user"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Icon } from "@vactory/ui/icon"
import { Menu } from "@vactory/headlessui/menu"
import { Transition } from "@vactory/headlessui/transition"
import logoImg from "../public/logo.png"

const UserMenu = dynamic(() => import("./user-menu"))
const languages = getEnabledLanguages({
	withLabels: true,
})

const UserInfo = () => {
	const { data, status } = useSession()
	const signIn = useSignIn()
	const signOut = useSignOut()

	if (status === "authenticated") {
		return <UserMenu data={data} signOut={signOut} />
	}

	return (
		<a
			href="#."
			onClick={() => signIn()}
			className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
		>
			Sign in
		</a>
	)
}

export const Header = () => {
	const router = useRouter()
	const locale = router.locale
	const navigation = useMenu("main")
	return (
		<header className="bg-indigo-600">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
						<Link href={`/${locale}`}>
							<span className="sr-only">Factory</span>
							<Image
								className="h-10 w-auto"
								height="35"
								width="120"
								src={logoImg}
								alt="Factory"
								priority="high"
							/>
						</Link>
						<div className="hidden ml-10 space-x-8 lg:block">
							{navigation.map((link) => (
								<Link
									key={link.id}
									href={link.url}
									className="text-base font-medium text-white hover:text-indigo-50"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
					<div className="ml-10 space-x-4 flex items-center">
						<div>
							<SwitchLocale />
						</div>
						<UserInfo />
					</div>
				</div>
				<div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
					{navigation.map((link) => (
						<Link
							key={link.id}
							href={link.url}
							className="text-base font-medium text-white hover:text-indigo-50"
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

const SwitchLocale = () => {
	const router = useRouter()
	const locale = router.locale
	const { path_18n } = useContext(NodePageContext)

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="focus:outline-none inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					{locale.toUpperCase()}
					<Icon
						id="chevron-down"
						className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="focus:outline-none absolute right-0 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
					<div className="px-1 py-1 ">
						{languages.map((language) => (
							<Menu.Item key={language.code}>
								{({ active }) => {
									const url = path_18n[language.code] || "#."
									return (
										<a
											href={url}
											className={`${
												active ? "bg-violet-500 text-white" : "text-gray-900"
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{/* {active ? (
										<EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
									) : (
										<EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
									)} */}
											{language.label}
										</a>
									)
								}}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
