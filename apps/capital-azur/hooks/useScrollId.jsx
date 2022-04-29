import { useEffect, useState } from "react"

export const useScrollId = (id) => {
	const [scrollId, setScrollId] = useState("")

	useEffect(() => {
		window.onload = () => {
			setScrollId(document.getElementById(id))
		}

		window.addEventListener("scroll", window.onload)

		window.onload()

		return () => window.removeEventListener("scroll", window.onload)
	}, [])

	return scrollId
}
