const fetchMenu = async ({ name, locale }) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${locale}/_menus?menu_name=${name}`
	)
	if (!response.ok) {
		const message = `[fetchMenu] An error has occured: ${response.status}`
		throw new Error(message)
	}

	const data = await response.json()
	return data
}

const formatMenu = (name, data) => {
	return {
		name,
		items: data?.items || [],
	}
}

export const getMenu = async (name, locale) => {
	return fetchMenu({ name, locale }).then((res) => formatMenu(name, res))
}

export const getMenus = async (names = [], locale) => {
	const requests = names.map((name) =>
		fetchMenu({ name, locale }).then((res) => formatMenu(name, res))
	)
	return Promise.all(requests)
}
