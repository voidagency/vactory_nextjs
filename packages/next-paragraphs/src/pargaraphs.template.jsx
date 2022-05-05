import React from "react"
import { Widgets } from "@vactory/next"
import { Icon } from "@vactory/ui/icon"

const Alert = ({ children }) => (
	<div className="max-w-4xl mx-auto bg-yellow-50 ltr:border-l-4 rtl:border-r-4 border-yellow-400 p-4 my-2.5">
		<div className="flex">
			<div className="flex-shrink-0">
				<Icon id="exclamation-circle" width="24" height="24" />
			</div>
			<div className="ltr:ml-3 rtl:mr-3">
				<p className="text-sm text-yellow-700">{children}</p>
			</div>
		</div>
	</div>
)

const ParagraphsTemplate = (props) => {
	const { id, settings, hasAMP = false, ...rest } = props
	//   let Component = hasAMP ? WidgetsAmp[id] : Widgets[id]
	let Component = Widgets[id]

	if (!Component) {
		return (
			<Alert role="alert">
				Caught an error. Template {hasAMP ? "AMP " + id : id} is not mapped!
			</Alert>
		)
	}

	return <Component data={settings} {...rest} />
}

export default ParagraphsTemplate
