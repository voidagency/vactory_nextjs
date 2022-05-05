import CheckboxInput from "./checkboxV2"

export const defaultCheckboxInput = () => {
	return (
		<div className="container">
			<CheckboxInput disabled={false} checked={false} label="Checkbox" name="checkbox" />
		</div>
	)
}

export const checkedCheckboxInput = () => {
	return (
		<div className="container">
			<CheckboxInput disabled={false} checked={true} label="Checkbox" name="checkbox" />
		</div>
	)
}

export const disabledCheckboxInput = () => {
	return (
		<div className="container">
			<CheckboxInput disabled={true} checked={false} label="Checkbox" name="checkbox" />
		</div>
	)
}

export const checkedAndDisabledCheckboxInput = () => {
	return (
		<div className="container">
			<CheckboxInput disabled={true} checked={true} label="Checkbox" name="checkbox" />
		</div>
	)
}

export default {
	title: "Primitives/CheckboxV2",
}
