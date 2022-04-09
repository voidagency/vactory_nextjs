import { Fragment, useState, useContext } from "react"
import clsx from "clsx"
import { Transition } from "@vactory/headlessui/transition"
import { Listbox } from "@vactory/headlessui/listbox"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"

export const Select = ({ list, variant = "default" }) => {
	const [selected, setSelected] = useState(list[0])
	const { select } = useContext(ThemeContext)
	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className={select[variant].wrapper}>
				<Listbox.Button className={select[variant].button.base}>
					{selected.content}
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
	)
}
