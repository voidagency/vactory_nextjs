---
to: packages/ui/src/<%= h.changeCase.lower(name) %>/README.md
---
# <%= name %>
```
import {<%= name %>} from '@vactory/ui/<%=  h.changeCase.lower(name) %>';
```

# Example 

```
import {<%= name %>} from '@vactory/ui/<%=  h.changeCase.lower(name) %>';

const Page = () => {
    return <<%= name %> />
}
```

## API


| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|--------|---------------------|
| variant         | La nom ou le chemin de `variant` pour styler  le composant via `Theme Object` | `string`   | `anchor.default`   |
| Box's props         | Vous pouvez utiliser toutes le proporiétés de `Box`   |    | -   |
