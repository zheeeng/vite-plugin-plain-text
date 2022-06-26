import { Plugin } from 'vite'
import { MagicString } from '@napi-rs/magic-string'

type TransformContext = ThisParameterType<Plugin['transform']>

/**
 * @param {string | RegExp | Function} match
 *  String or RegExp to match the module id(file name),
 *  it also can be a matching-predicator with the signature `(this: vite transform context, code: string, id: file name string) => void`
 * @return transformed code
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
        const content = `export const plainText = ${JSON.stringify(code)}`
        const magicString = new MagicString(content)

        return {
          code: content,
          map: magicString.generateMap({ hires: true }).toString(),
        }
      }
    },
  }
}
