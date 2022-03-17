import csurf from "csurf"
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) =>
	new Promise((resolve, reject) => {
		return csurf({ cookie: true })(req, res, (error, res) => {
			if (error) reject(error)
			return resolve(res)
		})
	})
