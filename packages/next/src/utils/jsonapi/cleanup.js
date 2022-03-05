export const cleanup = (json) => {
  if (!json) return
  delete json.jsonapi
  delete json.links
  delete json.data?.node_type?.links
  delete json.data?.uid?.links
  delete json.data?.node_banner?.links
  delete json.data?.field_vactory_taxonomy_1?.links
  delete json.data?.field_vactory_media_image?.links
  delete json.data?.field_vactory_paragraphs?.links
  delete json.data?.links
  delete json.data?.revision_uid
  delete json.data?.content_translation_source
  delete json.data?.content_translation_outdated
  delete json.data?.field_exclude_from_search
  delete json.data?.field_vactory_meta_tags
  delete json.data?.revision_translation_affected
  delete json.data?.publish_on
  delete json.data?.unpublish_on
  delete json.data?.promote
  delete json.data?.sticky
  delete json.data?.revision_log
  delete json.data?.revision_timestamp

  // @todo: figure this out
  delete json.data?.body?.value
  delete json.data?.internal_user?.revision_uid

  return json.data
}
