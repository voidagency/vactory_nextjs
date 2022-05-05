import { Textarea } from "./textarea"

export const defaultTextarea = () => {
	return (
		<div className="container">
			<Textarea variant="default" placeholder="Textarea placeholder" rows={5}></Textarea>
		</div>
	)
}

export const roundedTextarea = () => {
	return (
		<div className="container">
			<Textarea variant="rounded" placeholder="Textarea placeholder" rows={5}></Textarea>
		</div>
	)
}

export const resizedTextarea = () => {
	return (
		<div className="container">
			<Textarea variant="rounded" placeholder="Textarea placeholder" rows={5}></Textarea>
		</div>
	)
}

export const unresizedTextarea = () => {
	return (
		<div className="container">
			<Textarea resize={true} placeholder="Textarea placeholder" rows={5}></Textarea>
		</div>
	)
}

export const TextareaWithCounter = () => {
	return (
		<div className="container">
			<Textarea
				placeholder="Textarea placeholder"
				rows={5}
				showCounter={true}
				maxLength={600}
			></Textarea>
		</div>
	)
}

export default {
	title: "Primitives/textarea",
}
