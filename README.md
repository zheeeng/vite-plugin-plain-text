# vite-plugin-plain-text

[![NPM](https://nodei.co/npm/vite-plugin-plain-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vite-plugin-plain-text/)

![example workflow](https://github.com/zheeeng/vite-plugin-plain-text/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/vite-plugin-plain-text.svg)](https://www.npmjs.com/package/vite-plugin-plain-text)

A vite plugin load file as plain text

## Install

```bash
yarn add -D vite-plugin-plain-text (or by npm)
```

## Usage

```ts
import { defineConfig } from 'vite';

import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    plainText(/\/LICENSE$/),
  ],
});
```

## License

MIT
