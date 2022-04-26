import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const TemplateWrapper = ({ data, children }) => {
	return (
		<Container className="py-16">
			{data?.title && (
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
				>
					{data.title}
				</Heading>
			)}
			{data?.description && (
				<p className="mx-auto lg:mx-32 mb-10 tracking-wide antialiased text-xl font-sans">
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
