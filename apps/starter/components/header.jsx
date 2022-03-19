import { Link } from "@vactory/ui/link"
import { useSession } from "next-auth/react"
import { useMenu } from "@vactory/next/menus"
import { useRouter } from "next/router"
import { useSignIn, useSignOut } from "@vactory/next-user"
import dynamic from "next/dynamic"
import Image from "next/image"
import logoImg from "../public/logo.png"

const UserMenu = dynamic(() => import("./user-menu"))

const UserInfo = () => {
	const { data, status } = useSession()
	const signIn = useSignIn()
	const signOut = useSignOut()
	console.log(data)

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
						<a href="#">
							<span className="sr-only">Factory</span>
							<Image
								className="h-10 w-auto"
								height="40"
								width="120"
								src={logoImg}
								alt="Factory"
								priority="high"
							/>
						</a>
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
					<div className="ml-10 space-x-4">
						<a
							href="#"
							className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
						>
							{locale}
						</a>
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
