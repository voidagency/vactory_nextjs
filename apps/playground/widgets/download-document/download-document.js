import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { CardDownload } from "../../components/card-download/card-download"
import { data as defaultData } from "./mock-data"

export const DownloadDocument = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			<Heading level="2" variant="4" className="mb-[70px] text-center">
				{data.title}
			</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[88px] last:mb-0">
				{data.items.map((item) => {
					return <CardDownload key={item.id} {...item} />
				})}
			</div>
			{data.url && data.urlTitle && (
				<div className="text-center">
					<Button href={data.url}>{data.urlTitle}</Button>
				</div>
			)}
		</Container>
	)
}
