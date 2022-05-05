import { useRef } from "react"
import InputRadio from "./radioV2"

export const defaultRadioButton = () => {
	const a = useRef()
	return (
		<div className="container">
			<InputRadio
				ref={a} //this where you could access to the selected value after you finish the form filling
				options={[
					{ label: "Casablanca", id: "casablanca" },
					{ label: "Settat", id: "settat" },
					{ label: "Bouznika", id: "bouznika" },
				]}
				//onChange={handleRadioInputChanges} => this gives the updated input value
			/>
		</div>
	)
}

export default {
	title: "Primitives/inputRadioV2",
}
