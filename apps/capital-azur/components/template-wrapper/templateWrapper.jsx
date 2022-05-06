import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

export const TemplateWrapper = ({ data, children }) => {
	return (
		<Container className="relative py-6 md:py-16">
			{data?.title && (
				<div className="flex flex-row">
					<Icon
						id="minus"
						className="mb-4 md:mb-10 mt-4 md:mt-10 text-blue-1000"
						width="60"
						height="30"
					/>
					<Heading
						level={2}
						className={`text-left mb-4 md:mb-10 mt-4 md:mt-10 ml-2 tracking-wide `}
					>
						{data.title}
					</Heading>
				</div>
			)}
			{data?.description && (
				<p className="mx-auto lg:mx-32 mb-10 tracking-wide antialiased text-md text-gray-500 font-sans">
					{data.description}
				</p>
			)}
			<div className="">
				{children}
				{data?.Button && (
					<div className="flex items-center justify-center mt-12 ">
						<Button icon={data.buttonIcon}>{data.button}</Button>
					</div>
				)}
			</div>
		</Container>
	)
}
