import { resetPasswordHandler } from "@vactory/next-user/api/reset-password"

export default function handler(req, res) {
	return resetPasswordHandler(req, res)
}
