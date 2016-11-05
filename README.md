# layout.flex

Successor to [layout.attrs](https://github.com/benjaminapetersen/layout.attrs).
A set of small, composable flex utilities for building layouts. Inspired by and conceptually
similar to [Polymer](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html) layout & [Angular Material](https://material.angularjs.org/latest/#/layout/grid) but without the Material
Design component.  This project is intended to be generic flex.

More to come, in the meantime see the README from layout.attrs above, the same functionality
has been preserved, but now both classes & attributes on DOM nodes is supported.

## Installing

Coming soon, this repo has not yet been registered with bower or npm (but [layout.attrs](https://github.com/benjaminapetersen/layout.attrs) has).
<!--
`bower install layout.flex`
-->

## Using

The payload ranges from the `~6kb` core to `~60kb` full depending on the features you want to support.  The `core` is just about everything you need, the `all` files include some nice to have features at file size expense.  

NOTE: With modern http compression, file size should be little concern.  A test run of `gzip` against the full `layout.flex.attrs.all.css` (`~60kb`) file produced a payload of only `5kb`.

### Core (~10kb)

 The simplest option at the smallest payload is to include one of the following pre-minified `core` files:

```html
<!-- for classes, use this file -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.classes.core.css" />
<!-- for attrs, use this file -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.attrs.core.css" />
```

### Everything (~50kb)

To use all of the features provided, include one of the minified files in the `/dist` folder.  Choose either attributes or classes.  This will run you about `55kb`, but only 2 (optional) modules make up the bulk of that.  See the next section to dramatically reduce the payload.

The `flex-resize` and `flex-axis-shorthand` modules include a preferable syntax, but it comes at a cost to file size. If you
are using no other css framework, then the additional bytes may be irrelevant to you and you may use the pre-packaged files:

```html
<!-- for classes, use this file -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.classes.all.css" />
<!-- for attrs, use this file -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/layout.flex.attrs.all.css" />
```

### Pick and Choose

Alternatively, you can include only the modules you need from either `dist/classes` or `dist/attrs`.    The following set illustrates how to use just 2 of the modules, coming in at around `~3kb`:

```html
<!-- for classes -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-layout.classes.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-grow.classes.scc" />

<!-- for attributes -->
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-layout.attrs.scc" />
<link rel="stylesheet" href="/path/to/layout.flex/dist/classes/flex-grow.attrs.scc" />

```

## Custom prefix to avoid collisions with existing frameworks

In case you need to install alongside another framework, copy the `variables.scss` file into your project and replace the `$prefix` variable at the top of the file, then `@include` the modules you need:

```scss
@import 'variables';  // copy of /path/to/layout.flex/variables.scss with updated $fxPrefix.
@import '/path/to/layout.flex/src/flex-layout/flex-layout.classes';
@import '/path/to/layout.flex/src/flex-grow/flex-grow.classes';
@import '/path/to/layout.flex/src/flex-order/flex-order.classes';
@import '/path/to/layout.flex/src/flex-order/flex-media-query.classes';
@import '/path/to/layout.flex/src/flex-order/flex-axis.classes';
```

## Docs

Checkout the [docs](./docs) directory.
- [attrs docs](./docs/attrs.md)

## Demos

Coming soon.



<!--
  use rawgit or raw.githubusercontent.com or gist.githubusercontent.com links here to make it actually viewable in the browser
-->
