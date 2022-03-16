import { getProviders, getCsrfToken } from "next-auth/react"
import { getMenus } from "@vactory/next/server/menus"
import { getEnabledMenus } from "@vactory/next/utils"
import { getTranslations } from "@vactory/next/server/translations"

export async function getUserServerSideProps(context) {
	const enabledMenus = getEnabledMenus()
	const { slug, ...query } = context.query
	const { locale } = context
	let joinedSlug = Array.isArray(slug) ? slug.join("/") : slug

	let i18n = await getTranslations(locale)
	let menus = await getMenus(enabledMenus, locale)

	if ("login" === joinedSlug) {
		return {
			props: {
				node: {
					title: "Login page",
					type: "login",
					providers: await getProviders(),
					csrfToken: await getCsrfToken(context),
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("register" === joinedSlug) {
		const csrf = (await import("../../next/src/csrf.js")).default
		await csrf(context.req, context.res)
		return {
			props: {
				node: {
					title: "Register page",
					type: "register",
					providers: await getProviders(),
					csrfToken: context.req.csrfToken(),
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("reset-password" === joinedSlug) {
		// const csrf = (await import("../../next/src/csrf.js")).default
		// await csrf(context.req, context.res)
		return {
			props: {
				node: {
					title: "Reset password page",
					type: "reset-password",
					providers: await getProviders(),
					// csrfToken: context.req.csrfToken(),
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	return {
		notFound: true,
	}
}
