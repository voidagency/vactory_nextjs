import React, { useCallback, useEffect, useContext, useRef } from "react"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"

const Layer = ({
	variant = "default",
	overlay = true,
	overlayBackground,
	overlayOpacity,
	modal = false,
	position = "modal",
	children,
	onClose,
	onCloseCallback,
	isShow,
	overlayClasses,
	showCloseBtn = true,
	closeButton,
}) => {
	const overlayRef = useRef()

	// close on ESC press
	const { layer } = useContext(ThemeContext)
	const escFunction = useCallback((event) => {
		if (event.key === "Escape") {
			onClose()
		}
	}, [])

	const handleOutsideClick = (e) => {
		if (overlayRef.current && !e.target.contains(overlayRef.current)) {
			onClose()
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false)
		document.addEventListener("click", handleOutsideClick, true)
		return () => {
			document.removeEventListener("click", handleOutsideClick, true)
			document.removeEventListener("keydown", escFunction, false)
		}
	}, [])

	const backgroundClass = overlayBackground ? overlayBackground : "bg-black"
	const opacityClass = overlayOpacity ? overlayOpacity : "bg-opacity-50"
	const baseClasses = overlayClasses
		? overlayClasses
		: "fixed top-0 left-0 w-full h-full h-full z-40"

	return (
		<Transition show={isShow}>
			{overlay && (
				<Transition.Child {...layer[variant]["opacity"].animation}>
					<div
						ref={overlayRef}
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
				<Transition.Child
					afterLeave={() => {
						onCloseCallback()
					}}
					className="relative max-w-fit"
					{...layer[variant][position].animation}
				>
					{showCloseBtn && !closeButton && (
						<button className={layer[variant].btnClose.style} onClick={onClose}>
							<Icon
								id={layer[variant].btnClose.icon.id}
								width={layer[variant].btnClose.icon.width}
								height={layer[variant].btnClose.icon.height}
							/>
						</button>
					)}
					{closeButton && closeButton}
					{children}
				</Transition.Child>
			</div>
		</Transition>
	)
}

export { Layer }
