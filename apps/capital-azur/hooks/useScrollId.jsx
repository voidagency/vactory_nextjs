import { useEffect, useState } from "react"

export const useScrollId = (id) => {
	const [scrollId, setScrollId] = useState(null)

	useEffect(() => {
		const updateScrollId = () => {
			var element = document.querySelector(id)
			var position = element.getBoundingClientRect()

			// checking whether fully visible
			if (position.top >= 0 && position.bottom <= window.innerHeight) {
				console.log("Element is fully visible in screen")
			}

			// checking for partial visibility
			if (position.top < window.innerHeight && position.bottom >= 0) {
				console.log(`Element is partially visible in screen ${element.id}`)
				setScrollId(element.id)
				{
					console.log(scrollId)
				}
			}
		}

		updateScrollId()

		window.addEventListener("scroll", updateScrollId)

		updateScrollId()

		return () => window.removeEventListener("scroll", updateScrollId)
	}, [scrollId, id])

	return scrollId
}
