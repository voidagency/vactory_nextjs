import React from "react"
import { parse } from "svgson"
import toast from "cogo-toast"
import copy from "copy-to-clipboard"
import { withKnobs, text } from "@storybook/addon-knobs"
import iconsRaw from "!!raw-loader!../../public/icons.svg"
import { Icon } from "./icon"

const copyToClipboard = (name) => {
	copy(name)
	toast.success(`Copied '${name}' to clipboard`, {
		position: "bottom-center",
	})
}

export const Default = () => {
	let filter = text("search", "")
	const [icons, setIcons] = React.useState([])

	React.useEffect(() => {
		const iconsList = []
		parse(iconsRaw).then((json) => {
			for (const [key, value] of Object.entries(json)) {
				value.children.forEach((element) => {
					if (element.attributes["xlink:href"]) {
						const iconName = element.attributes["xlink:href"].replace("#", "")
						iconsList.push(iconName)
					}
				})
			}
			setIcons(iconsList)
		})
	}, [])

	return (
		<div>
			<ul
				className="grid gap-8 text-center text-xs leading-4 col-start-1 row-start-2"
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))",
				}}
			>
				{icons.map((iconName, key) => {
					if (filter.length > 0 && iconName.indexOf(filter) <= 0) {
						return null
					}
					return (
						<li key={key} className="relative flex flex-col-reverse">
							<h3 className="truncate">{iconName}</h3>
							<div className="relative mb-3 h-24">
								<button
									type="button"
									style={{
										cursor: "pointer",
									}}
									onClick={() => copyToClipboard(iconName)}
									className="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 cursor-auto"
								>
									<Icon id={iconName} width="34" height="34" />
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default {
	title: "Primitives/Icon",
	decorators: [withKnobs],
}
