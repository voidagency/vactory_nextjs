---
inject: true
to: packages/ui/src/theme/theme.js
after: export const theme
skip_if: <%= h.changeCase.lower(name) %>,
---
	<%= h.changeCase.lower(name) %>,