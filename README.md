# layout.flex

Successor to [layout.attrs](https://github.com/benjaminapetersen/layout.attrs).
A set of small, composable flex utilities for building layouts. Inspired by and conceptually
similar to [Polymer](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html) layout & [Angular Material](https://material.angularjs.org/latest/#/layout/grid) but without the Material
Design component.  This project is intended to be generic flex.

More to come, in the meantime see the README from layout.attrs above, the same functionality
has been preserved, but now both classes & attributes on DOM nodes is supported.

# Installing

Coming soon, this repo has not yet been registered with bower or npm (but [layout.attrs](https://github.com/benjaminapetersen/layout.attrs) has).
<!--
`bower install layout.flex`
-->

# Using

## Everything (~50kb)

To use all of the features provided, include one of the minified files in the `/dist` folder.  Choose either attributes or classes.  This will run you about `55kb`:

```html
<!-- You don't need both!  Choose your preferred style -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.classes.css" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.attrs.css" />
```

## Choose, and shrink the payload (~10kb for core)

Want a smaller payload (your answer probably should be "yes")? Include only the modules you need from either `dist/classes` or `dist/attrs`.    The following set is the core modules, it leaves out just 2 of the shorthand modules but will drop the payload down to around `10kb`:

```html
<!-- for classes -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-layout.classes.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-grow.classes.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-axis.classes.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-order.classes.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-media-queries.classes.scc" />

<!-- for attributes -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-layout.attrs.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-grow.attrs.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-axis.attrs.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-order.attrs.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-media-queries.attrs.scc" />

```

## Docs & Demos
