import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Icon } from "@vactory/ui/icon"
import { Button } from "@vactory/ui/button"

import { data as defaultData } from "./mock-data"

const Card = ({
	logo,
	title,
	reference,
	vitesse,
	carburant,
	km,
	date,
	panierTitle,
	panierUrl,
	readMoreUrl,
	readMoreTitle,
}) => {
	return (
		<div className="bg-gray-50 text-gray-900 hover:text-primary-500 ease-in transition transition-all duration-300 cursor-pointer">
			<div className="h-[200px] bg-gray-200 flex items-center justify-center">
				<img src={logo} className="" />
			</div>
			<div className="p-8">
				{reference && (
					<p className="text-gray-900 text-xs leading-[21px] px-[14px] py-1 bg-gray-300 rounded-full inline-block">
						<span>N°</span>
						{reference}
					</p>
				)}
				<Heading level={6} className="mb-6">
					{title}
				</Heading>
				<div className="flex flex-row flex-wrap items-center gap-3 text-gray-500 text-sm leading-[21px] mb-[27px]">
					{vitesse && (
						<span className="inline-flex gap-1 items-center">
							<Icon id="academic-cap-solid" width="15" height="15" />
							{vitesse}
						</span>
					)}
					{km && (
						<span className="inline-flex gap-1 items-center">
							<Icon id="academic-cap-solid" width="15" height="15" />
							{km}
						</span>
					)}
					{carburant && (
						<span className="inline-flex gap-1 items-center">
							<Icon id="academic-cap-solid" width="15" height="15" />
							{carburant}
						</span>
					)}
					{date && (
						<span className="inline-flex gap-1 items-center">
							<Icon id="academic-cap-solid" width="15" height="15" />
							{date}
						</span>
					)}
				</div>
				<div>
					<Button variant="primary" className="mb-6 w-full text-center" href={panierUrl}>
						{panierTitle}
					</Button>
					<Button variant="secondary" className="w-full text-center" href={readMoreUrl}>
						{readMoreTitle}
					</Button>
				</div>
			</div>
		</div>
	)
}

export const CardVehicule = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			<Heading level="3" className="text-center text-gray-900 mb-[52px]">
				Offre populaires
			</Heading>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => {
					return <Card key={item.id} {...item} />
				})}
			</div>
		</Container>
	)
}
