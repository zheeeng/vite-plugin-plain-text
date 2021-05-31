"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plainText = void 0;
function plainText(match) {
    return {
        name: 'plain text',
        transform: function (code, id) {
            if (typeof match === 'string' && new RegExp(match).test(id)
                || match instanceof RegExp && match.test(id)
                || typeof match === 'function' && match.call(this, code, id)) {
                return "export default () => " + JSON.stringify(code);
            }
            return code;
        },
    };
}
exports.plainText = plainText;
