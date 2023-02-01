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
 * @param {string | RegExp | (string | RegExp)[] | Function} match
 *  You can use the string, RegExp, string array, RegExp array to match the module id(file name).
 *  You can also pass a matching-predicator with the signature `(this: vite transform context, code: string, id: file name string) => void` tUI_Po decide whether to treat its content as plain text.
 * @param { namedExport?: string } plainTextOptions, @default { namedExport: 'plainText' }
 *  By default the plain text are named exported as `plainText`.
 *  You can pass undefined to specify to using the default exporting.
 * @return Configured plugin
 */
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    // passing Regular expression or glob matcher
    plainText([/\/LICENSE$/, '*.text']),
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
declare module '*.text' {
    export const plainText: string
}
```

## License

MIT

## Alternative

Virtual asset Loader: [vite-plugin-virtual-plain-text](https://www.npmjs.com/package/vite-plugin-virtual-plain-text)
