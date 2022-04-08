import React, { useContext } from "react"
import clsx from "clsx"
import { Disclosure } from "@vactory/headlessui/disclosure"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Accordion = ({ variant = "default", nodes = [] }) => {
	const { accordion } = useContext(ThemeContext)
	return (
		<div className={accordion[variant].wrapper}>
			{nodes.map((item) => {
				return (
					<Disclosure key={item.id}>
						{({ open }) => (
							<div className={accordion[variant].element}>
								<Disclosure.Button
									className={clsx(
										accordion[variant].button.base,
										open
											? accordion[variant].button.active
											: accordion[variant].button.inactive
									)}
								>
									{item.button}
									<Icon
										id={accordion[variant].button.icon.id}
										className={clsx(
											accordion[variant].button.icon.base,
											open
												? accordion[variant].button.icon.active
												: accordion[variant].button.icon.inactive
										)}
										width={accordion[variant].button.icon.width}
										height={accordion[variant].button.icon.height}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className={accordion[variant].panel}>
									<Transition
										show={open}
										enter="transition duration-100 ease-out"
										enterFrom="h-0 opacity-0"
										enterTo="h-max opacity-100"
										leave="transition duration-75 ease-out"
										leaveFrom="transform scale-100 opacity-100"
										leaveTo="transform scale-95 opacity-0"
									>
										{item.panel}
									</Transition>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
				)
			})}
		</div>
	)
}

/**
 *
 * TODO: Ajouter l'animation
 *
 * */
