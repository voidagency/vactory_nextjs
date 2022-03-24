import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const errorColors = {
	success: "bg-green-200 text-green-800",
	error: "bg-red-200 text-red-800",
	warning: "bg-yellow-200 text-yellow-800",
}

const MsgValidation = ({ state = "success", children, ...props }) => {
	return (
		<div className={clsx("px-9 py-5 font-medium font-ls", errorColors[state])} {...props}>
			{children}
		</div>
	)
}

MsgValidation.propTypes = {
	children: PropTypes.node.isRequired,
	state: PropTypes.oneOf(["success", "error", "warning"]),
}

export { MsgValidation }
