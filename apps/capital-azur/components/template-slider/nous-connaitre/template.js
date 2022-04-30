import { useState, useEffect } from "react"
import { Heading } from "@vactory/ui/heading"

export const Template = ({ item }) => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (counter <= item.chiffre - 1) {
				setCounter((counter) => counter + 1)
			}
		}, 100)
		return () => {
			clearInterval(interval)
		}
	}, [counter])

	return (
		<div className="flex flex-col items-center justify-center bg-white rounded-xl border border-blue-1000">
			<div className="h-full mb-6">
				<span className="text-8xl text-blue-1000 font-black">{counter}</span>
			</div>
			<Heading level={5} className="text-center mb-6">
				{item.title}
			</Heading>
		</div>
	)
}
