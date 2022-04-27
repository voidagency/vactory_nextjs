---
to: packages/ui/src/<%= h.changeCase.lower(name) %>/theme.js
---
export const <%= h.changeCase.lower(name) %> = {
	default: {
		base: "block w-full bg-gray-100 py-5 px-5",
	},
}
