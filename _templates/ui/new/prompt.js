// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples

module.exports = {
	prompt: ({ prompter }) => {
		return prompter.prompt([
			{
				type: "input",
				name: "name",
				message: "Component Name",
				validate: () => true,
			},
		])
	},
}
