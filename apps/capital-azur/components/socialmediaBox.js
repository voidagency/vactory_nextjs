import { Link } from "@vactory/ui/link"
import { Icon } from "@vactory/ui/icon"

const socialsmedia = [
	{ id: "youtube-solid", href: "#" },
	{ id: "twitter-solid", href: "#" },
	{ id: "linkedin-solid", href: "#" },
	{ id: "facebook-solid", href: "#" },
]

export const MediaBox = () => {
	return (
		<div className=" w-full py-10">
			<div className="space-y-1 w-full mx-auto bg-indigo-500 rounded-md">
				{socialsmedia.map((media, index) => {
					return (
						<Link key={index} href={media.href}>
							<Icon
								id={media.id}
								className="h-6 w-6 text-indigo-500"
								aria-hidden="true"
							/>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
