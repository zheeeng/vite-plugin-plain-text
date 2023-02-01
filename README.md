# vite-plugin-plain-text

[![NPM](https://nodei.co/npm/vite-plugin-plain-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vite-plugin-plain-text/)

![publish workflow](https://github.com/zheeeng/vite-plugin-plain-text/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/vite-plugin-plain-text.svg)](https://www.npmjs.com/package/vite-plugin-plain-text)

A Vite plugin that transforms matched files into plain text.

## Installation

```bash
pnpm i -D vite-plugin-plain-text (or npm/yarn)
```

## Usage Example

Assume we are going to transform these files:

1. The project's `LICENSE` file
2. Textbox
3. `.glsl` file

into plain text.

```ts
// vite.config.(t|j)s

import { defineConfig } from 'vite';

import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    // passing regular expression or glob matcher
    plainText([/\/LICENSE$/, '**/*.text', /\.glsl$/]),
  ],
});
```

```js component.js
// component.js

import { plainText as LICENSE } from '../LICENSE'
import { plainText as Lorem } from '../lorem-ipsum.text'
import { plainText as Siren } from '../siren.glsl'

console.log(LICENSE)
console.log(Lorem)
console.log(Siren)
```

## Advanced Usage

### Options Reference

```ts
type PlainTextOptions = {
  namedExport?: string | false,
  dtsAutoGen?: boolean,
  distAutoClean?: boolean,
}
```

### Enable Default Export

Use the `plainTextOptions.namedExport` option to configure the named exported variable. To enable the default export, pass `false`, `''`, or `undefined`.

```ts
// vite.config.(t|j)s

import { defineConfig } from 'vite';
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    plainText(
      [/\/LICENSE$/, '**/*.text', /\.glsl$/],
      { namedExport: false },
    ),
  ],
});
```

```js component.js
// component.js

import LICENSE from '../LICENSE'
import Lorem from '../lorem-ipsum.text'
import Siren from '../siren.glsl'

console.log(LICENSE)
console.log(Lorem)
console.log(Siren)
```

### Type Safety

#### Adding Module Declarations Manually

```ts
// vite-env.d.ts
declare module '*/LICENSE' {
    export const plainText: string
}
declare module '*.text' {
    export const plainText: string
}
declare module '*.glsl' {
    export const plainText: string
}
```

#### Generate the declaration automatically

1. `plainTextOptions.dtsAutoGen` generates `.dts` files for matched files.
2. `plainTextOptions.dtsAutoClean` cleans up these `.dts` files after the vite plugin starts up each time.

```ts
import { defineConfig } from 'vite';
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    plainText(
      [/\/LICENSE$/, '**/*.text', /\.glsl$/],
      { namedExport: false, dtsAutoGen: true, distAutoClean: true },
    ),
  ],
});
```

## License

MIT

## Alternative

Virtual asset Loader: [vite-plugin-virtual-plain-text](https://www.npmjs.com/package/vite-plugin-virtual-plain-text)
