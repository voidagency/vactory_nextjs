import React from "react"
import { Button } from "@vactory/ui/button"

export default function Node({ node }) {
	return (
		<div className="relative px-4 sm:px-6 lg:px-8">
			<div className="text-lg max-w-prose mx-auto">
				<h1>
					<span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
						Introducing
					</span>
					<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Page detail News
					</span>
				</h1>
				<p className="mt-8 text-xl text-gray-500 leading-8">
					<Button>News Button</Button>
				</p>
			</div>
			<div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
				<div
					dangerouslySetInnerHTML={{
						__html: node?.body?.processed,
					}}
				/>
			</div>
		</div>
	)
}
