import { DrupalClient } from "./client"

export const drupal = new DrupalClient({
	debug: "DRUPAL_CLIENT_DEBUG" in process.env,
})
