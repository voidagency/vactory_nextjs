import { Fragment, useState, useContext } from "react"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Notification = ({
	className = "",
	variant = "default",
	icon,
	children,
	...props
}) => {
	const [show, setShow] = useState(true)
	const { notification } = useContext(ThemeContext)
	return (
		<div
			aria-live="assertive"
			className={clsx(notification[variant].wrapper, className)}
			{...props}
		>
			<Transition
				show={show}
				as={Fragment}
				enter="transform ease-out duration-300 transition"
				enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
				enterTo="translate-y-0 opacity-100 sm:translate-x-0"
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div className="p-4">
						<div className="flex items-start">
							<div className="flex-shrink-0">
								<Icon
									id="check-circle"
									className="h-6 w-6 text-green-400"
									aria-hidden="true"
								/>
							</div>
							<div className="ml-3 w-0 flex-1 pt-0.5">
								<p className="text-sm font-medium text-gray-900">Successfully saved!</p>
								<p className="mt-1 text-sm text-gray-500">
									Anyone with a link can now view this file.
								</p>
							</div>
							<div className="ml-4 flex-shrink-0 flex">
								<button
									className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={() => {
										setShow(false)
									}}
								>
									<span className="sr-only">Close</span>
									<Icon id="x" className="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}
