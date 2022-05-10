import React, { Fragment, useContext, useState } from "react"
import { Transition } from "@vactory/headlessui/transition"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

export const Tooltip = ({ size = "xsmall", position, text, children }) => {
	const { tooltip } = useContext(ThemeContext)
	const [showTooltip, setShowTooltip] = useState(false)
	const handleMouseEnter = () => {
		setShowTooltip(true)
	}

	const handleMouseLeave = () => {
		setShowTooltip(false)
	}
	return (
		<div
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<Transition
				as={Fragment}
				show={showTooltip}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<div className={clsx(tooltip.wrapper, tooltip["position"][position])}>
					<p className={clsx(tooltip.size[size])}>{text}</p>
				</div>
			</Transition>
		</div>
	)
}

export default Tooltip
