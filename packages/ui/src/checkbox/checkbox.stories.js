import CheckboxInput from "./checkbox"

export const defaultCheckbox = () => {
	return (
		<div className="container">
			<CheckboxInput label="Name" id="name" disabled={false} checked={true} />
		</div>
	)
}

export const disabledCheckbox = () => {
	return (
		<div className="container">
			<CheckboxInput label="Name" id="name" disabled={true} checked={true} />
		</div>
	)
}

export default {
	title: "Primitives/checkbox",
}
