import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const headings = {
	1: `lg:font-semibold lg:text-4xl lg:leading-9 text-2xl font-medium leading-8 font-helvetica-400`,
	2: `text-xl font-medium leading-7 font-helvetica-400 lg:text-3xl lg:leading-8`,
	3: `text-lg font-medium leading-6 font-helvetica-400 lg:text-2xl lg:leading-7`,
	4: `text-base font-medium leading-5 font-helvetica-400 lg:text-xl lg:leading-6`,
	5: `text-base font-normal leading-4 font-helvetica-400 lg:text-lg lg:leading-5`,
	6: `text-base font-normal leading-3 font-helvetica-400 lg:text-base lg:leading-4`,
}

const Heading = ({ children, className = "", level = 2, mb = " mb-4", ...props }) => {
	const Component = level ? `h${level}` : "h2"

	return (
		<Component
			className={clsx(level in headings ? headings[level] : headings[2], mb, className)}
			{...props}
		>
			{children}
		</Component>
	)
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	variant: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export { Heading }
