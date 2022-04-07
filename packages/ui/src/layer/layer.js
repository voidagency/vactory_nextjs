import React, { useCallback, useEffect, useContext } from "react"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { ThemeContext } from "@vactory/ui/theme-context"

/**
 * * overlay ( background black with opacity) + (true || false)
 * * * overlayBackground
 * * * overlayOpacity
 * * fixed (top-left, top-right, bottom, top)
 * * * top-left
 * * * top-right
 * * * bottom-left
 * * * bottom-right
 * full width
 * full height
 * * modal
 * notification
 * onClickOutside
 * * onEsc
 * layerTarget
 * showClose
 * * closeLayer
 */

const Layer = ({
	variant = "default",
	overlay = true,
	overlayBackground,
	overlayOpacity,
	modal = false,
	position = "modal",
	fullWidth = true,
	fullHeight = true,
	children,
	closeLayer,
	isShowing,
	overlayClasses,
}) => {
	// close on ESC press
	const { layer } = useContext(ThemeContext)
	const escFunction = useCallback((event) => {
		if (event.key === "Escape") {
			closeLayer()
		}
	}, [])

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false)

		return () => {
			document.removeEventListener("keydown", escFunction, false)
		}
	}, [])

	const backgroundClass = overlayBackground ? overlayBackground : "bg-black"
	const opacityClass = overlayOpacity ? overlayOpacity : "bg-opacity-50"
	const baseClasses = overlayClasses
		? overlayClasses
		: "fixed top-0 left-0 w-full h-full h-full z-40"

	return (
		<Transition show={isShowing}>
			{overlay && (
				<Transition.Child {...layer[variant]["opacity"].animation}>
					<div
						className={clsx(
							overlay && baseClasses,
							overlay && backgroundClass,
							overlay && opacityClass
						)}
					></div>
				</Transition.Child>
			)}
			<div
				className={clsx(
					modal && overlay && layer[variant]["modal"].position,
					!modal && position && "fixed z-50",
					!modal && position && layer[variant][position].position
				)}
			>
				<span className="text-white shadow-md shadow-black"></span>
				<Transition.Child {...layer[variant][position].animation}>
					{children}
				</Transition.Child>
			</div>
		</Transition>
	)
}

export { Layer }
