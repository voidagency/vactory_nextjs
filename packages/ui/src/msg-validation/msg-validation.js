import React, { useState, Fragment, useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "../icon/icon"
import { ThemeContext } from "../context/context"

const MsgValidation = ({
	state = "success",
	children,
	className = "",
	showClose = false,
	...props
}) => {
	const [show, setShow] = useState(true)

	const { msgValidation } = useContext(ThemeContext)
	return (
		<Transition show={show} as={Fragment} {...msgValidation.animation}>
			<div
				className={clsx(msgValidation[state].box, msgValidation.base, className)}
				{...props}
			>
				{showClose && (
					<button
						className={msgValidation[state].close}
						onClick={() => {
							setShow(false)
						}}
					>
						<Icon id="x" className={msgValidation[state].icon} aria-hidden="true" />
					</button>
				)}
				{children}
			</div>
		</Transition>
	)
}

MsgValidation.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.string,
	className: PropTypes.string,
	showClose: true,
	//state: PropTypes.oneOf(["success", "error", "warning"]),
}

export { MsgValidation }
