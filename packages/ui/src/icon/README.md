# Icon

```
import {Icon} from '@ui/core';
```

# Sources

Refer to `./icons` for a complete list of svg files.

# Build

```
yarn workspace @ui/core build:icons
```

This will generate an SVG Sprite at ./public/icons.svg

You should add this file to your project and it should be available at `/icons.svg` > e.g `http://domain.com/icons.svg`

# Bonus Tip

You can preload the sprite.svg file (and then cache it) to improve performance. "By preloading a certain resource, you are telling the browser that you would like to fetch it sooner than the browser would otherwise discover it because you are certain that it is important for the current page." - web.dev.

To preload the sprite, you add a link tag to the head of the document.

```
<head>
  <link rel="preload" as="image/svg+xml" href="/icons.svg">
</head>
```

We are already preloading `icons.svg` at `.storybook/preview-head.html`

# Add more icons

Just put your SVG file inside the `./icons` folder and build

Included icons are from `https://www.svgrepo.com/collection/sexyicons-duotone-icons/`

# Final Thoughts

Keep your `icons.svg` file under _125Kb_

# Example

```
import {Icon} from '@ui/core';

const Page = () => {
    return <Icon id={`bell-alert-notifications`} width="24" height="24" />
}
```

## API

| props | Description | type     | valeur par défaut |
| ----- | ----------- | -------- | ----------------- |
| id    | Icon Name   | `string` | ``                |
