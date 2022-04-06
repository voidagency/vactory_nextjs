import { useState, useContext } from "react"
import { Switch } from "@vactory/headlessui/switch"
import { ThemeContext } from "../context/context"
import clsx from "clsx"

export const Toggle = ({ variant = "default", className = "" }) => {
	const [enabled, setEnabled] = useState(false)
	const { toggle } = useContext(ThemeContext)

	return (
		<div className={(clsx(toggle[variant].className), className)}>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? toggle[variant].switch.enabled : toggle[variant].switch.disabled
				} ${toggle[variant].switch.className}`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled
							? toggle[variant].switch.span.enabled
							: toggle[variant].switch.span.disabled
					} ${toggle[variant].switch.span.className}`}
				/>
			</Switch>
		</div>
	)
}
