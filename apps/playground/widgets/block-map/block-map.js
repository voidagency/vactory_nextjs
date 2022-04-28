import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Icon } from "@vactory/ui/icon"
import { Link } from "@vactory/ui/link"
import { data as defaultData } from "./mock-data"

export const BlockMap = ({ data = defaultData }) => {
	return (
		<Container className="py-16 grid grid-cols-1 gap-5 md:gap-[59px] sm:grid-cols-2 items-center">
			<div>
				<img src={data.image} alt={data.image_alt} />
			</div>
			<div>
				<Heading level="3" variant="5" className="mb-[29px]">
					{data.meeting_title}
				</Heading>
				<Text className="text-gray-900 text-sm leading-[21px] mb-[23px] gap-[18px] flex items-center">
					<Icon id="phone" width="24" height="24" className="text-primary-500" />
					<Link href={"tel:" + data.tel}>{data.tel}</Link>
				</Text>
				<Text className="text-gray-900 text-sm leading-[21px] mb-[23px] gap-[18px] flex items-center">
					<Icon id="mail" width="24" height="24" className="text-primary-500" />
					<Link href={"mailto:" + data.email}>{data.email}</Link>
				</Text>
				<Heading level="3" variant="5" className="mb-[29px]">
					{data.adressTitle}
				</Heading>
				<Text className="text-gray-900 text-sm leading-[21px] mb-[23px] gap-[18px] flex items-center">
					<Icon
						id="location-marker"
						width="24"
						height="24"
						className="text-primary-500"
					/>
					{data.adress}
				</Text>
			</div>
		</Container>
	)
}
