import { Plugin } from 'vite'
import { MagicString } from '@napi-rs/magic-string'

type TransformContext = ThisParameterType<Plugin['transform']>

type Match = string | string[] | RegExp | RegExp[]

type MatchFn = (this: TransformContext, code: string, id: string) => boolean

const testMatch = (match: Match, testId: string): boolean => false
  || typeof match === 'string' && new RegExp(match).test(testId)
  || match instanceof RegExp   && match.test(testId)
  || Array.isArray(match)      && match.some(m => testMatch(m, testId))

/**
 * @param {string | RegExp | string[] | RegExp[] | Function} match
 *  String or RegExp to match the module id(file name),
 *  it also can be a matching-predicator with the signature `(this: vite transform context, code: string, id: file name string) => void`
 * @return transformed code
 */
export default function plainText (match: Match | MatchFn): Plugin {
  return {
    name: 'plain text',
    transform (code, id) {
      if (typeof match === 'function' ? match.call(this, code, id) : testMatch(match, id)) {
        const magicString = new MagicString(code)

        // ~~ effect ~~
        magicString.overwrite(0, code.length, `export const plainText = ${JSON.stringify(code)}`)

        const sourcemap = this.getCombinedSourcemap()

        return {
          code: magicString.toString(),
          map: magicString.generateMap({ file: sourcemap.file, source: sourcemap.sources[0], includeContent: true }).toMap(),
        }
      }
    },
  }
}
