import { createContext, useState, useRef, useEffect } from "react"
import { getDefaultLanguage } from "../lib/utils"
import dlv from "dlv"
import tmpl from "templite"

function rosetta(obj) {
	var locale = "",
		tree = obj || {}

	return {
		set(lang, table) {
			tree[lang] = Object.assign(tree[lang] || {}, table)
		},

		locale(lang) {
			return (locale = lang || locale)
		},

		table(lang) {
			return tree[lang]
		},

		t(key, params, lang) {
			if (
				process.env.NODE_ENV !== "production" &&
				val == dlv(tree[lang || locale], key)
			) {
				console.warn(
					`[i18n] Missing the "${[].concat(key).join(".")}" key within the "${
						lang || locale
					}" dictionary`
				)
			}

			var val = dlv(tree[lang || locale], key, key)
			if (typeof val === "function") return val(params)
			if (typeof val === "string") return tmpl(val, params)
			return val
		},
	}
}

const i18n = rosetta()
export const defaultLanguage = getDefaultLanguage()

export const I18nContext = createContext()

// default language
i18n.locale(defaultLanguage)

export const I18nProvider = ({ children, locale, lngDict }) => {
	const activeLocaleRef = useRef(locale || defaultLanguage)
	const [, setTick] = useState(0)
	const firstRender = useRef(true)

	const i18nWrapper = {
		activeLocale: activeLocaleRef.current,
		t: (...args) => i18n.t(...args),
		locale: (l, dict) => {
			i18n.locale(l)
			activeLocaleRef.current = l
			if (dict) {
				i18n.set(l, dict)
			}
			// force rerender to update view
			setTick((tick) => tick + 1)
		},
	}

	// for initial SSR render
	if (locale && firstRender.current === true) {
		firstRender.current = false
		i18nWrapper.locale(locale, lngDict)
	}

	// when locale is updated
	useEffect(() => {
		if (locale) {
			i18nWrapper.locale(locale, lngDict)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lngDict, locale])

	return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
}
