import { InputRadio } from "./inputRadio"

export const inputRadio = () => {
	return (
		<InputRadio
			name="cities"
			options={[
				{ value: "Casablanca", key: "casablanca" },
				{ value: "Settat", key: "settat" },
				{ value: "Bouznika", key: "bouznika" },
			]}
		/>
	)
}

export default {
	title: "Primitives/inputRadio",
}
