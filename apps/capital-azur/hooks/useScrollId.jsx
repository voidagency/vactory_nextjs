import { useEffect, useState } from "react"

export const useScrollId = (id) => {
	const [scrollId, setScrollId] = useState(null)

	useEffect(() => {
		const updateScrollId = () => {
			var element = document.querySelector(id)
			var position = element.getBoundingClientRect()

			// checking whether fully visible
			if (position.top >= 0 && position.bottom <= window.innerHeight) {
				// return scrollId
			}

			// checking for partial visibility
			if (
				(position.top < window.innerHeight / 2 ||
					window.innerHeight / 2 > position.bottom) &&
				position.bottom > 10
			) {
				setScrollId(element.id)
			} else setScrollId("")
		}

		updateScrollId()

		window.addEventListener("scroll", updateScrollId)

		updateScrollId()

		return () => window.removeEventListener("scroll", updateScrollId)
	}, [scrollId, id])

	return scrollId
}
