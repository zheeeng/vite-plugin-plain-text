# vite-plugin-plain-text

[![NPM](https://nodei.co/npm/vite-plugin-plain-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vite-plugin-plain-text/)

![publish workflow](https://github.com/zheeeng/vite-plugin-plain-text/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/vite-plugin-plain-text.svg)](https://www.npmjs.com/package/vite-plugin-plain-text)

A Vite plugin transforms the rule-matched file as plain text.

## Install

```bash
yarn add -D vite-plugin-plain-text (or by npm/pnpm)
```

## Example Usage

1. Support import the project's legal file `LICENSE`
2. Support import textbox
3. Support import glsl

```ts
// vite.config.(t|j)s

import { defineConfig } from 'vite';

import plainText from 'vite-plugin-plain-text';

export default defineConfig({
  plugins: [
    // passing Regular expression or glob matcher
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

### Enable Default Export

The optional `plainTextOptions.namedExport` configures the named exported variable, pass a string that specifies the variable's name, and pass false/''/undefined enabling the default exporting.

```ts
// vite.config.(t|j)s

import { defineConfig } from "vite";
import plainText from "../src/index";

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

### Type Safe

1. Manually add the module declaration:
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
2. Try type declaration generating automatically:
     1. `plainTextOptions.dtsAutoGen` generates dts files for the matched files.
     2. `plainTextOptions.dtsAutoClean` cleans up these dts files after the vite plugin startup each time.
    ```ts
    import { defineConfig } from "vite";
    import plainText from "../src/index";

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
