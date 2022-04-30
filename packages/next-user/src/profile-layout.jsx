import React from "react"
import { Icon } from "@vactory/ui/icon"
import classNames from "clsx"
import { useRouter } from "next/router"
import Link from "next/link"

export default function ProfileLayout({ children }) {
	const router = useRouter()
	const locale = router.locale
	const currentRoute = router.query.slug.join("/")

	const navigation = [
		{
			name: "Account",
			href: `/${locale}/user/profile`,
			icon: "user-circle",
			current: currentRoute === "profile",
		},
		{
			name: "Password",
			href: `/${locale}/user/profile-password`,
			icon: "key",
			current: currentRoute === "profile-password",
		},
	]

	return (
		<div className="bg-gray-100">
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
						<nav className="space-y-1">
							{navigation.map((item) => (
								<Link key={item.name} href={item.href} passHref>
									<a
										className={classNames(
											item.current
												? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
												: "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
											"group rounded-md px-3 py-2 flex items-center text-sm font-medium"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										<Icon
											id={item.icon}
											className={classNames(
												item.current
													? "text-indigo-500 group-hover:text-indigo-500"
													: "text-gray-400 group-hover:text-gray-500",
												"flex-shrink-0 -ml-1 mr-3 h-6 w-6"
											)}
											aria-hidden="true"
										/>
										<span className="truncate">{item.name}</span>
									</a>
								</Link>
							))}
						</nav>
					</aside>

					<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
				</div>
			</div>
		</div>
	)
}
