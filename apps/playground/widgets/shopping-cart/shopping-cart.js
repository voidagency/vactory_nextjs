import { useState } from "react"
import { Layer } from "@vactory/ui/layer"
import { Heading } from "@vactory/ui/heading"
import { Icon } from "@vactory/ui/icon"
import { Link } from "@vactory/ui/link"
import { Text } from "@vactory/ui/text"

import { data as defaultData } from "./mock-data"

export const CartCard = ({ title, logo, amount, url }) => {
	return (
		<div className="flex flex-row items-center gap-8">
			<div className="text-white w-[120px] h-[120px] min-w-[120px] bg-gray-100 flex items-center justify-center">
				<img src={logo} alt={title} />
			</div>

			<div className="flex items-center justify-between flex-row">
				<div className="pr-8">
					<Text variant="subtitle2" as="h3" className="text-black mb-3">
						{title}
					</Text>
					<Text className="text-gray-500 text-base leading-6">{amount}</Text>
				</div>
				<Link href={url}>
					<Icon id="trash" width="24" height="24" className="text-error-400 text-2xl" />
				</Link>
			</div>
		</div>
	)
}

export const ShoppingCart = ({ data = defaultData }) => {
	const [showLayer, setShowLayer] = useState(true)
	return (
		<Layer
			isShow={showLayer}
			modal={false}
			overlayBackground="bg-gray-200"
			overlayOpacity="bg-opacity-40"
			overlay={true}
			position="top-right"
			onEsc={() => setShowLayer(false)}
			onClose={() => setShowLayer(false)}
			isShowing={showLayer}
			className="max-h-screen"
		>
			<div className="py-11 px-11 bg-white overflow-y-scroll">
				<Heading level="2" variant="6" className="text-black mb-10">
					{data.title}
				</Heading>
				<div className="flex flex-col gap-12 min-w-[457px]">
					{data.items.map((item) => {
						return <CartCard key={item.id} {...item} />
					})}
				</div>
			</div>
		</Layer>
	)
}
