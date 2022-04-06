import { useFormContext } from "react-hook-form"

export const useErrorMessage = (name, label) => {
	const { errors } = useFormContext()
	const error = errors[name]
	if (!error) return undefined

	const message = error.message

	if (message) return message.replace(name, label || name)
	return "Field validation failed"
}
