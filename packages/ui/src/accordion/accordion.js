import React, { useContext } from "react"
import { Disclosure } from "@vactory/headlessui/disclosure"
import { Transition } from "@vactory/headlessui/transition"
import { ThemeContext } from "../context/context"
//import {Icon} from '@vactory/ui/icon';
import clsx from "clsx"

export const AccordionButton = ({
	active,
	children,
	icon,
	className = "",
	variant = "default",
	...props
}) => {
	const { accordionButton } = useContext(ThemeContext)
	return (
		<Disclosure.Button className={clsx(accordionButton[variant].className, className)}>
			<div className={accordionButton[variant].p}>
				<span>{children}</span>
			</div>
			{icon && accordionButton.icon}
		</Disclosure.Button>
	)
}

export const AccordionPanel = ({
	title,
	active,
	children,
	show,
	className = "",
	variant = "default",
	...props
}) => {
	const { accordionPanel } = useContext(ThemeContext)
	return (
		<Disclosure>
			{title}
			<Transition
				className={clsx(accordionPanel[variant].className, className)}
				show={show}
				enter={accordionPanel[variant].transition.enter}
				enterFrom={accordionPanel[variant].transition.enterFrom}
				enterTo={accordionPanel[variant].transition.enterTo}
				leave={accordionPanel[variant].transition.leave}
				leaveFrom={accordionPanel[variant].transition.leaveFrom}
				leaveTo={accordionPanel[variant].transition.leaveTo}
			>
				<Disclosure.Panel
					static
					className={accordionPanel[variant].disclosurePanel.className}
				>
					{children}
				</Disclosure.Panel>
			</Transition>
		</Disclosure>
	)
}

export const Accordion = ({
	title,
	icon,
	accordionButtonText,
	accordionPanelText,
	...props
}) => {
	return (
		<React.Fragment>
			<Disclosure>
				{({ open }) => {
					return (
						<>
							<AccordionButton children={"hello"} />
							{
								<AccordionPanel
									show={open}
									children={"If you're unhappy with your purchase for any reason"}
								/>
							}
						</>
					)
				}}
			</Disclosure>
		</React.Fragment>
	)
}
