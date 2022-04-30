import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { CardCaution } from "../../components/card-caution/card-caution"

import { data as defaultData } from "./mock-data"

export const BlockCautions = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			<Heading level="2" variant="4" className="mb-[70px] text-center">
				{data.title}
			</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[76px]">
				{data.items.map((item) => {
					return <CardCaution key={item.id} {...item} />
				})}
			</div>
			<div className="text-center">
				<Button href={data.url}>{data.urlTitle}</Button>
			</div>
		</Container>
	)
}
