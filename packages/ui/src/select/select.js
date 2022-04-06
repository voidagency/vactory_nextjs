import { Fragment, useState, useContext } from "react"
import { Transition } from "@vactory/headlessui/transition"
import { Listbox } from "@vactory/headlessui/listbox"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "../context/context"
import clsx from "clsx"

export const Select = ({ list, chevronDownIcon, checkIcon, variant = "default" }) => {
	const [selected, setSelected] = useState(list[0])
	const { select } = useContext(ThemeContext)
	return (
		<div className={clsx(select[variant].wrapper)}>
			<Listbox value={selected} onChange={setSelected}>
				<div className={select[variant].listBox.wrapper}>
					<Listbox.Button className={select[variant].listBox.button.wrapper}>
						<span className={select[variant].listBox.button.selected}>
							{selected.value}
						</span>
						<span className={select[variant].listBox.button.selectedIcon}>
							{chevronDownIcon && chevronDownIcon}
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave={select[variant].listBox.transition.leave}
						leaveFrom={select[variant].listBox.transition.leaveFrom}
						leaveTo={select[variant].listBox.transition.leaveTo}
					>
						<Listbox.Options
							className={select[variant].listBox.transition.listBoxOptions.wrapper}
						>
							{list.map((list, index) => (
								<Listbox.Option
									key={index}
									className={({ active }) =>
										`${
											select[variant].listBox.transition.listBoxOptions.listBoxOption
												.wrapper
										} ${
											active
												? select[variant].listBox.transition.listBoxOptions.listBoxOption
														.active
												: select[variant].listBox.transition.listBoxOptions.listBoxOption
														.notActive
										}`
									}
									value={list}
								>
									{({ selected }) => (
										<>
											<span
												className={`${
													select[variant].listBox.transition.listBoxOptions.listBoxOption
														.content.wrapper
												} ${
													selected
														? select[variant].listBox.transition.listBoxOptions
																.listBoxOption.selectedfont
														: select[variant].listBox.transition.listBoxOptions
																.listBoxOption.notselectedfont
												}`}
											>
												{list.value}
											</span>
											{selected ? (
												<span
													className={
														select[variant].listBox.transition.listBoxOptions
															.listBoxOption.content.selected
													}
												>
													{checkIcon && checkIcon}
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}
