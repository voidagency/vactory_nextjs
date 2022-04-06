import { Fragment, useState, useContext } from "react"
import { Transition } from "@vactory/headlessui/transition"
import { Combobox } from "@vactory/headlessui/combobox"
import { Icon } from "@vactory/ui/icon"
import { ThemeContext } from "../context/context"
import clsx from "clsx"

const ComboxOption = ({ variant = "default", filteredPeople, iconCheked }) => {
	const { comboxOption } = useContext(ThemeContext)
	return filteredPeople.map((person) => (
		<Combobox.Option
			key={person.id}
			className={({ active }) =>
				` ${clsx(comboxOption[variant].className)}
					${active ? comboxOption[variant].active : comboxOption[variant].noActive}`
			}
			value={person}
		>
			{({ selected, active }) => (
				<>
					<span
						className={`${comboxOption[variant].span.className} ${
							selected
								? comboxOption[variant].span.selected
								: comboxOption[variant].span.notselected
						}`}
					>
						{person.name}
					</span>
					{selected ? (
						<span
							className={`${comboxOption[variant].selected.span.className}
								${
									active
										? comboxOption[variant].selected.span.active
										: comboxOption[variant].selected.span.noActive
								}`}
						>
							<Icon id="check-solid" width="15" height="15" />
						</span>
					) : null}
				</>
			)}
		</Combobox.Option>
	))
}

export const Autocomplete = ({ people, variant = "default", iconCheked }) => {
	const [selected, setSelected] = useState(people[0])
	const [query, setQuery] = useState("")

	const filteredPeople =
		query === ""
			? people
			: people.filter((person) =>
					person.name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  )

	const { autocomplete } = useContext(ThemeContext)
	return (
		<div className={clsx(autocomplete[variant].className)}>
			<Combobox value={selected} onChange={setSelected}>
				<div className={autocomplete[variant].combobox.className}>
					<div className={autocomplete[variant].combobox.div.className}>
						<Combobox.Input
							className={autocomplete[variant].combobox.div.input}
							displayValue={(person) => person.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className={autocomplete[variant].combobox.div.button}>
							<Icon id="selector-solid" width="15" height="15" />
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave={autocomplete[variant].combobox.transition.leave}
						leaveFrom={autocomplete[variant].combobox.transition.leaveFrom}
						leaveTo={autocomplete[variant].combobox.transition.leaveTo}
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options
							className={
								autocomplete[variant].combobox.transition.comboboxoptions.className
							}
						>
							{filteredPeople.length === 0 && query !== "" ? (
								<div
									className={
										autocomplete[variant].combobox.transition.comboboxoptions.div
											.className
									}
								>
									Nothing found.
								</div>
							) : (
								<ComboxOption filteredPeople={filteredPeople} iconCheked={iconCheked} />
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}
