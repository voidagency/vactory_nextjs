import { useContext } from "react"
import { Tab } from "@vactory/headlessui/tabs"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

export const Tabs = ({ nodes = [], variant = "default" }) => {
	const { tabs } = useContext(ThemeContext)
	return (
		<div className={tabs[variant].wrapper}>
			<Tab.Group>
				<Tab.List className={tabs[variant].listwrapper}>
					{nodes.map((node) => (
						<Tab
							key={node.id}
							className={({ selected }) =>
								clsx(
									tabs[variant].title.base,
									selected ? tabs[variant].title.active : tabs[variant].title.inactive
								)
							}
						>
							{node.title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{nodes.map((node) => (
						<Tab.Panel key={node.id} className={tabs[variant].panel}>
							{node.content}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
