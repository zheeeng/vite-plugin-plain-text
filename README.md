# vite-plugin-plain-text

[![NPM](https://nodei.co/npm/vite-plugin-plain-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vite-plugin-plain-text/)

![example workflow](https://github.com/zheeeng/vite-plugin-plain-text/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/vite-plugin-plain-text.svg)](https://www.npmjs.com/package/vite-plugin-plain-text)

A Vite plugin transforms the rule matched file as plain text

## Install

```bash
yarn add -D vite-plugin-plain-text (or by npm)
```

## Usage

```ts
// vite.config.ts

import { defineConfig } from 'vite';

/**
 * @param match Regular expression in string or Regexp type,
 * or a match predicate  (this: vite transform context, code: string, id: file name string) => void
 * @returns transformed code
 */
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    // passing string type Regular expression
    plainText(/\/LICENSE$/),
  ],
});
```

```ts
// component.ts

import { plainText as LICENSE } from '@root/LICENSE'

console.log(LICENSE)
```

## License

MIT
