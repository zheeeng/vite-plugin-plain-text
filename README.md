# vite-plugin-plain-text

[![NPM](https://nodei.co/npm/vite-plugin-plain-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vite-plugin-plain-text/)

![publish workflow](https://github.com/zheeeng/vite-plugin-plain-text/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/vite-plugin-plain-text.svg)](https://www.npmjs.com/package/vite-plugin-plain-text)

A Vite plugin transforms the rule-matched file as plain text.

## Install

```bash
yarn add -D vite-plugin-plain-text (or by npm/pnpm)
```

## Usage

Take the project's legal file `LICENSE` as an example:

```ts
// vite.config.(t|j)s

import { defineConfig } from 'vite';

/**
 * @param {string | RegExp | Function} match
 *  String or RegExp to match the module id(file name),
 *  it also can be a matching-predicator with the signature `(this: vite transform context, code: string, id: file name string) => void`
 * @return transformed code
 */
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    // passing string type Regular expression
    plainText(/\/LICENSE$/),
  ],
});
```

```js component.js
// component.js

import { plainText as LICENSE } from '../LICENSE'

console.log(LICENSE)
```

For Typescript user you could add the module declaration, e.g.:

```ts
// vite-env.d.ts
declare module '*/LICENSE' {
    export const plainText: string
}
```

## License

MIT

## Alternative

Virtual asset Loader: [vite-plugin-virtual-plain-text](https://www.npmjs.com/package/vite-plugin-virtual-plain-text)
