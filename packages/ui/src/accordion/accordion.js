import React, { useContext, useState } from "react"
import clsx from "clsx"
import { Disclosure } from "@vactory/headlessui/disclosure"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Accordion = ({ variant = "default", nodes = [] }) => {
	const { accordion } = useContext(ThemeContext)
	const [openedAccordion, setOpenedAccordion] = useState(null)
	const handleAccordionOpening = (accordionId) => {
		setOpenedAccordion((prev) => {
			if (prev === null) return accordionId
			else if (prev !== accordionId) return accordionId
			else return null
		})
	}
	return (
		<div className={accordion[variant].wrapper}>
			{nodes.map((item) => {
				return (
					<Disclosure key={item.id}>
						{({ open }) => {
							const isOpened = openedAccordion === item.id
							return (
								<div className={accordion[variant].element}>
									<Disclosure.Button
										className={clsx(
											accordion[variant].button.base,
											isOpened
												? accordion[variant].button.active
												: accordion[variant].button.inactive
										)}
									>
										<div
											className="w-full text-left"
											onClick={() => {
												handleAccordionOpening(item.id)
											}}
										>
											{item.button}
										</div>
										<Icon
											id={accordion[variant].button.icon.id}
											className={clsx(
												accordion[variant].button.icon.base,
												isOpened
													? accordion[variant].button.icon.active
													: accordion[variant].button.icon.inactive
											)}
											width={accordion[variant].button.icon.width}
											height={accordion[variant].button.icon.height}
										/>
									</Disclosure.Button>
									{isOpened && (
										<Disclosure.Panel className={accordion[variant].panel} static>
											{item.panel}
										</Disclosure.Panel>
									)}
								</div>
							)
						}}
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
