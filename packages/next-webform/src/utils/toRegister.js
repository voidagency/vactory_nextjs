export const toRegister = (fieldName, validation, values, t) => {
	let register = {}

	if (validation?.sameAs) {
		register.validate = {}
	}

	if (validation?.required) {
		register.required = validation?.requiredError
			? t(validation?.requiredError)
			: t('Webform: Le champ "{{fieldName}}" est requis.', { fieldName })
	}

	if (validation?.pattern) {
		let match = validation.pattern.match(new RegExp("^/(.*?)/([gimy]*)$"))
		if (match === null) {
			match = [null, validation.pattern, ""]
		}
		const regex = new RegExp(match[1], match[2])
		register.pattern = {
			value: regex,
			message: validation?.patternError
				? t(validation.patternError)
				: t('Webform: Le champ "{{fieldName}}" est invalid.', { fieldName }),
		}
	}

	if (validation?.sameAs && values[validation?.sameAs]) {
		const message = validation?.sameAsError
			? t(validation.sameAsError)
			: t('Webform: Le champ "{{fieldName}}" est invalid.', { fieldName })
		register.validate.sameAs = (value) => value === values[validation?.sameAs] || message
	}

	return register
}
