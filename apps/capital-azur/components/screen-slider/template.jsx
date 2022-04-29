import React, { useEffect, useState } from "react"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"
import { Container } from "@vactory/ui/container"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "@vactory/ui/icon"

export const Template = ({ item }) => {
	const [isActive, setisActive] = useState(false)

	useEffect(() => {
		setTimeout(function () {
			setisActive(true)
		}, 400)
	}, [])

	return (
		<Container className="flex px-0">
			<div className="bottom-3 top-O right-2/3 pl-4 md:px-10">
				<Transition
					show={isActive}
					enter="transition delay-1000 duration-1000 "
					enterFrom="translate-y-[100%] opacity-0"
					enterTo="translate-y-0 opacity-1"
					leave=""
					leaveFrom=""
					leaveTo="translate-y-[100%] opacity-0"
				>
					<div className="bg-white px-4 py-6 w-[400px] md:w-[500px] h-full transition delay-1000 duration-1000 translate-y-0 opacity-1 rounded-lg">
						<div className="flex flex-row">
							<Icon
								id="minus"
								className="-mt-2 ml-2 text-blue-1000"
								width="80"
								height="50"
							/>
							<Heading level={2} className="text-left  text-lg font-bold mb-2 ml-2">
								{item.title}
							</Heading>
						</div>

						<p className="text-left text-xl text-gray-300 mb-2 ml-2">
							{item.description}
						</p>
						<Link variant="permalink" className="ml-2" href={item.link}>
							En savoir plus
						</Link>
					</div>
				</Transition>
			</div>
		</Container>
	)
}
