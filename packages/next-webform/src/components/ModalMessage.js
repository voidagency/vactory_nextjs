import React from "react"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import { Transition } from "@headlessui/react"

export const ModalMessage = ({ message = "", onClose }) => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = React.useState(true)

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<Transition
					show={isOpen}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					className="fixed inset-0 transition-opacity"
					aria-hidden="true"
				>
					<div className="absolute inset-0 bg-gray-500 opacity-75" />
				</Transition>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<Transition
					show={isOpen}
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="translate-y-4 sm:translate-y-0 sm:scale-95 opacity-0"
					className={`${
						isOpen ? "inline-block" : "hidden"
					} align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
				>
					<div>{message}</div>
					<div className="mt-5 sm:mt-6">
						<button
							onClick={(e) => {
								onClose(e)
								setIsOpen(false)
							}}
							type="button"
							className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
						>
							{t("webform:Close")}
						</button>
					</div>
				</Transition>
			</div>
		</div>
	)
}
