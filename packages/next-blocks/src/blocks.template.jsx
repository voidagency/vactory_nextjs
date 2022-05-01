import React from "react"
import { Widgets } from "@vactory/next"

export const BlocksTemplate = ({ widget, ...rest }) => {
	const { widget_id, widget_data } = widget
	let Component = Widgets[widget_id]

	if (!Component) {
		return (
			<div className="alert alert-danger" role="alert">
				Caught an error. Block Template {widget_id} is not mapped!
			</div>
		)
	}

	return <Component data={JSON.parse(widget_data)} {...rest} />
}
