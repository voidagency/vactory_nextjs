import { useContext } from "react"
import { Tab } from "@vactory/headlessui/tabs"
import { ThemeContext } from "@vactory/ui/theme-context"
import clsx from "clsx"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const TabPanel = ({ nodes, key, variant = "default" }) => {
	const posts = nodes

	const { tabPanel } = useContext(ThemeContext)
	return (
		<Tab.Panel
			key={key}
			className={classNames(
				clsx(tabPanel[variant].className),
				clsx(tabPanel[variant].className1)
			)}
		>
			<ul>
				{posts.map((post) => (
					<li key={post.id} className={tabPanel[variant].listPost}>
						<h3 className={tabPanel[variant].h3}>{post.title}</h3>

						<ul className={tabPanel[variant].ul}>
							<li>{post.date}</li>
							<li>&middot;</li>
							<li>{post.commentCount} comments</li>
							<li>&middot;</li>
							<li>{post.shareCount} shares</li>
						</ul>

						<a
							href="#"
							className={classNames(tabPanel[variant].link, tabPanel[variant].link1)}
						/>
					</li>
				))}
			</ul>
		</Tab.Panel>
	)
}

const TabPanels = ({ nodes }) => {
	const categories = nodes
	return (
		<Tab.Panels className="mt-2">
			{Object.values(categories).map((posts, idx) => (
				<TabPanel key={idx} nodes={posts} />
			))}
		</Tab.Panels>
	)
}

const TabList = ({ nodes, variant = "default" }) => {
	const categories = nodes
	const { tabList } = useContext(ThemeContext)
	return (
		<Tab.List className={clsx(tabList[variant].className)}>
			{Object.keys(categories).map((category) => (
				<Tab
					key={category}
					className={({ selected }) =>
						classNames(
							tabList[variant].Tab.className,
							tabList[variant].Tab.className1,
							selected ? tabList[variant].Tab.selected : tabList[variant].Tab.notslected
						)
					}
				>
					{category}
				</Tab>
			))}
		</Tab.List>
	)
}

export const Tabs = ({ variant = "default", categories }) => {
	const { tabs } = useContext(ThemeContext)
	return (
		<div className={clsx(tabs[variant].className)}>
			<Tab.Group>
				<TabList nodes={categories} />
				<TabPanels nodes={categories} />
			</Tab.Group>
		</div>
	)
}
