import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"

export const Container2 = ({ data, containerTheme }) => {
	return (
		<Container layout="full" id="container2" className={containerTheme.wrapper}>
			<div className="Container px-4 lg:px-32">
				<div className="grid md:grid-cols-2">
					<div className="md:order-last mt-16">
						<Heading level={2} className={containerTheme.header}>
							{data.title}
						</Heading>
						<p className={containerTheme.paragraph}>{data.paragraph}</p>
					</div>
					{data.image && (
						<div className={containerTheme.image}>{data.image && data.image}</div>
					)}
				</div>
				{data.button && (
					<div className={containerTheme.Button}>
						<Button outline="true" size="large">
							{data.button}
						</Button>
					</div>
				)}
			</div>
		</Container>
	)
}
