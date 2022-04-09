import { Icon } from "@vactory/ui/icon"

export const IconHref = ({ media }) => {
	return (
		<a href={media.href} className="flex bg-black">
			<Icon id={media.id} className="h-6 w-6 text-indigo-500" aria-hidden="true" />
		</a>
	)
}
