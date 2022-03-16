import { deserialise } from "kitsu-core"
import { query, cleanup } from "./utils"

export const fetcher = async (url, config = {}) => {
	const params = config?.params || {}
	const jsonParams = query(params)

	return fetch(url + "?" + jsonParams, {
		method: "get",
		headers: new Headers({
			Accept: "application/vnd.api+json",
			"Content-Type": "application/vnd.api+json",
		}),
	})
		.then((res) => res.json())
		.then((res) => deserialise(res))
		.then((res) => cleanup(res))
}
