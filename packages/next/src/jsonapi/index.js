import { deserialise } from "kitsu-core"
// import axios from "axios"
import { query, cleanup } from "../utils"

export const fetcher = async (url, config = {}) => {
  const requestUrl = new URL(url)
  const params = config?.params || {}
  const jsonParams = query(params)

  return fetch(url + "?" + jsonParams, {
    method: "get",
    headers: new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    }),
    // paramsSerializer: (p) => query(p),
  })
    .then((res) => res.json())
    .then((res) => deserialise(res))
    .then((res) => cleanup(res))
}
