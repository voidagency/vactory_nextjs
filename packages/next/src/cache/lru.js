import LRUCache from "lru-cache"

// @todo: disable dev ? used only in routing ?
export const lruCache = new LRUCache({
	max: 100,
	ttl: 1000 * 60 * 60, // 1 hour
})
