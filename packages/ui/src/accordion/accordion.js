import React, { useState } from "react"
import { Disclosure } from "@vactory/headlessui/disclosure"
import { Transition } from "@vactory/headlessui/transition"
//import {Icon} from '@vactory/ui/icon';

const AccordionButton = ({ active, icon, ...props }) => {
	return (
		<Disclosure.Button className="flex flex-row items-center justify-between">
			<div>{children}</div>
			{icon && <iCon id={icon} />}
		</Disclosure.Button>
	)
}

const AccordionPanel = ({ title, active, childre, ...props }) => {
	return (
		<Disclosure>
			{title}
			<Transition
				show={show}
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Disclosure.Panel>{children}</Disclosure.Panel>
			</Transition>
		</Disclosure>
	)
}

const Accordion = ({ title, icon, children, ...props }) => {
	const [show, setShow] = useState(true)
	//const show = false;

	return (
		<React.Fragment>
			<Disclosure>
				{({ show }) => {
					return (
						<>
							<Disclosure.Button onClick={() => setShow(!show)}>
								<p className="w-full flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>What is your refund policy ?</span>
								</p>
							</Disclosure.Button>
							<Transition
								show={show}
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500">
									If you're unhappy with your purchase for any reason, email us within 90
									days and we'll refund you in full, no questions asked.
								</Disclosure.Panel>
							</Transition>
						</>
					)
				}}
			</Disclosure>
		</React.Fragment>
	)
}

export { Accordion, AccordionButton }
