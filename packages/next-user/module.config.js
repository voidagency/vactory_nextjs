module.exports = {
	name: "@vactory/next-user",
	namedExportPrefix: "VactoryUser",
	api: {
		prefix: "/user",
		routes: [
			{
				path: "/signup",
				namedExport: "signUpHandler",
			},
			{
				path: "/reset-password",
				namedExport: "resetPasswordHandler",
			},
		],
	},
}
