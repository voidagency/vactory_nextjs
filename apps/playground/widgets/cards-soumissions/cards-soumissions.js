import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Button } from "@vactory/ui/button"
import { CardVehicule } from "../../components/card-vehicule/card-vehicule"

import { data as defaultData } from "./mock-data"

export const CardsSoumissions = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			{data.title && (
				<Heading level="2" variant="4" className="text-center mb-14 md:mb-24">
					{data.title}
				</Heading>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{data.items.map((item) => {
					return <CardVehicule key={item.id} {...item} />
				})}
			</div>
			<div className="flex flex-col items-end mt-14 w-full">
				<div className="bg-gray-500 py-5 px-8 text-white mb-7 inline-flex flex-col w-full md:max-w-[384px]">
					<Text variant="subtitle1" className="mb-4">
						{data.amountTotaltitle}
					</Text>
					<p className="text-[40px] leading-[56px] font-semibold -tracking-[1px]">
						{data.amountTotal}
					</p>
				</div>
				{(data.url || data.url2) && (
					<div className="flex flex-row md:justify-end gap-8 w-full md:w-auto">
						{data.url && data.urlTitle && (
							<Button
								variant="secondary"
								href={data.urlTitle}
								className="w-full md:w-auto"
							>
								{data.urlTitle}
							</Button>
						)}
						{data.url2 && data.url2Title && (
							<Button href={data.url2} className="w-full md:w-auto">
								{data.url2Title}
							</Button>
						)}
					</div>
				)}
			</div>
		</Container>
	)
}
