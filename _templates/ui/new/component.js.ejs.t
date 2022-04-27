---
to: packages/ui/src/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.js
---
import React from "react"

export const <%= name %> = ({ children }) => (
	<div className="<%= h.changeCase.paramCase(name) %>">
		<h3>This a <%= name %> component</h3>
		{children}
	</div>
)
