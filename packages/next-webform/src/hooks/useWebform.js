import { useI18n as useTranslation } from "@vactory/next/i18n"

const data = {
	webforms: [],
}

export const useWebform = (id) => {
	const { i18n } = useTranslation()
	const menu = data.webforms.find(
		(item) => item.id === id && item.locale === i18n.language
	)
	return menu
}
