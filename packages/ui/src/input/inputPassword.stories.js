import { InputPassword } from "./inputPassword"
import { Icon } from "@vactory/ui/icon"

export const inputPassword = () => {
	return (
		<div className="container">
			<InputPassword
				variant={"default"}
				label="Password"
				prefix={<Icon id="user" className="w-5 h-5" />}
				placeholder={"Password"}
				description="The password must contain at least 8 caracters"
			/>
		</div>
	)
}

export const roundedInputPassword = () => {
	return (
		<div className="container">
			<InputPassword
				variant={"rounded"}
				label="Password"
				prefix={<Icon id="user" className="w-5 h-5" />}
				placeholder={"Password"}
				description="The password must contain at least 8 caracters"
			/>
		</div>
	)
}

export default {
	title: "Primitives/inputPassword",
}
