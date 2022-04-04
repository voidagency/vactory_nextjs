import { useState, useContext } from "react"
import { Tab } from "@vactory/headlessui/tabs"
import { ThemeContext } from "../context/context"
import clsx from "clsx"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const TabPanel = ({ nodes, key, className = "", variant = "default" }) => {
	const posts = nodes

	const { tabPanel } = useContext(ThemeContext)
	return (
		<Tab.Panel
			key={key}
			className={classNames(
				clsx(tabPanel[variant].className, className),
				clsx(tabPanel[variant].className1, className)
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

export const Tabs = ({ variant = "default" }) => {
	let [categories] = useState({
		Recent: [
			{
				id: 1,
				title: "Does drinking coffee make you smarter?",
				date: "5h ago",
				commentCount: 5,
				shareCount: 2,
			},
			{
				id: 2,
				title: "So you've bought coffee... now what?",
				date: "2h ago",
				commentCount: 3,
				shareCount: 2,
			},
		],
		Popular: [
			{
				id: 1,
				title: "Is tech making coffee better or worse?",
				date: "Jan 7",
				commentCount: 29,
				shareCount: 16,
			},
			{
				id: 2,
				title: "The most innovative things happening in coffee",
				date: "Mar 19",
				commentCount: 24,
				shareCount: 12,
			},
		],
		Trending: [
			{
				id: 1,
				title: "Ask Me Anything: 10 answers to your questions about coffee",
				date: "2d ago",
				commentCount: 9,
				shareCount: 5,
			},
			{
				id: 2,
				title: "The worst advice we've ever heard about coffee",
				date: "4d ago",
				commentCount: 1,
				shareCount: 2,
			},
		],
	})

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
