module.exports = {
	name: "@vactory/next-user",
	packageName: "next-user",
	namedExportPrefix: "VactoryUser",
	api: {
		prefix: "/user",
		routes: [
			{
				path: "/signup",
				handler: "signUpHandler",
				file: "src/api/signup.js",
			},
			{
				path: "/reset-password",
				handler: "resetPasswordHandler",
				file: "src/api/reset-password.js",
			},
		],
	},
}
