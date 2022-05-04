import get from "lodash.get"
import { stripHtml } from "@vactory/next"
import truncate from "truncate"

export const normalizeNodes = (nodes) => {
	return nodes.map((post) => ({
		id: post.drupal_internal__nid,
		title: post.title,
		url: get(post, "path.alias", "#."),
		excerpt: truncate(stripHtml(get(post, "field_vactory_excerpt.processed", "")), 100),
		category: get(post, "field_vactory_news_theme.name", null),
		image: get(post, "field_vactory_media.thumbnail.uri.value", null),
	}))
}

export const normalizeDFNodes = (nodes, excerptLimit = 100) => {
	return nodes.map((post) => ({
		id: post.id,
		title: post.title,
		url: get(post, "url", "#."),
		excerpt: truncate(stripHtml(get(post, "excerpt", "")), excerptLimit),
		category: get(post, "category.label", null),
		image: get(post, "image", null),
	}))
}

export const normalizeTerms = (terms) => {
	return terms.map((term) => ({
		id: term.drupal_internal__tid,
		name: term.name,
	}))
}
