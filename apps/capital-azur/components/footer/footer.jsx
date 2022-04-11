import { NavigationList } from "../header/header"
import { IconHref } from "../IconHref"

export const Footer = () => {
	const navigation = [
		{ name: "NOUS CONTACTER", href: "#", current: false },
		{ name: "APPELS D'OFFRES", href: "#", current: false },
		{ name: "NOUS REJOINDRE", href: "#", current: false },
		{ name: "GLOSSAIRE", href: "#", current: false },
	]

	const socialmedia = [
		{ id: "youtube-solid", href: "#" },
		{ id: "twitter-solid", href: "#" },
		{ id: "linkedin-solid", href: "#" },
		{ id: "facebook-solid", href: "#" },
	]

	return (
		<>
			<div className="p-4  bg-white rounded-lg shadow md:px-16 dark:bg-gray-800">
				<hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="flex items-center justify-between ">
						<h3 className="lg:hidden self-center text-sm font-semibold whitespace-nowra">
							follow us
						</h3>
						<ul className="flex space-x-4 py-4">
							{socialmedia.map((media, index) => (
								<li key={index}>
									<IconHref media={media} />
								</li>
							))}
						</ul>
					</div>

					<div className="lg:flex lg:space-x-4">
						<NavigationList navigation={navigation} />
					</div>
				</div>

				<div className="hidden lg:flex lg:items-center lg:justify-between py-6">
					<span className="self-center text-sm text-indigo-500">
						Capital Azur 2020 © All rights reserved
					</span>

					<span className="block text-sm sm:text-center text-indigo-500">
						Conception et Developement{" "}
						<a href="#" className="hover:underline">
							VOID
						</a>
					</span>
				</div>
			</div>
		</>
	)
}
