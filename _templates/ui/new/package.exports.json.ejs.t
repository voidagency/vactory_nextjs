---
inject: true
to: packages/ui/package.json
after: exports
skip_if: (\.+)\/<%= h.changeCase.lower(name) %>
---
    "./<%= h.changeCase.lower(name) %>": "./src/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.js",