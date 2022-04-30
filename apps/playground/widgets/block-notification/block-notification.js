import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Link } from "@vactory/ui/link"
import { Icon } from "@vactory/ui/icon"

import { data as defaultData } from "./mock-data"

export const CardNotification = ({ reference, title, time, url, urlTitle }) => {
	return (
		<div className="bg-gray-100 py-6 px-10 w-full max-w-[800px] mx-auto">
			{reference && (
				<p className="text-gray-900 text-xs leading-[21px] mb-6 px-[14px] py-1 bg-gray-300 rounded-full inline-block">
					<span>N°</span>
					{reference}
				</p>
			)}
			<Text as="h2" variant="subtitle2" className="text-black mb-4 font-semibold">
				{title}
			</Text>
			<p className="text-[#7E8082] mb-[30px]">{time}</p>
			<Link
				className="text-primary-500 text-sm leading-[21px] inline-flex items-center gap-2"
				href={url}
			>
				{urlTitle}
				<Icon id="arrow-right" width="24" height="24" />
			</Link>
		</div>
	)
}

export const BlockNotification = ({ data = defaultData }) => {
	return (
		<Container>
			<Heading level="2" variant="3" className="text-center mb-[70px]">
				{data.title}
			</Heading>
			<div className="grid grid-cols-1 gap-8">
				{data.items.map((item) => {
					return <CardNotification key={item.id} {...item} />
				})}
			</div>
		</Container>
	)
}
