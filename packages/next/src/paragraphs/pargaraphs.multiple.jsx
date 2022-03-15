import React from "react"
import {
	ParagraphsMultipleAccordion,
	ParagraphsMultipleTab,
	ParagraphsTemplate,
} from "@vactory/next"

export const ParagraphsMultiple = ({ type = "tab", tabs = [], hasAMP, ...rest }) => {
	const Display = type === "tab" ? ParagraphsMultipleTab : ParagraphsMultipleAccordion
	const components = tabs.map((p, key) => {
		const { field_tab_templates, field_vactory_title, ...paragraphRest } = p
		const widgets = field_tab_templates.map((widget) => {
			const widget_id = widget.widget_id
			const widget_data = JSON.parse(widget.widget_data)
			widget_data["paragraph_meta"] = paragraphRest

			return (
				<div key={`${widget_id}_${key}`} data-df-id={widget_id}>
					<ParagraphsTemplate id={widget_id} hasAMP={hasAMP} settings={widget_data} />
				</div>
			)
		})

		return {
			...paragraphRest,
			_title: field_vactory_title,
			_widgets: widgets,
		}
	})

	return <Display items={components} {...rest} />
}
