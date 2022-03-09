// import { deserialise } from "kitsu-core"
// import axios from "axios"

// /**
//  * Formats a single URL query
//  *
//  * @param {string} value Right-hand side of the query
//  * @param {string} key Left-hand side of the query
//  * @returns {string} URL query string
//  * @private
//  */
// function queryFormat(value, key) {
//   if (value !== null && typeof value === "object") return query(value, key)
//   else return encodeURIComponent(key) + "=" + encodeURIComponent(value)
// }

// /**
//  * Constructs a URL query string for JSON:API parameters
//  *
//  * @param {Object} [params] Parameters to parse
//  * @param {string} [prefix] Prefix for nested parameters - used internally
//  * @returns {string} URL query string
//  *
//  * @example
//  * query({
//  *   filter: {
//  *     slug: 'cowboy-bebop',
//  *     title: {
//  *       value: 'foo'
//  *     }
//  *   }
//  *  sort: '-id'
//  * })
//  * // filter%5Bslug%5D=cowboy-bebop&filter%5Btitle%5D%5Bvalue%5D=foo&sort=-id
//  */
// export function query(params, prefix = null) {
//   const str = []

//   for (const param in params) {
//     str.push(queryFormat(params[param], prefix ? `${prefix}[${param}]` : param))
//   }
//   return str.join("&")
// }

// const cleanup = (json) => {
//   if (!json) return
//   delete json.jsonapi
//   delete json.links
//   delete json.data?.node_type?.links
//   delete json.data?.uid?.links
//   delete json.data?.node_banner?.links
//   delete json.data?.field_vactory_taxonomy_1?.links
//   delete json.data?.field_vactory_media_image?.links
//   delete json.data?.field_vactory_paragraphs?.links
//   delete json.data?.links
//   delete json.data?.revision_uid
//   delete json.data?.content_translation_source
//   delete json.data?.content_translation_outdated
//   delete json.data?.field_exclude_from_search
//   delete json.data?.field_vactory_meta_tags
//   delete json.data?.revision_translation_affected
//   delete json.data?.publish_on
//   delete json.data?.unpublish_on
//   delete json.data?.promote
//   delete json.data?.sticky
//   delete json.data?.revision_log
//   delete json.data?.revision_timestamp

//   // @todo: figure this out
//   delete json.data?.body?.value
//   delete json.data?.internal_user?.revision_uid

//   return json
// }

// const fetcher = async (url, config = {}) =>
//   axios
//     .get(url, {
//       ...config,
//       headers: {
//         Accept: "application/vnd.api+json",
//         "Content-Type": "application/vnd.api+json",
//       },
//       paramsSerializer: (p) => query(p),
//     })
//     .then((res) => res.data)
//     .then((res) => deserialise(res))
//     .then((res) => cleanup(res))

// const internalNodeField = [
//   "drupal_internal__nid",
//   "langcode",
//   "title",
//   "path",
//   "metatag_normalized",
//   "internal_node_banner",
//   "internal_blocks",
//   "internal_breadcrumb",
//   "node_settings",
// ]

// const nodeParams = {
//   fields: {
//     "node--vactory_news": []
//       .concat(
//         [
//           "body",
//           "created",
//           "field_vactory_excerpt",
//           "field_vactory_media_image",
//           "field_vactory_taxonomy_1",
//           "field_vactory_date",
//         ],
//         internalNodeField
//       )
//       .join(","),
//     "media--image": "thumbnail",
//     "file--image": "uri",
//     "taxonomy_term--vactory_news_theme": "name",
//   },
//   include: [
//     "field_vactory_media_image",
//     "field_vactory_media_image.thumbnail",
//     "field_vactory_taxonomy_1",
//   ].join(","),
// }

// export const IdHandler = async (req, res) => {
//   const id = req.params.id
//   // @todo: check in allowed
//   const lang = req.headers["x-language"]

//   if (!id) {
//     return res.status(401).json({ error: 101, msg: "Missing ID" })
//   }

//   if (!lang) {
//     return res.status(401).json({ error: 100, msg: "Missing language" })
//   }

//   const node = await fetcher(
//     `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${lang}/api/node/vactory_news/${id}`,
//     {
//       params: nodeParams,
//     }
//   )

//   res.status(200).json(node)
// }

// export const ListHandler = async (req, res) => {
//   res.status(200).json([])
// }

export const IdHandler = async (req, res) => {
  res.status(200).json([])
}

export const ListHandler = async (req, res) => {
  res.status(200).json([])
}
