import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"

export const BlogImgContainer = ({ data, themeContainer, containerId }) => {
	return (
		<Container layout="full" id={containerId} className={themeContainer.wrapper}>
			<div className={themeContainer.container.wrapper}>
				<div className={themeContainer.container.grid.wrapper}>
					<div className={themeContainer.container.grid.gridCol1.wrapper}>
						<Heading level={2} className={themeContainer.container.grid.gridCol1.header}>
							{data.title}
						</Heading>
						<p className={themeContainer.container.grid.gridCol1.paragraph}>
							{data.paragraph}
						</p>
						{data.button && (
							<div className={themeContainer.container.grid.gridCol1.Button}>
								<Button outline="true" size="large">
									{data.button}
								</Button>
							</div>
						)}
					</div>
					<div className={themeContainer.container.grid.gridCol2.wrapper}>
						{data.image && <div className="">{data.image && data.image}</div>}
					</div>
				</div>
			</div>
		</Container>
	)
}
