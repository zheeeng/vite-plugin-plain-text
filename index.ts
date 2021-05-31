import { Plugin } from 'vite'

type ThisParameter<T extends undefined | ((...args: any) => any)> = T extends (this:infer P, ...args: any[]) => any ? P : never;

type TransformContext = ThisParameter<Plugin['transform']>

export function plainText (match: string | RegExp | ((this: TransformContext, code: string, id: string) => void)): Plugin {
    return {
      name: 'plain text',
      transform (code, id) {
        if (
          typeof match === 'string' && new RegExp(match).test(id)
          || match instanceof RegExp && match.test(id)
          || typeof match === 'function' && match.call(this, code, id)
        ) {
          return `export default () => ${JSON.stringify(code)}`
        }
  
        return code
      },
    }
  }
  