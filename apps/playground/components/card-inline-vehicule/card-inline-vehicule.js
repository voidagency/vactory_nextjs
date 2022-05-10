import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

export const CardInlineVehicule = ({ logo, title, reference, date, urlTitle, url }) => {
	return (
		<div className="text-gray-900 flex flex-col md:flex-row hover:text-primary-500 ease-in transition transition-all duration-300">
			<div className="min-w-full md:min-w-[384px] h-[343px] md:h-[323px] bg-gray-100 flex items-center justify-center">
				<img src={logo} alt={title} />
			</div>
			<div className="pt-14 md:py-4 md:px-[30px] w-full">
				{reference && (
					<p className="text-gray-900 text-xs leading-[21px] mb-5 px-[14px] py-1 bg-gray-300 rounded-full inline-block">
						<span>N°</span>
						{reference}
					</p>
				)}
				<Heading level={3} variant="4" className="mb-8">
					{title}
				</Heading>
				<div className="bg-primary-25 inline-flex items-center gap-[28px] md:gap-[30px] py-6 md:py-8 px-[30px] mb-8">
					<Icon
						id="date"
						width="56"
						height="56"
						className="text-gray-500 text-[35px] md:text-[56px]"
					/>
					<div>
						<p className="font-semibold text-gray-900 text-base leading-[25px] md:text-xl md:leading-[30px] mb-[3px]">
							Date de clôture
						</p>
						<p className="text-gray-500 text-sm leading-[21px] md:text-base md:leading-6">
							{date}
						</p>
					</div>
				</div>
				<div>
					<Button href={url} className="w-full md:w-auto md:min-w-[278px]">
						{urlTitle}
					</Button>
				</div>
			</div>
		</div>
	)
}
