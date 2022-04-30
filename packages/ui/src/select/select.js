import { Fragment, useContext, useState } from "react"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { Listbox } from "@vactory/headlessui/listbox"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"

export const Select = ({
	list,
	//selected,
	//setSelected,
	variant = "default",
	label,
	className,
}) => {
	const { select } = useContext(ThemeContext)
	const [selected, setSelected] = useState(list[0]) // To hide here and parse it from the parent component
	return (
		<div className={select[variant].groupField}>
			{label && <label className={select[variant].label}>{label}</label>}
			<Listbox value={selected} onChange={setSelected}>
				<div className={select[variant].wrapper}>
					<Listbox.Button className={clsx(select[variant].button.base, className)}>
						<div className="overflow-hidden">
							<p className="truncate">{selected.content}</p>
						</div>
						<Icon
							id={select[variant].button.icon.id}
							className={select[variant].button.icon.className}
							width={select[variant].button.icon.width}
							height={select[variant].button.icon.height}
						/>
					</Listbox.Button>
					<Transition as={Fragment} {...select[variant].animation}>
						<Listbox.Options className={select[variant].options.wrapper}>
							{list.map((list, index) => (
								<Listbox.Option
									key={index}
									className={({ active }) =>
										clsx(
											select[variant].options.base,
											active
												? select[variant].options.active
												: select[variant].options.inactive
										)
									}
									value={list}
								>
									{({ selected }) => (
										<>
											{list.content}
											{select[variant].options.icon.id && (
												<>
													{selected ? (
														<Icon
															id={select[variant].options.icon.id}
															width={select[variant].options.icon.width}
															height={select[variant].options.icon.height}
															className={select[variant].options.icon.className}
														/>
													) : null}
												</>
											)}
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
