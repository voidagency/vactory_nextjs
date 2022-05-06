import React from "react"

const NodeDefault = ({ node }) => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
						Ops !
					</h2>
					<h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
						{node?.title}
					</h1>
					<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-14">
						<p className="text-sm text-yellow-700">
							No template found for <strong>{node?.type}</strong> !!. Make sure you have
							defined <i>module.json</i> in your package.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NodeDefault
