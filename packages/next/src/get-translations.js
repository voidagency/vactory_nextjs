import { isEmpty } from "./utils";

const fetchTranslations = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/_translations`
	);
	if (!response.ok) {
		const message = `[fetchTranslations] An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const data = await response.json();
	return data;
};

const getTranslationsByLocale = (resources, locale) => {
	return resources.find((resource) => resource.locale === locale)?.translations || [];
};

const formatTranslationsForNextIntlProvider = (resources = []) => {
	const obj = {};
	resources.forEach((element) => {
		obj[element.source] = element.translation;
	});
	return obj;
};

export const getTranslations = async (locale) => {
	if (isEmpty(locale)) {
		const message = `[getTranslations] An error has occured: Missing locale parameter`;
		throw new Error(message);
	}
	let translations = {};
	const response = await fetchTranslations();
	return new Promise((resolve, reject) => {
		try {
			const resources = getTranslationsByLocale(response.resources, locale);
			translations = formatTranslationsForNextIntlProvider(resources);
		} catch (error) {
			reject(error);
		}
		resolve(translations);
	});
};
