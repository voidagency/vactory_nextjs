import { Link } from "@vactory/ui/link"
import { Icon } from "@vactory/ui/icon"

export const CardDownload = ({ title, url }) => {
	return (
		<div className="bg-primary-25 border border-primary-300 hover:bg-primary-100 rounded-[4px] p-4 text-center transition-all ease-in duration-300 cursor-pointer">
			<h3 className="text-primary-700 text-sm leading-5 mb-1">{title}</h3>
			<p className="mb-3 text-xs leading-[18px] text-primary-500">Telecharger</p>
			<Link
				href={url}
				className="text-primary-500 bg-primary-100 rounded-full inline-flex items-center justify-center w-10 h-10 mx-auto"
			>
				<Icon id="cloud-download" width="20" height="20" />
			</Link>
		</div>
	)
}
