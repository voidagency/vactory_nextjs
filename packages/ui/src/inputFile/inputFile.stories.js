import InputFile from "./inputFile"
import { Icon } from "@vactory/ui/icon"

export const defaultInputFile = () => {
	return (
		<div className="container">
			<InputFile
				variant="default"
				label={"File"}
				description={"iliu iuoiuoiuoiu oui iou oiu oiu oulu pou poopi"}
				sufix={<Icon id="user" className="w-5 h-5 text-black" />}
			/>
		</div>
	)
}

export const roundedInputFile = () => {
	return (
		<div className="container">
			<InputFile
				variant="rounded"
				label={"File"}
				description={"iliu iuoiuoiuoiu oui iou oiu oiu oulu pou poopi"}
				sufix={<Icon id="user" className="w-5 h-5 text-black" />}
			/>
		</div>
	)
}

export default {
	title: "Primitives/inputFile",
}
