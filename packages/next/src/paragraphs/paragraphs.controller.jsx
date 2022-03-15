import React from "react"
import classNames from "classnames"
import {
	ParagraphsContainer,
	ParagraphsTemplate,
	ParagraphsMultiple,
} from "@vactory/next"

export const ParagraphsController = (props) => {
	const { hasAMP = false } = props
	const {
		type,
		paragraph_identifier,
		paragraph_container,
		paragraph_section,
		paragraph_css_class,
		paragraph_background_color = null,
		field_vactory_component = null,
		field_vactory_paragraph_tab = null,
		paragraph_background_image = null,
	} = props.data

	const backgroundColor = paragraph_background_color
	const backgroundImage = paragraph_background_image
		? `url(${paragraph_background_image.thumbnail.uri.value._default})`
		: null

	let childComponent

	if (type === "paragraph--vactory_component" && field_vactory_component) {
		childComponent = (
			<div data-df-id={field_vactory_component.widget_id}>
				<ParagraphsTemplate
					id={field_vactory_component.widget_id}
					hasAMP={hasAMP}
					settings={JSON.parse(field_vactory_component.widget_data)}
				/>
			</div>
		)
	} else if (
		type === "paragraph--vactory_paragraph_multi_template" &&
		field_vactory_paragraph_tab
	) {
		childComponent = (
			<ParagraphsMultiple
				type={props.data.field_multi_paragraph_type}
				title={props.data.field_vactory_title}
				introduction={props.data.field_paragraph_introduction}
				cta={props.data.field_paragraphs_cta}
				tabs={field_vactory_paragraph_tab}
				hasAMP={hasAMP}
			/>
		)
	}

	return (
		<ParagraphsContainer
			id={paragraph_identifier}
			layout={paragraph_container}
			state={paragraph_section}
			style={{
				backgroundColor: backgroundColor,
				backgroundImage: backgroundImage,
			}}
			className={classNames("paragraph", type, paragraph_css_class)}
		>
			{childComponent}
		</ParagraphsContainer>
	)
}
