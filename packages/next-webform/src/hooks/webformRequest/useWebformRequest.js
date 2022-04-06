import { useCallback, useReducer } from "react"
import get from "lodash.get"
import qs from "qs"
import { useI18n as useTranslation } from "@vactory/next/i18n"
import reducer, { initialState } from "./reducer"
import { fetching, success, error } from "./actionCreators"
const Api = {}

export const useWebformRequest = () => {
	const { i18n } = useTranslation()
	const [state, webformRequestDispatch] = useReducer(reducer, initialState) // eslint-disable-line no-unused-vars

	const submitWebform = useCallback(
		async (data) => {
			webformRequestDispatch(fetching())
			try {
				const response = await Api.postRest(
					"_webform",
					qs.stringify(data),
					i18n.language,
					{
						headers: {
							"content-type": "application/x-www-form-urlencoded",
						},
					}
				)
				webformRequestDispatch(success(response))
				return response
			} catch (e) {
				const apiErrorMessage = get(e, "response.data.error")
				const errorMessage = apiErrorMessage ? apiErrorMessage : e.message
				webformRequestDispatch(error(errorMessage))
				return errorMessage
			}
		},
		[i18n.language]
	)

	return submitWebform
}
