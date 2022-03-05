import { deserialise } from "kitsu-core"
import axios from "axios"
import { query, cleanup } from "../utils"

export const fetcher = async (url, config = {}) =>
  axios
    .get(url, {
      ...config,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      paramsSerializer: (p) => query(p),
    })
    .then((res) => res.data)
    .then((res) => deserialise(res))
    .then((res) => cleanup(res))
