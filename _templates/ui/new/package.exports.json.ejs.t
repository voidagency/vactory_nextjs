---
inject: true
to: packages/ui/package.json
after: exports
skip_if: @vactory/ui/<%= h.changeCase.lower(name) %>
---
"@vactory/ui/<%= h.changeCase.lower(name) %>": "./src/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.js"