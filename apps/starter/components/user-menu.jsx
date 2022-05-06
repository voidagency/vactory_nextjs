import { Fragment } from "react"
import classNames from "clsx"
import { Menu } from "@vactory/headlessui/menu"
import { Transition } from "@vactory/headlessui/transition"
// import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { Avatar } from "@vactory/ui/avatar"

const UserMenu = ({ data, signOut }) => {
	const router = useRouter()
	const { locale } = router

	const userNavigation = [
		{ name: "Settings", href: `/${locale}/user/profile` },
		{ name: "Sign out", href: "#.", onClick: signOut },
	]

	return (
		<Menu as="div" className="inline-block flex-shrink-0 relative ml-4">
			<div>
				<Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
					<span className="sr-only">Open user menu</span>
					{data.user?.avatar ? (
						<Avatar src={data.user.avatar} size="normal" alt="Me" />
					) : (
						<Avatar variant="placeholder" size="normal" />
					)}
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
				<Menu.Items className="z-10	origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 divide-y divide-gray-100 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							<span className="block px-4 py-2 text-sm text-gray-900 font-bold">
								{data.user.full_name}
							</span>
						</Menu.Item>
					</div>
					<div className="py-1">
						{userNavigation.map((item) => (
							<Menu.Item key={item.name}>
								{({ active }) => (
									<Link href={item?.href} passHref>
										<a
											onClick={item?.onClick}
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"block px-4 py-2 text-sm rounded-md"
											)}
										>
											{item.name}
										</a>
									</Link>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default UserMenu
