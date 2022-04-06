import React, { useCallback } from "react"
import get from "lodash.get"
import qs from "qs"
import { useI18n as useTranslation } from "@vactory/next/i18n"
const Api = {}

export const useWebformSubmitter = () => {
	const { i18n } = useTranslation()
	const [webformFetch, setWebformFetch] = React.useState({
		status: "idle",
		response: null,
		error: null,
	})

	const handleWebformRemoteSubmit = useCallback(
		(data) => {
			if (typeof data === "undefined") {
				throw new Error("handleWebformRemoteSubmit missing data param")
			}

			setWebformFetch({
				status: "loading",
				response: null,
				error: null,
			})

			Api.postRest("_webform", qs.stringify(data), i18n.language, {
				headers: {
					"content-type": "application/x-www-form-urlencoded",
				},
			})
				.then(function (response) {
					setWebformFetch({
						status: "resolved",
						response: response.data,
						error: webformFetch.error,
					})
				})
				.catch(function (error) {
					const apiErrorMessage = get("response.data.error", error)
					const errorMessage = apiErrorMessage ? apiErrorMessage : error.message

					setWebformFetch({
						status: "rejected",
						response: webformFetch.response,
						error: errorMessage,
					})
				})
		},
		[webformFetch.error, webformFetch.response, i18n]
	)

	return {
		handleWebformRemoteSubmit,
		webformFetch,
	}
}
