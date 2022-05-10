import { useTheme } from "next-themes"
import { Menu } from "@vactory/headlessui/menu"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "@vactory/ui/icon"
import { Fragment, useEffect, useRef, useState } from "react"

export const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()
	const [selectedTheme, setSelectedTheme] = useState(theme)
	const changeTheme = (selectedTheme) => {
		setTheme(selectedTheme)
		setSelectedTheme(selectedTheme)
	}
	return (
		<div className=" text-right">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{selectedTheme === "light" ? (
							<Icon id="light-bulb-solid" className="w-6 h-6 text-gray-500"></Icon>
						) : (
							<Icon id="moon-solid" className="w-6 h-6"></Icon>
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
					<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => {
									console.log(active)
									return (
										<button
											className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
											onClick={() => {
												changeTheme("light")
											}}
										>
											{active ? (
												<Icon
													id="light-bulb-solid"
													className="mr-2 h-5 w-5 text-blue-300"
													aria-hidden="true"
												/>
											) : (
												<Icon
													id="light-bulb-solid"
													className="mr-2 h-5 w-5 text-gray-700"
													aria-hidden="true"
												/>
											)}
											Light
										</button>
									)
								}}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
										onClick={() => {
											changeTheme("dark")
										}}
									>
										{active ? (
											<Icon
												id="moon-solid"
												className="mr-2 h-5 w-5 text-blue-300"
												aria-hidden="true"
											/>
										) : (
											<Icon
												id="moon-solid"
												className="mr-2 h-5 w-5 text-gray-700"
												aria-hidden="true"
											/>
										)}
										Dark
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}

export default ThemeToggler
