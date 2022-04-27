---
inject: true
to: packages/ui/src/theme/theme.js
after: import
skip_if: "..\/<%= h.changeCase.lower(name) %>\/theme"
---
import { <%= h.changeCase.lower(name) %> } from "../<%= h.changeCase.lower(name) %>/theme"