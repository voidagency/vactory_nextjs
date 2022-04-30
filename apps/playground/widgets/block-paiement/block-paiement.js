import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Icon } from "@vactory/ui/icon"
import { data as defaultdata } from "./mock-data"

const CardPaiement = ({ title, content, icon }) => {
	return (
		<div className="bg-white border-gray-200 border-2 border-solid p-[50px]">
			<div className="flex lg:items-center flex-col lg:flex-row gap gap-8 mb-6">
				<div className="bg-primary-50 text-primary-500 w-[72px] h-[72px] rounded-[8px] flex items-center justify-center">
					<Icon id={icon} width="41" height="41" />
				</div>
				<Heading level="3" variant="6">
					{title}
				</Heading>
			</div>
			<Text variant="body1" className="text-gray-500">
				{content}
			</Text>
		</div>
	)
}

export const BlockPaiement = ({ data = defaultdata }) => {
	return (
		<Container className="py-16">
			<Heading level="2" variant="4" className="mb-[70px] text-center">
				{data.title}
			</Heading>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{data.items.map((item) => {
					return <CardPaiement key={item.id} {...item} />
				})}
			</div>
		</Container>
	)
}
