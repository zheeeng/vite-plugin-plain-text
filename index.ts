import { Plugin } from 'vite'

type ThisParameter<T extends undefined | ((...args: any) => any)> = T extends (this:infer P, ...args: any[]) => any ? P : never;

type TransformContext = ThisParameter<Plugin['transform']>

/**
 * @param match
 * Regular expression in string or Regexp type,
 *  or a match predicate  (this: vite transform context, code: string, id: file name string) => void
 * @returns transformed code
 */
export default function plainText (match: string | RegExp | ((this: TransformContext, code: string, id: string) => boolean)): Plugin {
  return {
    name: 'plain text',
    transform (code, id) {
      if (
        typeof match === 'string' && new RegExp(match).test(id)
        || match instanceof RegExp && match.test(id)
        || typeof match === 'function' && match.call(this, code, id)
      ) {
        return `export const plainText = ${JSON.stringify(code)}`
      }

      return code
    },
  }
}
  