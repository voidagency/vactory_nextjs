import { getProviders, getCsrfToken } from "next-auth/react"
import { getMenus } from "@vactory/next/menus/handler"
import { getEnabledMenus, generateTranslationForStaticRoute } from "@vactory/next/utils"
import { getTranslations } from "@vactory/next/i18n/handler"
import csrf from "@vactory/next/csrf"
import { getSession } from "next-auth/react"

export async function getUserServerSideProps(context) {
	const enabledMenus = getEnabledMenus()
	const { slug, ...query } = context.query
	const { locale } = context
	const joinedSlug = Array.isArray(slug) ? slug.join("/") : slug
	const i18n = await getTranslations(locale)
	const menus = await getMenus(enabledMenus, locale)
	const session = await getSession({ req: context.req })
	let providers = await getProviders()
	providers = Object.keys(providers)
		.filter((key) => !key.includes("credentials") && !key.includes("one-time-login"))
		.reduce((cur, key) => {
			return Object.assign(cur, { [key]: providers[key] })
		}, {})

	if (
		session &&
		["login", "register", "reset-password", "one-time-login"].includes(joinedSlug)
	) {
		return {
			redirect: {
				destination: `/${locale}/user/profile`,
				permanent: false,
			},
		}
	}

	if ("login" === joinedSlug) {
		return {
			props: {
				node: {
					title: "Login page",
					type: "login",
					providers: providers, // @todo: move outisde node
					csrfToken: await getCsrfToken(context), // @todo: move outisde node
					internal_extra: {
						translations: generateTranslationForStaticRoute(`/user/${joinedSlug}`),
					},
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("register" === joinedSlug) {
		await csrf(context.req, context.res)
		return {
			props: {
				node: {
					title: "Register page",
					type: "register",
					providers: providers,
					csrfToken: context.req.csrfToken(),
					internal_extra: {
						translations: generateTranslationForStaticRoute(`/user/${joinedSlug}`),
					},
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("reset-password" === joinedSlug) {
		await csrf(context.req, context.res)
		return {
			props: {
				node: {
					title: "Reset password page",
					type: "reset-password",
					providers: providers,
					csrfToken: context.req.csrfToken(),
					internal_extra: {
						translations: generateTranslationForStaticRoute(`/user/${joinedSlug}`),
					},
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("one-time-login" === joinedSlug) {
		// Validate query strings.
		if (!query?.uid || !query?.timestamp || !query?.hash) {
			throw new Error("[one-time-login] Invalid or missing query string")
		}

		return {
			props: {
				node: {
					title: "One time login",
					type: "one-time-login",
					internal_extra: {
						translations: generateTranslationForStaticRoute(`/user/${joinedSlug}`),
					},
				},
				params: Object.keys(query).length > 0 ? query : null,
				i18n: i18n,
				menus: menus,
				locale: locale,
			},
		}
	}

	if ("profile" === joinedSlug || "profile-password" === joinedSlug) {
		if (!session) {
			return {
				redirect: {
					destination: `/${locale}/user/login`,
					permanent: false,
				},
			}
		}

		await csrf(context.req, context.res)
		return {
			props: {
				node: {
					title: "Profile page",
					type: "profile",
					internal_extra: {
						translations: generateTranslationForStaticRoute(`/user/${joinedSlug}`),
					},
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
