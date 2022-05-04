import { useCallback, useState } from "react"
import { useScrollId } from "hooks/useScrollId"
import { Link } from "@vactory/ui/link"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export const Ancre = ({ navigation }) => {
	const [variable, setVariable] = useState("#container2")
	const scrollId = useScrollId(variable)
	const callBack = useCallback((item) => {
		setVariable(item.id)
	})
	return navigation.map((item) => (
		<>
			<Link
				key={item.name}
				href={item.id}
				className={classNames(
					item.id.split("#")[1] === scrollId
						? "text-blue-500 font-bold"
						: "text-gray-900 font-normal",
					`block px-4 mb-4 text-xs hover:text-blue-500 after:inline-block active:text-white active:border-left `
				)}
				aria-current={item.current ? "page" : undefined}
			>
				{item.name}
			</Link>
		</>
	))
}
