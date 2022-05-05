import InputRange from "./inputRange"

export const defaultInputRange = () => {
	return (
		<div className="container">
			<InputRange thumb={"defaultThumb"} min={0} max={30} />
		</div>
	)
}

export const roundedInputRange = () => {
	return (
		<div className="container">
			<InputRange thumb={"roundedThumb"} min={0} max={30} />
		</div>
	)
}

export default {
	title: "Primitives/inputRange",
}
