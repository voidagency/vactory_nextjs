---
to: packages/ui/src/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.stories.jsx
---
import React from "react"
import { <%= name %> } from "./<%= h.changeCase.lower(name) %>"

export const Default = () => {
	return <<%= name %> />
}

export default {
	title: "Components/<%= name %>",
}