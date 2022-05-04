// Default logger. Uses console.
export const logger = {
	log(message) {
		console.log(`[drupal][log]:`, message)
	},
	debug(message) {
		console.debug(`[drupal][debug]:`, message)
	},
	warn(message) {
		console.warn(`[drupal][debug]:`, message)
	},
	error(message) {
		console.error(`[drupal][error]:`, message)
	},
}
