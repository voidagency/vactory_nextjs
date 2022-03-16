import { signUpHandler } from "@vactory/next-user/api/signup"

export default function handler(req, res) {
	return signUpHandler(req, res)
}
