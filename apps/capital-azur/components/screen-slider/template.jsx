import React, { useEffect, useState } from "react"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"
import { Container } from "@vactory/ui/container"
import { Transition } from "@vactory/headlessui/transition"

export const Template = ({ item }) => {
	const [isActive, setisActive] = useState(false)

	useEffect(() => {
		setTimeout(function () {
			setisActive(true)
		}, 500)
	}, [])

	return (
		<Container className="flex items-center">
			<div className="bottom-3 top-O right-1/2 ">
				<Transition
					show={isActive}
					enter="transition delay-1000 duration-1000 "
					enterFrom="translate-y-[100%] opacity-0"
					enterTo="translate-y-0 opacity-1"
					leave=""
					leaveFrom=""
					leaveTo="translate-y-[100%] opacity-0"
				>
					<div className="bg-white  px-8 py-10 w-[450px] h-[300px] transition delay-1000 duration-1000 translate-y-0 opacity-1">
						<Heading
							level={2}
							className="text-left mb-3 ml-8 before:content-['-__'] before:text-indigo-500"
						>
							{item.title}
						</Heading>
						<p className="text-left mb-2 ">{item.description}</p>
						<Link variant="permalink" href={item.link}>
							En savoir plus
						</Link>
					</div>
				</Transition>
			</div>
		</Container>
	)
}
