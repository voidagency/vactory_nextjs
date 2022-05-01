/* eslint-disable no-unused-vars */
import { NextAuthHandler } from "@vactory/next-user/server"

export default async function handler(req, res) {
	return NextAuthHandler(req, res)
}
