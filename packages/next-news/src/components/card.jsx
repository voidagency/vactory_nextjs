import { Card } from "@vactory/ui/card"
import Image from "next/image"

const CardImage = ({ image, alt = "", ...rest }) => {
	return (
		<div style={{ position: "relative", height: "250px" }}>
			<Image src={image?._default} alt={alt} layout="fill" {...rest} />
		</div>
	)
}

export const NewsCard = ({ title, excerpt, image, url, category, date }) => {
	return (
		<Card
			title={title}
			excerpt={excerpt}
			image={<CardImage image={image} alt={title} />}
			url={url}
			category={category}
			date={date}
		/>
	)
}
