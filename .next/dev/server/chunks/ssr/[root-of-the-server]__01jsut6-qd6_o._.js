module.exports = [
(()=>{"use strict";return[
"[externals]/next-mdx-remote/rsc [external] (next-mdx-remote/rsc, esm_import, [project]/node_modules/next-mdx-remote)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("next-mdx-remote-bb3b2464f4f590a5/rsc");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/ccount/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */ __turbopack_context__.s([
    "ccount",
    ()=>ccount
]);
function ccount(value, character) {
    const source = String(value);
    if (typeof character !== 'string') {
        throw new TypeError('Expected character');
    }
    let count = 0;
    let index = source.indexOf(character);
    while(index !== -1){
        count++;
        index = source.indexOf(character, index + character.length);
    }
    return count;
}
}),
"[project]/node_modules/dequal/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecate",
    ()=>deprecate,
    "equal",
    ()=>equal,
    "ok",
    ()=>ok,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dequal/dist/index.mjs [app-rsc] (ecmascript)");
;
/**
 * @type {Set<string>}
 */ const codesWarned = new Set();
class AssertionError extends Error {
    name = 'Assertion';
    code = 'ERR_ASSERTION';
    /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */ // eslint-disable-next-line max-params
    constructor(message, actual, expected, operator, generated){
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        /**
     * @type {unknown}
     */ this.actual = actual;
        /**
     * @type {unknown}
     */ this.expected = expected;
        /**
     * @type {boolean}
     */ this.generated = generated;
        /**
     * @type {string}
     */ this.operator = operator;
    }
}
class DeprecationError extends Error {
    name = 'DeprecationWarning';
    /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */ constructor(message, code){
        super(message);
        /**
     * @type {string | undefined}
     */ this.code = code;
    }
}
function deprecate(fn, message, code) {
    let warned = false;
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    // @ts-expect-error: it’s perfect, typescript…
    return deprecated;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */ function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (typeof code === 'string' && codesWarned.has(code)) {
            // Empty.
            } else {
                console.error(new DeprecationError(message, code || undefined));
                if (typeof code === 'string') codesWarned.add(code);
            }
        }
        return new.target ? Reflect.construct(fn, args, new.target) : Reflect.apply(fn, this, args);
    }
}
function equal(actual, expected, message) {
    assert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dequal"])(actual, expected), actual, expected, 'equal', 'Expected values to be deeply equal', message);
}
function ok(value, message) {
    assert(Boolean(value), false, true, 'ok', 'Expected value to be truthy', message);
}
function unreachable(message) {
    assert(false, false, true, 'ok', 'Unreachable', message);
}
/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */ // eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
    if (!bool) {
        throw userMessage instanceof Error ? userMessage : new AssertionError(userMessage || defaultMessage, actual, expected, operator, !userMessage);
    }
}
}),
"[project]/node_modules/github-slugger/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BananaSlug,
    "slug",
    ()=>slug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$github$2d$slugger$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/github-slugger/regex.js [app-rsc] (ecmascript)");
;
const own = Object.hasOwnProperty;
class BananaSlug {
    /**
   * Create a new slug class.
   */ constructor(){
        /** @type {Record<string, number>} */ // eslint-disable-next-line no-unused-expressions
        this.occurrences;
        this.reset();
    }
    /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */ slug(value, maintainCase) {
        const self = this;
        let result = slug(value, maintainCase === true);
        const originalSlug = result;
        while(own.call(self.occurrences, result)){
            self.occurrences[originalSlug]++;
            result = originalSlug + '-' + self.occurrences[originalSlug];
        }
        self.occurrences[result] = 0;
        return result;
    }
    /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */ reset() {
        this.occurrences = Object.create(null);
    }
}
function slug(value, maintainCase) {
    if (typeof value !== 'string') return '';
    if (!maintainCase) value = value.toLowerCase();
    return value.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$github$2d$slugger$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regex"], '').replace(/ /g, '-');
}
}),
"[project]/node_modules/github-slugger/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This module is generated by `script/`.
/* eslint-disable no-control-regex, no-misleading-character-class, no-useless-escape */ __turbopack_context__.s([
    "regex",
    ()=>regex
]);
const regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
}),
"[project]/node_modules/hast-util-heading-rank/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ /**
 * Get the rank (`1` to `6`) of headings (`h1` to `h6`).
 *
 * @param {Nodes} node
 *   Node to check.
 * @returns {number | undefined}
 *   Rank of the heading or `undefined` if not a heading.
 */ __turbopack_context__.s([
    "headingRank",
    ()=>headingRank
]);
function headingRank(node) {
    const name = node.type === 'element' ? node.tagName.toLowerCase() : '';
    const code = name.length === 2 && name.charCodeAt(0) === 104 /* `h` */  ? name.charCodeAt(1) : 0;
    return code > 48 /* `0` */  && code < 55 /* `7` */  ? code - 48 /* `0` */  : undefined;
}
}),
"[project]/node_modules/hast-util-to-string/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Nodes, Parents} from 'hast'
 */ /**
 * Get the plain-text value of a hast node.
 *
 * @param {Nodes} node
 *   Node to serialize.
 * @returns {string}
 *   Serialized node.
 */ __turbopack_context__.s([
    "toString",
    ()=>toString
]);
function toString(node) {
    // “The concatenation of data of all the Text node descendants of the context
    // object, in tree order.”
    if ('children' in node) {
        return all(node);
    }
    // “Context object’s data.”
    return 'value' in node ? node.value : '';
}
/**
 * @param {Nodes} node
 *   Node.
 * @returns {string}
 *   Serialized node.
 */ function one(node) {
    if (node.type === 'text') {
        return node.value;
    }
    return 'children' in node ? all(node) : '';
}
/**
 * @param {Parents} node
 *   Node.
 * @returns {string}
 *   Serialized node.
 */ function all(node) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    while(++index < node.children.length){
        result[index] = one(node.children[index]);
    }
    return result.join('');
}
}),
"[project]/node_modules/longest-streak/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the count of the longest repeating streak of `substring` in `value`.
 *
 * @param {string} value
 *   Content to search in.
 * @param {string} substring
 *   Substring to look for, typically one character.
 * @returns {number}
 *   Count of most frequent adjacent `substring`s in `value`.
 */ __turbopack_context__.s([
    "longestStreak",
    ()=>longestStreak
]);
function longestStreak(value, substring) {
    const source = String(value);
    let index = source.indexOf(substring);
    let expected = index;
    let count = 0;
    let max = 0;
    if (typeof substring !== 'string') {
        throw new TypeError('Expected substring');
    }
    while(index !== -1){
        if (index === expected) {
            if (++count > max) {
                max = count;
            }
        } else {
            count = 1;
        }
        expected = index + substring.length;
        index = source.indexOf(substring, expected);
    }
    return max;
}
}),
"[project]/node_modules/markdown-table/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markdownTable",
    ()=>markdownTable
]);
// To do: next major: remove.
/**
 * @typedef {Options} MarkdownTableOptions
 *   Configuration.
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [alignDelimiters=true]
 *   Whether to align the delimiters (default: `true`);
 *   they are aligned by default:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   Pass `false` to make them staggered:
 *
 *   ```markdown
 *   | Alpha | B |
 *   | - | - |
 *   | C | Delta |
 *   ```
 * @property {ReadonlyArray<string | null | undefined> | string | null | undefined} [align]
 *   How to align columns (default: `''`);
 *   one style for all columns or styles for their respective columns;
 *   each style is either `'l'` (left), `'r'` (right), or `'c'` (center);
 *   other values are treated as `''`, which doesn’t place the colon in the
 *   alignment row but does align left;
 *   *only the lowercased first character is used, so `Right` is fine.*
 * @property {boolean | null | undefined} [delimiterEnd=true]
 *   Whether to end each row with the delimiter (default: `true`).
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B
 *   | ----- | -----
 *   | C     | Delta
 *   ```
 * @property {boolean | null | undefined} [delimiterStart=true]
 *   Whether to begin each row with the delimiter (default: `true`).
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are starting delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no starting delimiters:
 *
 *   ```markdown
 *   Alpha | B     |
 *   ----- | ----- |
 *   C     | Delta |
 *   ```
 * @property {boolean | null | undefined} [padding=true]
 *   Whether to add a space of padding between delimiters and cells
 *   (default: `true`).
 *
 *   When `true`, there is padding:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there is no padding:
 *
 *   ```markdown
 *   |Alpha|B    |
 *   |-----|-----|
 *   |C    |Delta|
 *   ```
 * @property {((value: string) => number) | null | undefined} [stringLength]
 *   Function to detect the length of table cell content (optional);
 *   this is used when aligning the delimiters (`|`) between table cells;
 *   full-width characters and emoji mess up delimiter alignment when viewing
 *   the markdown source;
 *   to fix this, you can pass this function,
 *   which receives the cell content and returns its “visible” size;
 *   note that what is and isn’t visible depends on where the text is displayed.
 *
 *   Without such a function, the following:
 *
 *   ```js
 *   markdownTable([
 *     ['Alpha', 'Bravo'],
 *     ['中文', 'Charlie'],
 *     ['👩‍❤️‍👩', 'Delta']
 *   ])
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo |
 *   | - | - |
 *   | 中文 | Charlie |
 *   | 👩‍❤️‍👩 | Delta |
 *   ```
 *
 *   With [`string-width`](https://github.com/sindresorhus/string-width):
 *
 *   ```js
 *   import stringWidth from 'string-width'
 *
 *   markdownTable(
 *     [
 *       ['Alpha', 'Bravo'],
 *       ['中文', 'Charlie'],
 *       ['👩‍❤️‍👩', 'Delta']
 *     ],
 *     {stringLength: stringWidth}
 *   )
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo   |
 *   | ----- | ------- |
 *   | 中文  | Charlie |
 *   | 👩‍❤️‍👩    | Delta   |
 *   ```
 */ /**
 * @param {string} value
 *   Cell value.
 * @returns {number}
 *   Cell size.
 */ function defaultStringLength(value) {
    return value.length;
}
function markdownTable(table, options) {
    const settings = options || {};
    // To do: next major: change to spread.
    const align = (settings.align || []).concat();
    const stringLength = settings.stringLength || defaultStringLength;
    /** @type {Array<number>} Character codes as symbols for alignment per column. */ const alignments = [];
    /** @type {Array<Array<string>>} Cells per row. */ const cellMatrix = [];
    /** @type {Array<Array<number>>} Sizes of each cell per row. */ const sizeMatrix = [];
    /** @type {Array<number>} */ const longestCellByColumn = [];
    let mostCellsPerRow = 0;
    let rowIndex = -1;
    // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
    // do superfluous work when aligning, so optimize for aligning.
    while(++rowIndex < table.length){
        /** @type {Array<string>} */ const row = [];
        /** @type {Array<number>} */ const sizes = [];
        let columnIndex = -1;
        if (table[rowIndex].length > mostCellsPerRow) {
            mostCellsPerRow = table[rowIndex].length;
        }
        while(++columnIndex < table[rowIndex].length){
            const cell = serialize(table[rowIndex][columnIndex]);
            if (settings.alignDelimiters !== false) {
                const size = stringLength(cell);
                sizes[columnIndex] = size;
                if (longestCellByColumn[columnIndex] === undefined || size > longestCellByColumn[columnIndex]) {
                    longestCellByColumn[columnIndex] = size;
                }
            }
            row.push(cell);
        }
        cellMatrix[rowIndex] = row;
        sizeMatrix[rowIndex] = sizes;
    }
    // Figure out which alignments to use.
    let columnIndex = -1;
    if (typeof align === 'object' && 'length' in align) {
        while(++columnIndex < mostCellsPerRow){
            alignments[columnIndex] = toAlignment(align[columnIndex]);
        }
    } else {
        const code = toAlignment(align);
        while(++columnIndex < mostCellsPerRow){
            alignments[columnIndex] = code;
        }
    }
    // Inject the alignment row.
    columnIndex = -1;
    /** @type {Array<string>} */ const row = [];
    /** @type {Array<number>} */ const sizes = [];
    while(++columnIndex < mostCellsPerRow){
        const code = alignments[columnIndex];
        let before = '';
        let after = '';
        if (code === 99 /* `c` */ ) {
            before = ':';
            after = ':';
        } else if (code === 108 /* `l` */ ) {
            before = ':';
        } else if (code === 114 /* `r` */ ) {
            after = ':';
        }
        // There *must* be at least one hyphen-minus in each alignment cell.
        let size = settings.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
        const cell = before + '-'.repeat(size) + after;
        if (settings.alignDelimiters !== false) {
            size = before.length + size + after.length;
            if (size > longestCellByColumn[columnIndex]) {
                longestCellByColumn[columnIndex] = size;
            }
            sizes[columnIndex] = size;
        }
        row[columnIndex] = cell;
    }
    // Inject the alignment row.
    cellMatrix.splice(1, 0, row);
    sizeMatrix.splice(1, 0, sizes);
    rowIndex = -1;
    /** @type {Array<string>} */ const lines = [];
    while(++rowIndex < cellMatrix.length){
        const row = cellMatrix[rowIndex];
        const sizes = sizeMatrix[rowIndex];
        columnIndex = -1;
        /** @type {Array<string>} */ const line = [];
        while(++columnIndex < mostCellsPerRow){
            const cell = row[columnIndex] || '';
            let before = '';
            let after = '';
            if (settings.alignDelimiters !== false) {
                const size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
                const code = alignments[columnIndex];
                if (code === 114 /* `r` */ ) {
                    before = ' '.repeat(size);
                } else if (code === 99 /* `c` */ ) {
                    if (size % 2) {
                        before = ' '.repeat(size / 2 + 0.5);
                        after = ' '.repeat(size / 2 - 0.5);
                    } else {
                        before = ' '.repeat(size / 2);
                        after = before;
                    }
                } else {
                    after = ' '.repeat(size);
                }
            }
            if (settings.delimiterStart !== false && !columnIndex) {
                line.push('|');
            }
            if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
            // empty: there will be a closing space.
            !(settings.alignDelimiters === false && cell === '') && (settings.delimiterStart !== false || columnIndex)) {
                line.push(' ');
            }
            if (settings.alignDelimiters !== false) {
                line.push(before);
            }
            line.push(cell);
            if (settings.alignDelimiters !== false) {
                line.push(after);
            }
            if (settings.padding !== false) {
                line.push(' ');
            }
            if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
                line.push('|');
            }
        }
        lines.push(settings.delimiterEnd === false ? line.join('').replace(/ +$/, '') : line.join(''));
    }
    return lines.join('\n');
}
/**
 * @param {string | null | undefined} [value]
 *   Value to serialize.
 * @returns {string}
 *   Result.
 */ function serialize(value) {
    return value === null || value === undefined ? '' : String(value);
}
/**
 * @param {string | null | undefined} value
 *   Value.
 * @returns {number}
 *   Alignment.
 */ function toAlignment(value) {
    const code = typeof value === 'string' ? value.codePointAt(0) : 0;
    return code === 67 /* `C` */  || code === 99 /* `c` */  ? 99 /* `c` */  : code === 76 /* `L` */  || code === 108 /* `l` */  ? 108 /* `l` */  : code === 82 /* `R` */  || code === 114 /* `r` */  ? 114 /* `r` */  : 0;
}
}),
"[project]/node_modules/mdast-util-find-and-replace/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findAndReplace",
    ()=>findAndReplace
]);
/**
 * @import {Nodes, Parents, PhrasingContent, Root, Text} from 'mdast'
 * @import {BuildVisitor, Test, VisitorResult} from 'unist-util-visit-parents'
 */ /**
 * @typedef RegExpMatchObject
 *   Info on the match.
 * @property {number} index
 *   The index of the search at which the result was found.
 * @property {string} input
 *   A copy of the search string in the text node.
 * @property {[...Array<Parents>, Text]} stack
 *   All ancestors of the text node, where the last node is the text itself.
 *
 * @typedef {RegExp | string} Find
 *   Pattern to find.
 *
 *   Strings are escaped and then turned into global expressions.
 *
 * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList
 *   Several find and replaces, in array form.
 *
 * @typedef {[Find, Replace?]} FindAndReplaceTuple
 *   Find and replace in tuple form.
 *
 * @typedef {ReplaceFunction | string | null | undefined} Replace
 *   Thing to replace with.
 *
 * @callback ReplaceFunction
 *   Callback called when a search matches.
 * @param {...any} parameters
 *   The parameters are the result of corresponding search expression:
 *
 *   * `value` (`string`) — whole match
 *   * `...capture` (`Array<string>`) — matches from regex capture groups
 *   * `match` (`RegExpMatchObject`) — info on the match
 * @returns {Array<PhrasingContent> | PhrasingContent | string | false | null | undefined}
 *   Thing to replace with.
 *
 *   * when `null`, `undefined`, `''`, remove the match
 *   * …or when `false`, do not replace at all
 *   * …or when `string`, replace with a text node of that value
 *   * …or when `Node` or `Array<Node>`, replace with those nodes
 *
 * @typedef {[RegExp, ReplaceFunction]} Pair
 *   Normalized find and replace.
 *
 * @typedef {Array<Pair>} Pairs
 *   All find and replaced.
 *
 * @typedef Options
 *   Configuration.
 * @property {Test | null | undefined} [ignore]
 *   Test for which nodes to ignore (optional).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$find$2d$and$2d$replace$2f$node_modules$2f$escape$2d$string$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit-parents/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-is/lib/index.js [app-rsc] (ecmascript)");
;
;
;
function findAndReplace(tree, list, options) {
    const settings = options || {};
    const ignored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convert"])(settings.ignore || []);
    const pairs = toPairs(list);
    let pairIndex = -1;
    while(++pairIndex < pairs.length){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["visitParents"])(tree, 'text', visitor);
    }
    /**
   * Visit a text node, and handle it if it is not in an ignored parent.
   *
   * @type {BuildVisitor<Root, 'text'>}
   */ function visitor(node, parents) {
        let index = -1;
        /** @type {Parents | undefined} */ let grandparent;
        while(++index < parents.length){
            const parent = parents[index];
            /** @type {Array<Nodes> | undefined} */ const siblings = grandparent ? grandparent.children : undefined;
            if (ignored(parent, siblings ? siblings.indexOf(parent) : undefined, grandparent)) {
                return;
            }
            grandparent = parent;
        }
        if (grandparent) {
            return handler(node, parents);
        }
    }
    /**
   * Handle a text node which is not in an ignored parent.
   *
   * @param {Text} node
   *   Text node to search in.
   * @param {Array<Parents>} parents
   *   Ancestors of `node`.
   * @returns {VisitorResult}
   *   Where to continue visiting.
   */ function handler(node, parents) {
        const parent = parents[parents.length - 1];
        const find = pairs[pairIndex][0];
        const replace = pairs[pairIndex][1];
        let start = 0;
        /** @type {Array<Nodes>} */ const siblings = parent.children;
        const index = siblings.indexOf(node);
        let change = false;
        /** @type {Array<PhrasingContent>} */ let nodes = [];
        find.lastIndex = 0;
        let match = find.exec(node.value);
        while(match){
            const position = match.index;
            /** @type {RegExpMatchObject} */ const matchObject = {
                index: match.index,
                input: match.input,
                stack: [
                    ...parents,
                    node
                ]
            };
            let value = replace(...match, matchObject);
            if (typeof value === 'string') {
                value = value.length > 0 ? {
                    type: 'text',
                    value
                } : undefined;
            }
            // It wasn’t a match after all.
            if (value === false) {
                // False acts as if there was no match.
                // So we need to reset `lastIndex`, which currently being at the end of
                // the current match, to the beginning.
                find.lastIndex = position + 1;
            } else {
                if (start !== position) {
                    add({
                        type: 'text',
                        value: node.value.slice(start, position)
                    });
                }
                if (Array.isArray(value)) {
                    for (const child of value)add(child);
                } else if (value) {
                    add(value);
                }
                start = position + match[0].length;
                change = true;
            }
            if (!find.global) {
                break;
            }
            match = find.exec(node.value);
        }
        if (change) {
            if (start < node.value.length) {
                add({
                    type: 'text',
                    value: node.value.slice(start)
                });
            }
            parent.children.splice(index, 1, ...nodes);
        } else {
            nodes = [
                node
            ];
        }
        return index + nodes.length;
        //TURBOPACK unreachable
        ;
        /**
     * Add a node.
     *
     * @param {PhrasingContent} child
     *   Node to add.
     * @returns {undefined}
     *   Nothing.
     */ function add(child) {
            const previous = nodes[nodes.length - 1];
            if (previous && previous.type === 'text' && child.type === 'text') {
                previous.value += child.value;
            } else {
                nodes.push(child);
            }
        }
    }
}
/**
 * Turn a tuple or a list of tuples into pairs.
 *
 * @param {FindAndReplaceList | FindAndReplaceTuple} tupleOrList
 *   Schema.
 * @returns {Pairs}
 *   Clean pairs.
 */ function toPairs(tupleOrList) {
    if (!Array.isArray(tupleOrList)) {
        throw new TypeError('Expected find and replace tuple or list of tuples');
    }
    /** @type {Pairs} */ const result = [];
    /** @type {FindAndReplaceList} */ // @ts-expect-error: correct.
    const list = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [
        tupleOrList
    ];
    let index = -1;
    while(++index < list.length){
        const tuple = list[index];
        result.push([
            toExpression(tuple[0]),
            toFunction(tuple[1])
        ]);
    }
    return result;
}
/**
 * Turn a find into an expression.
 *
 * @param {Find} find
 *   Pattern to find.
 * @returns {RegExp}
 *   Global expression.
 */ function toExpression(find) {
    return typeof find === 'string' ? new RegExp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$find$2d$and$2d$replace$2f$node_modules$2f$escape$2d$string$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(find), 'g') : find;
}
/**
 * Turn a replace into a function.
 *
 * @param {Replace} replace
 *   Thing to replace with.
 * @returns {ReplaceFunction}
 *   Function that returns that thing.
 */ function toFunction(replace) {
    return typeof replace === 'function' ? replace : function() {
        return replace;
    };
}
}),
"[project]/node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>escapeStringRegexp
]);
function escapeStringRegexp(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
}),
"[project]/node_modules/mdast-util-gfm-autolink-literal/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmAutolinkLiteralFromMarkdown",
    ()=>gfmAutolinkLiteralFromMarkdown,
    "gfmAutolinkLiteralToMarkdown",
    ()=>gfmAutolinkLiteralToMarkdown
]);
/**
 * @import {RegExpMatchObject, ReplaceFunction} from 'mdast-util-find-and-replace'
 * @import {CompileContext, Extension as FromMarkdownExtension, Handle as FromMarkdownHandle, Transform as FromMarkdownTransform} from 'mdast-util-from-markdown'
 * @import {ConstructName, Options as ToMarkdownExtension} from 'mdast-util-to-markdown'
 * @import {Link, PhrasingContent} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ccount/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$find$2d$and$2d$replace$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-find-and-replace/lib/index.js [app-rsc] (ecmascript)");
;
;
;
;
/** @type {ConstructName} */ const inConstruct = 'phrasing';
/** @type {Array<ConstructName>} */ const notInConstruct = [
    'autolink',
    'link',
    'image',
    'label'
];
function gfmAutolinkLiteralFromMarkdown() {
    return {
        transforms: [
            transformGfmAutolinkLiterals
        ],
        enter: {
            literalAutolink: enterLiteralAutolink,
            literalAutolinkEmail: enterLiteralAutolinkValue,
            literalAutolinkHttp: enterLiteralAutolinkValue,
            literalAutolinkWww: enterLiteralAutolinkValue
        },
        exit: {
            literalAutolink: exitLiteralAutolink,
            literalAutolinkEmail: exitLiteralAutolinkEmail,
            literalAutolinkHttp: exitLiteralAutolinkHttp,
            literalAutolinkWww: exitLiteralAutolinkWww
        }
    };
}
function gfmAutolinkLiteralToMarkdown() {
    return {
        unsafe: [
            {
                character: '@',
                before: '[+\\-.\\w]',
                after: '[\\-.\\w]',
                inConstruct,
                notInConstruct
            },
            {
                character: '.',
                before: '[Ww]',
                after: '[\\-.\\w]',
                inConstruct,
                notInConstruct
            },
            {
                character: ':',
                before: '[ps]',
                after: '\\/',
                inConstruct,
                notInConstruct
            }
        ]
    };
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterLiteralAutolink(token) {
    this.enter({
        type: 'link',
        title: null,
        url: '',
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node = this.stack[this.stack.length - 1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link');
    node.url = 'http://' + this.sliceSerialize(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitLiteralAutolink(token) {
    this.exit(token);
}
/** @type {FromMarkdownTransform} */ function transformGfmAutolinkLiterals(tree) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$find$2d$and$2d$replace$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAndReplace"])(tree, [
        [
            /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
            findUrl
        ],
        [
            /(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,
            findEmail
        ]
    ], {
        ignore: [
            'link',
            'linkReference'
        ]
    });
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} protocol
 * @param {string} domain
 * @param {string} path
 * @param {RegExpMatchObject} match
 * @returns {Array<PhrasingContent> | Link | false}
 */ // eslint-disable-next-line max-params
function findUrl(_, protocol, domain, path, match) {
    let prefix = '';
    // Not an expected previous character.
    if (!previous(match)) {
        return false;
    }
    // Treat `www` as part of the domain.
    if (/^w/i.test(protocol)) {
        domain = protocol + domain;
        protocol = '';
        prefix = 'http://';
    }
    if (!isCorrectDomain(domain)) {
        return false;
    }
    const parts = splitUrl(domain + path);
    if (!parts[0]) return false;
    /** @type {Link} */ const result = {
        type: 'link',
        title: null,
        url: prefix + protocol + parts[0],
        children: [
            {
                type: 'text',
                value: protocol + parts[0]
            }
        ]
    };
    if (parts[1]) {
        return [
            result,
            {
                type: 'text',
                value: parts[1]
            }
        ];
    }
    return result;
}
/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} atext
 * @param {string} label
 * @param {RegExpMatchObject} match
 * @returns {Link | false}
 */ function findEmail(_, atext, label, match) {
    if (// Not an expected previous character.
    !previous(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label)) {
        return false;
    }
    return {
        type: 'link',
        title: null,
        url: 'mailto:' + atext + '@' + label,
        children: [
            {
                type: 'text',
                value: atext + '@' + label
            }
        ]
    };
}
/**
 * @param {string} domain
 * @returns {boolean}
 */ function isCorrectDomain(domain) {
    const parts = domain.split('.');
    if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
        return false;
    }
    return true;
}
/**
 * @param {string} url
 * @returns {[string, string | undefined]}
 */ function splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    if (!trailExec) {
        return [
            url,
            undefined
        ];
    }
    url = url.slice(0, trailExec.index);
    let trail = trailExec[0];
    let closingParenIndex = trail.indexOf(')');
    const openingParens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ccount"])(url, '(');
    let closingParens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ccount$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ccount"])(url, ')');
    while(closingParenIndex !== -1 && openingParens > closingParens){
        url += trail.slice(0, closingParenIndex + 1);
        trail = trail.slice(closingParenIndex + 1);
        closingParenIndex = trail.indexOf(')');
        closingParens++;
    }
    return [
        url,
        trail
    ];
}
/**
 * @param {RegExpMatchObject} match
 * @param {boolean | null | undefined} [email=false]
 * @returns {boolean}
 */ function previous(match, email) {
    const code = match.input.charCodeAt(match.index - 1);
    return (match.index === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) && // If it’s an email, the previous character should not be a slash.
    (!email || code !== 47);
}
}),
"[project]/node_modules/mdast-util-gfm-footnote/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmFootnoteFromMarkdown",
    ()=>gfmFootnoteFromMarkdown,
    "gfmFootnoteToMarkdown",
    ()=>gfmFootnoteToMarkdown
]);
/**
 * @import {
 *   CompileContext,
 *   Extension as FromMarkdownExtension,
 *   Handle as FromMarkdownHandle
 * } from 'mdast-util-from-markdown'
 * @import {ToMarkdownOptions} from 'mdast-util-gfm-footnote'
 * @import {
 *   Handle as ToMarkdownHandle,
 *   Map,
 *   Options as ToMarkdownExtension
 * } from 'mdast-util-to-markdown'
 * @import {FootnoteDefinition, FootnoteReference} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-normalize-identifier/dev/index.js [app-rsc] (ecmascript)");
;
;
footnoteReference.peek = footnoteReferencePeek;
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterFootnoteCallString() {
    this.buffer();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterFootnoteCall(token) {
    this.enter({
        type: 'footnoteReference',
        identifier: '',
        label: ''
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterFootnoteDefinitionLabelString() {
    this.buffer();
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterFootnoteDefinition(token) {
    this.enter({
        type: 'footnoteDefinition',
        identifier: '',
        label: '',
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitFootnoteCallString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'footnoteReference');
    node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
    node.label = label;
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitFootnoteCall(token) {
    this.exit(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'footnoteDefinition');
    node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
    node.label = label;
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitFootnoteDefinition(token) {
    this.exit(token);
}
/** @type {ToMarkdownHandle} */ function footnoteReferencePeek() {
    return '[';
}
/**
 * @type {ToMarkdownHandle}
 * @param {FootnoteReference} node
 */ function footnoteReference(node, _, state, info) {
    const tracker = state.createTracker(info);
    let value = tracker.move('[^');
    const exit = state.enter('footnoteReference');
    const subexit = state.enter('reference');
    value += tracker.move(state.safe(state.associationId(node), {
        after: ']',
        before: value
    }));
    subexit();
    exit();
    value += tracker.move(']');
    return value;
}
function gfmFootnoteFromMarkdown() {
    return {
        enter: {
            gfmFootnoteCallString: enterFootnoteCallString,
            gfmFootnoteCall: enterFootnoteCall,
            gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
            gfmFootnoteDefinition: enterFootnoteDefinition
        },
        exit: {
            gfmFootnoteCallString: exitFootnoteCallString,
            gfmFootnoteCall: exitFootnoteCall,
            gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
            gfmFootnoteDefinition: exitFootnoteDefinition
        }
    };
}
function gfmFootnoteToMarkdown(options) {
    // To do: next major: change default.
    let firstLineBlank = false;
    if (options && options.firstLineBlank) {
        firstLineBlank = true;
    }
    return {
        handlers: {
            footnoteDefinition,
            footnoteReference
        },
        // This is on by default already.
        unsafe: [
            {
                character: '[',
                inConstruct: [
                    'label',
                    'phrasing',
                    'reference'
                ]
            }
        ]
    };
    //TURBOPACK unreachable
    ;
    /**
   * @type {ToMarkdownHandle}
   * @param {FootnoteDefinition} node
   */ function footnoteDefinition(node, _, state, info) {
        const tracker = state.createTracker(info);
        let value = tracker.move('[^');
        const exit = state.enter('footnoteDefinition');
        const subexit = state.enter('label');
        value += tracker.move(state.safe(state.associationId(node), {
            before: value,
            after: ']'
        }));
        subexit();
        value += tracker.move(']:');
        if (node.children && node.children.length > 0) {
            tracker.shift(4);
            value += tracker.move((firstLineBlank ? '\n' : ' ') + state.indentLines(state.containerFlow(node, tracker.current()), firstLineBlank ? mapAll : mapExceptFirst));
        }
        exit();
        return value;
    }
}
/** @type {Map} */ function mapExceptFirst(line, index, blank) {
    return index === 0 ? line : mapAll(line, index, blank);
}
/** @type {Map} */ function mapAll(line, index, blank) {
    return (blank ? '' : '    ') + line;
}
}),
"[project]/node_modules/mdast-util-gfm-strikethrough/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmStrikethroughFromMarkdown",
    ()=>gfmStrikethroughFromMarkdown,
    "gfmStrikethroughToMarkdown",
    ()=>gfmStrikethroughToMarkdown
]);
/**
 * @import {Delete} from 'mdast'
 * @import {
 *   CompileContext,
 *   Extension as FromMarkdownExtension,
 *   Handle as FromMarkdownHandle
 * } from 'mdast-util-from-markdown'
 * @import {
 *   Attention,
 *   ConstructName,
 *   Handle as ToMarkdownHandle,
 *   Options as ToMarkdownExtension
 * } from 'mdast-util-to-markdown'
 */ /**
 * List of constructs that occur in phrasing (paragraphs, headings), but cannot
 * contain strikethrough.
 * So they sort of cancel each other out.
 * Note: could use a better name.
 *
 * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>
 *
 * @type {Array<ConstructName>}
 */ const constructsWithoutStrikethrough = [
    'autolink',
    'destinationLiteral',
    'destinationRaw',
    'reference',
    'titleQuote',
    'titleApostrophe'
];
handleDelete.attention = attentionDelete;
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
    return {
        canContainEols: [
            'delete'
        ],
        enter: {
            strikethrough: enterStrikethrough
        },
        exit: {
            strikethrough: exitStrikethrough
        }
    };
}
function gfmStrikethroughToMarkdown() {
    return {
        handlers: {
            delete: handleDelete
        },
        unsafe: [
            {
                character: '~',
                inConstruct: 'phrasing',
                notInConstruct: constructsWithoutStrikethrough
            }
        ]
    };
}
/**
 * Enter strikethrough.
 *
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterStrikethrough(token) {
    this.enter({
        type: 'delete',
        children: [],
        position: undefined
    }, token);
}
/**
 * Exit strikethrough.
 *
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitStrikethrough(token) {
    this.exit(token);
}
/**
 * Serialize a delete node.
 *
 * @type {ToMarkdownHandle}
 * @param {Delete} node
 *   Node to serialize.
 */ function handleDelete(node, _, state, info) {
    // To do: next major: empty this function, like emphasis and strong handlers,
    // this is no longer needed.
    const tracker = state.createTracker(info);
    const sequence = state.stack.includes('strikethrough') ? '~' : '~~';
    const exit = state.enter('strikethrough');
    let value = tracker.move(sequence);
    value += state.containerPhrasing(node, {
        ...tracker.current(),
        before: value,
        after: '~'
    });
    value += tracker.move(sequence);
    exit();
    return value;
}
/**
 * Serialize a delete node as attention.
 *
 * @type {Attention}
 */ function attentionDelete() {
    return {
        construct: 'strikethrough',
        markers: [
            '~'
        ],
        sizes: [
            2,
            1
        ]
    };
}
/**
 * Peek the first character of a delete node.
 *
 * @type {ToMarkdownHandle}
 */ function peekDelete() {
    return '~';
}
}),
"[project]/node_modules/mdast-util-gfm-table/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTableFromMarkdown",
    ()=>gfmTableFromMarkdown,
    "gfmTableToMarkdown",
    ()=>gfmTableToMarkdown
]);
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('mdast').TableRow} TableRow
 *
 * @typedef {import('markdown-table').Options} MarkdownTableOptions
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 *
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').State} State
 * @typedef {import('mdast-util-to-markdown').Info} Info
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [tableCellPadding=true]
 *   Whether to add a space of padding between delimiters and cells (default:
 *   `true`).
 * @property {boolean | null | undefined} [tablePipeAlign=true]
 *   Whether to align the delimiters (default: `true`).
 * @property {MarkdownTableOptions['stringLength'] | null | undefined} [stringLength]
 *   Function to detect the length of table cell content, used when aligning
 *   the delimiters between cells (optional).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$table$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/markdown-table/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__handle__as__defaultHandlers$3e$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/index.js [app-rsc] (ecmascript) <export handle as defaultHandlers>");
;
;
;
function gfmTableFromMarkdown() {
    return {
        enter: {
            table: enterTable,
            tableData: enterCell,
            tableHeader: enterCell,
            tableRow: enterRow
        },
        exit: {
            codeText: exitCodeText,
            table: exitTable,
            tableData: exit,
            tableHeader: exit,
            tableRow: exit
        }
    };
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterTable(token) {
    const align = token._align;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(align, 'expected `_align` on table');
    this.enter({
        type: 'table',
        align: align.map(function(d) {
            return d === 'none' ? null : d;
        }),
        children: []
    }, token);
    this.data.inTable = true;
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitTable(token) {
    this.exit(token);
    this.data.inTable = undefined;
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterRow(token) {
    this.enter({
        type: 'tableRow',
        children: []
    }, token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exit(token) {
    this.exit(token);
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function enterCell(token) {
    this.enter({
        type: 'tableCell',
        children: []
    }, token);
}
// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitCodeText(token) {
    let value = this.resume();
    if (this.data.inTable) {
        value = value.replace(/\\([\\|])/g, replace);
    }
    const node = this.stack[this.stack.length - 1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'inlineCode');
    node.value = value;
    this.exit(token);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */ function replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === '|' ? $1 : $0;
}
function gfmTableToMarkdown(options) {
    const settings = options || {};
    const padding = settings.tableCellPadding;
    const alignDelimiters = settings.tablePipeAlign;
    const stringLength = settings.stringLength;
    const around = padding ? ' ' : '|';
    return {
        unsafe: [
            {
                character: '\r',
                inConstruct: 'tableCell'
            },
            {
                character: '\n',
                inConstruct: 'tableCell'
            },
            // A pipe, when followed by a tab or space (padding), or a dash or colon
            // (unpadded delimiter row), could result in a table.
            {
                atBreak: true,
                character: '|',
                after: '[\t :-]'
            },
            // A pipe in a cell must be encoded.
            {
                character: '|',
                inConstruct: 'tableCell'
            },
            // A colon must be followed by a dash, in which case it could start a
            // delimiter row.
            {
                atBreak: true,
                character: ':',
                after: '-'
            },
            // A delimiter row can also start with a dash, when followed by more
            // dashes, a colon, or a pipe.
            // This is a stricter version than the built in check for lists, thematic
            // breaks, and setex heading underlines though:
            // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
            {
                atBreak: true,
                character: '-',
                after: '[:|-]'
            }
        ],
        handlers: {
            inlineCode: inlineCodeWithTable,
            table: handleTable,
            tableCell: handleTableCell,
            tableRow: handleTableRow
        }
    };
    //TURBOPACK unreachable
    ;
    /**
   * @type {ToMarkdownHandle}
   * @param {Table} node
   */ function handleTable(node, _, state, info) {
        return serializeData(handleTableAsData(node, state, info), node.align);
    }
    /**
   * This function isn’t really used normally, because we handle rows at the
   * table level.
   * But, if someone passes in a table row, this ensures we make somewhat sense.
   *
   * @type {ToMarkdownHandle}
   * @param {TableRow} node
   */ function handleTableRow(node, _, state, info) {
        const row = handleTableRowAsData(node, state, info);
        const value = serializeData([
            row
        ]);
        // `markdown-table` will always add an align row
        return value.slice(0, value.indexOf('\n'));
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {TableCell} node
   */ function handleTableCell(node, _, state, info) {
        const exit = state.enter('tableCell');
        const subexit = state.enter('phrasing');
        const value = state.containerPhrasing(node, {
            ...info,
            before: around,
            after: around
        });
        subexit();
        exit();
        return value;
    }
    /**
   * @param {Array<Array<string>>} matrix
   * @param {Array<string | null | undefined> | null | undefined} [align]
   */ function serializeData(matrix, align) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$markdown$2d$table$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownTable"])(matrix, {
            align,
            // @ts-expect-error: `markdown-table` types should support `null`.
            alignDelimiters,
            // @ts-expect-error: `markdown-table` types should support `null`.
            padding,
            // @ts-expect-error: `markdown-table` types should support `null`.
            stringLength
        });
    }
    /**
   * @param {Table} node
   * @param {State} state
   * @param {Info} info
   */ function handleTableAsData(node, state, info) {
        const children = node.children;
        let index = -1;
        /** @type {Array<Array<string>>} */ const result = [];
        const subexit = state.enter('table');
        while(++index < children.length){
            result[index] = handleTableRowAsData(children[index], state, info);
        }
        subexit();
        return result;
    }
    /**
   * @param {TableRow} node
   * @param {State} state
   * @param {Info} info
   */ function handleTableRowAsData(node, state, info) {
        const children = node.children;
        let index = -1;
        /** @type {Array<string>} */ const result = [];
        const subexit = state.enter('tableRow');
        while(++index < children.length){
            // Note: the positional info as used here is incorrect.
            // Making it correct would be impossible due to aligning cells?
            // And it would need copy/pasting `markdown-table` into this project.
            result[index] = handleTableCell(children[index], node, state, info);
        }
        subexit();
        return result;
    }
    /**
   * @type {ToMarkdownHandle}
   * @param {InlineCode} node
   */ function inlineCodeWithTable(node, parent, state) {
        let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__handle__as__defaultHandlers$3e$__["defaultHandlers"].inlineCode(node, parent, state);
        if (state.stack.includes('tableCell')) {
            value = value.replace(/\|/g, '\\$&');
        }
        return value;
    }
}
}),
"[project]/node_modules/mdast-util-gfm-task-list-item/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTaskListItemFromMarkdown",
    ()=>gfmTaskListItemFromMarkdown,
    "gfmTaskListItemToMarkdown",
    ()=>gfmTaskListItemToMarkdown
]);
/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__handle__as__defaultHandlers$3e$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/index.js [app-rsc] (ecmascript) <export handle as defaultHandlers>");
;
;
function gfmTaskListItemFromMarkdown() {
    return {
        exit: {
            taskListCheckValueChecked: exitCheck,
            taskListCheckValueUnchecked: exitCheck,
            paragraph: exitParagraphWithTaskListItem
        }
    };
}
function gfmTaskListItemToMarkdown() {
    return {
        unsafe: [
            {
                atBreak: true,
                character: '-',
                after: '[:|-]'
            }
        ],
        handlers: {
            listItem: listItemWithTaskListItem
        }
    };
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitCheck(token) {
    // We’re always in a paragraph, in a list item.
    const node = this.stack[this.stack.length - 2];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'listItem');
    node.checked = token.type === 'taskListCheckValueChecked';
}
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */ function exitParagraphWithTaskListItem(token) {
    const parent = this.stack[this.stack.length - 2];
    if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean') {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(node.type === 'paragraph');
        const head = node.children[0];
        if (head && head.type === 'text') {
            const siblings = parent.children;
            let index = -1;
            /** @type {Paragraph | undefined} */ let firstParaghraph;
            while(++index < siblings.length){
                const sibling = siblings[index];
                if (sibling.type === 'paragraph') {
                    firstParaghraph = sibling;
                    break;
                }
            }
            if (firstParaghraph === node) {
                // Must start with a space or a tab.
                head.value = head.value.slice(1);
                if (head.value.length === 0) {
                    node.children.shift();
                } else if (node.position && head.position && typeof head.position.start.offset === 'number') {
                    head.position.start.column++;
                    head.position.start.offset++;
                    node.position.start = Object.assign({}, head.position.start);
                }
            }
        }
    }
    this.exit(token);
}
/**
 * @type {ToMarkdownHandle}
 * @param {ListItem} node
 */ function listItemWithTaskListItem(node, parent, state, info) {
    const head = node.children[0];
    const checkable = typeof node.checked === 'boolean' && head && head.type === 'paragraph';
    const checkbox = '[' + (node.checked ? 'x' : ' ') + '] ';
    const tracker = state.createTracker(info);
    if (checkable) {
        tracker.move(checkbox);
    }
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__handle__as__defaultHandlers$3e$__["defaultHandlers"].listItem(node, parent, state, {
        ...info,
        ...tracker.current()
    });
    if (checkable) {
        value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
    }
    return value;
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} $0
   * @returns {string}
   */ function check($0) {
        return $0 + checkbox;
    }
}
}),
"[project]/node_modules/mdast-util-gfm/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmFromMarkdown",
    ()=>gfmFromMarkdown,
    "gfmToMarkdown",
    ()=>gfmToMarkdown
]);
/**
 * @import {Extension as FromMarkdownExtension} from 'mdast-util-from-markdown'
 * @import {Options} from 'mdast-util-gfm'
 * @import {Options as ToMarkdownExtension} from 'mdast-util-to-markdown'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$autolink$2d$literal$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm-autolink-literal/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$footnote$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm-footnote/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$strikethrough$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm-strikethrough/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$table$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm-table/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$task$2d$list$2d$item$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm-task-list-item/lib/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
function gfmFromMarkdown() {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$autolink$2d$literal$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmAutolinkLiteralFromMarkdown"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$footnote$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmFootnoteFromMarkdown"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$strikethrough$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmStrikethroughFromMarkdown"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$table$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTableFromMarkdown"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$task$2d$list$2d$item$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTaskListItemFromMarkdown"])()
    ];
}
function gfmToMarkdown(options) {
    return {
        extensions: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$autolink$2d$literal$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmAutolinkLiteralToMarkdown"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$footnote$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmFootnoteToMarkdown"])(options),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$strikethrough$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmStrikethroughToMarkdown"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$table$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTableToMarkdown"])(options),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2d$task$2d$list$2d$item$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTaskListItemToMarkdown"])()
        ]
    };
}
}),
"[project]/node_modules/mdast-util-phrasing/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "phrasing",
    ()=>phrasing
]);
/**
 * @typedef {import('mdast').Html} Html
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-is/lib/index.js [app-rsc] (ecmascript)");
;
const phrasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convert"])([
    'break',
    'delete',
    'emphasis',
    // To do: next major: removed since footnotes were added to GFM.
    'footnote',
    'footnoteReference',
    'image',
    'imageReference',
    'inlineCode',
    // Enabled by `mdast-util-math`:
    'inlineMath',
    'link',
    'linkReference',
    // Enabled by `mdast-util-mdx`:
    'mdxJsxTextElement',
    // Enabled by `mdast-util-mdx`:
    'mdxTextExpression',
    'strong',
    'text',
    // Enabled by `mdast-util-directive`:
    'textDirective'
]);
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Blockquote, Parents} from 'mdast'
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 */ /**
 * Serialize a blockquote node.
 *
 * @param {Blockquote} node
 *   Node to serialize.
 * @param {Parents | undefined} _
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @param {Info} info
 *   Info on surrounding context.
 * @returns {string}
 *   Serialized markdown.
 */ __turbopack_context__.s([
    "blockquote",
    ()=>blockquote
]);
function blockquote(node, _, state, info) {
    const exit = state.enter('blockquote');
    const tracker = state.createTracker(info);
    tracker.move('> ');
    tracker.shift(2);
    const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
    exit();
    return value;
}
/**
 * Indent lines w/ blockquote markers.
 *
 * @type {Map}
 */ function map(line, _, blank) {
    return '>' + (blank ? '' : ' ') + line;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/break.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hardBreak",
    ()=>hardBreak
]);
/**
 * @import {Break, Parents} from 'mdast'
 * @import {Info, State} from 'mdast-util-to-markdown'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$pattern$2d$in$2d$scope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js [app-rsc] (ecmascript)");
;
function hardBreak(_, _1, state, info) {
    let index = -1;
    while(++index < state.unsafe.length){
        const pattern = state.unsafe[index];
        // If we can’t put unconditional eols in this construct (setext headings,
        // tables), use a space instead.
        if (pattern.character === '\n' && !pattern.before && !pattern.after && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$pattern$2d$in$2d$scope$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patternInScope"])(state.stack, pattern)) {
            return /[\t ]/.test(info.before) ? '' : ' ';
        }
    }
    return '\\\n';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/code.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "code",
    ()=>code
]);
/**
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 * @import {Code, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$longest$2d$streak$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/longest-streak/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$code$2d$as$2d$indented$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$fence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-fence.js [app-rsc] (ecmascript)");
;
;
;
function code(node, _, state, info) {
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$fence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkFence"])(state);
    const raw = node.value || '';
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$code$2d$as$2d$indented$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCodeAsIndented"])(node, state)) {
        const exit = state.enter('codeIndented');
        const value = state.indentLines(raw, map);
        exit();
        return value;
    }
    const tracker = state.createTracker(info);
    const sequence = marker.repeat(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$longest$2d$streak$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["longestStreak"])(raw, marker) + 1, 3));
    const exit = state.enter('codeFenced');
    const suffix = marker === '`' ? 'GraveAccent' : 'Tilde';
    let value = tracker.move(sequence);
    if (node.lang) {
        const subexit = state.enter(`codeFencedLang${suffix}`);
        value += tracker.move(state.safe(node.lang, {
            before: value,
            after: ' ',
            encode: [
                '`'
            ],
            ...tracker.current()
        }));
        subexit();
    }
    if (node.lang && node.meta) {
        const subexit = state.enter(`codeFencedMeta${suffix}`);
        value += tracker.move(' ');
        value += tracker.move(state.safe(node.meta, {
            before: value,
            after: '\n',
            encode: [
                '`'
            ],
            ...tracker.current()
        }));
        subexit();
    }
    value += tracker.move('\n');
    if (raw) {
        value += tracker.move(raw + '\n');
    }
    value += tracker.move(sequence);
    exit();
    return value;
}
/**
 * Indent lines w/ code indent.
 *
 * @type {Map}
 */ function map(line, _, blank) {
    return (blank ? '' : '    ') + line;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/definition.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "definition",
    ()=>definition
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Definition, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-quote.js [app-rsc] (ecmascript)");
;
function definition(node, _, state, info) {
    const quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkQuote"])(state);
    const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
    const exit = state.enter('definition');
    let subexit = state.enter('label');
    const tracker = state.createTracker(info);
    let value = tracker.move('[');
    value += tracker.move(state.safe(state.associationId(node), {
        before: value,
        after: ']',
        ...tracker.current()
    }));
    value += tracker.move(']: ');
    subexit();
    if (// If there’s no url, or…
    !node.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter('destinationLiteral');
        value += tracker.move('<');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: '>',
            ...tracker.current()
        }));
        value += tracker.move('>');
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter('destinationRaw');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? ' ' : '\n',
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(' ' + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    exit();
    return value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emphasis",
    ()=>emphasis
]);
/**
 * @import {AttentionInfo, Info, State} from 'mdast-util-to-markdown'
 * @import {Emphasis, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$emphasis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js [app-rsc] (ecmascript)");
;
emphasis.attention = attention;
emphasis.peek = peek;
function emphasis(node, _, state, info) {
    const exit = state.enter('phrasing');
    const value = state.containerPhrasing({
        type: 'root',
        children: [
            node
        ]
    }, info);
    exit();
    return value;
}
/**
 * Serialize an emphasis node as attention.
 *
 * @param {Emphasis} _
 *   Node to serialize.
 * @param {State} state
 *   Info passed around.
 * @returns {AttentionInfo}
 *   Info on how to serialize the node.
 */ function attention(_, state) {
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$emphasis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkEmphasis"])(state);
    return {
        construct: 'emphasis',
        markers: marker === '*' ? [
            '*',
            '_'
        ] : [
            '_',
            '*'
        ],
        sizes: [
            1
        ]
    };
}
/**
 * Peek at this node.
 *
 * @param {Emphasis} _
 *   Node to serialize.
 * @param {Parents | undefined} _1
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Start of the serialized markdown.
 */ function peek(_, _1, state) {
    return state.options.emphasis || '*';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/heading.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heading",
    ()=>heading
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Heading, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$encode$2d$character$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$heading$2d$as$2d$setext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js [app-rsc] (ecmascript)");
;
;
function heading(node, _, state, info) {
    const rank = Math.max(Math.min(6, node.depth || 1), 1);
    const tracker = state.createTracker(info);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$heading$2d$as$2d$setext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatHeadingAsSetext"])(node, state)) {
        const exit = state.enter('headingSetext');
        const subexit = state.enter('phrasing');
        const value = state.containerPhrasing(node, {
            ...tracker.current(),
            before: '\n',
            after: '\n'
        });
        subexit();
        exit();
        return value + '\n' + (rank === 1 ? '=' : '-').repeat(// The whole size…
        value.length - // Minus the position of the character after the last EOL (or
        // 0 if there is none)…
        (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1));
    }
    const sequence = '#'.repeat(rank);
    const exit = state.enter('headingAtx');
    const subexit = state.enter('phrasing');
    // Note: for proper tracking, we should reset the output positions when there
    // is no content returned, because then the space is not output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    tracker.move(sequence + ' ');
    let value = state.containerPhrasing(node, {
        before: '# ',
        after: '\n',
        ...tracker.current()
    });
    const head = value.charCodeAt(0);
    if (head === 9 /* `\t` */  || head === 32 /* ` ` */ ) {
        // To do: what effect has the character reference on tracking?
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$encode$2d$character$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeCharacterReference"])(head) + value.slice(1);
    }
    value = value ? sequence + ' ' + value : sequence;
    if (state.options.closeAtx) {
        value += ' ' + sequence;
    }
    subexit();
    exit();
    return value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html
]);
/**
 * @import {Html} from 'mdast'
 */ html.peek = htmlPeek;
function html(node) {
    return node.value || '';
}
/**
 * Peek at this node.
 *
 * @returns {string}
 *   Start of the serialized markdown.
 */ function htmlPeek() {
    return '<';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageReference",
    ()=>imageReference
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {ImageReference, Parents} from 'mdast'
 */ imageReference.peek = imageReferencePeek;
function imageReference(node, _, state, info) {
    const type = node.referenceType;
    const exit = state.enter('imageReference');
    let subexit = state.enter('label');
    const tracker = state.createTracker(info);
    let value = tracker.move('![');
    const alt = state.safe(node.alt, {
        before: value,
        after: ']',
        ...tracker.current()
    });
    value += tracker.move(alt + '][');
    subexit();
    // Hide that we’re in phrasing as things like attention or code cannot form
    // in references.
    // Character escapes and references *do* work.
    // It is important to know about other constructs, such as table cells.
    const stack = state.stack;
    state.stack = stack.filter(function(d) {
        return d !== 'phrasing';
    });
    subexit = state.enter('reference');
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = state.safe(state.associationId(node), {
        before: value,
        after: ']',
        ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit();
    if (type === 'full' || !alt || alt !== reference) {
        value += tracker.move(reference + ']');
    } else if (type === 'shortcut') {
        // Remove the unwanted `[`.
        value = value.slice(0, -1);
    } else {
        value += tracker.move(']');
    }
    return value;
}
/**
 * Peek at this node.
 *
 * @returns {string}
 *   Start of the serialized markdown.
 */ function imageReferencePeek() {
    return '!';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/image.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "image",
    ()=>image
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Image, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-quote.js [app-rsc] (ecmascript)");
;
image.peek = imagePeek;
function image(node, _, state, info) {
    const quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkQuote"])(state);
    const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
    const exit = state.enter('image');
    let subexit = state.enter('label');
    const tracker = state.createTracker(info);
    let value = tracker.move('![');
    value += tracker.move(state.safe(node.alt, {
        before: value,
        after: ']',
        ...tracker.current()
    }));
    value += tracker.move('](');
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter('destinationLiteral');
        value += tracker.move('<');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: '>',
            ...tracker.current()
        }));
        value += tracker.move('>');
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter('destinationRaw');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? ' ' : ')',
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(' ' + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    value += tracker.move(')');
    exit();
    return value;
}
/**
 * Peek at this node.
 *
 * @returns {string}
 *   Start of the serialized markdown.
 */ function imagePeek() {
    return '!';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handle",
    ()=>handle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$blockquote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$break$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/break.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$definition$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/definition.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$emphasis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$heading$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/heading.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$image$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$inline$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$link$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/list.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$list$2d$item$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/list-item.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$paragraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/root.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$strong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/strong.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$thematic$2d$break$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const handle = {
    blockquote: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$blockquote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blockquote"],
    break: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$break$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hardBreak"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["code"],
    definition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$definition$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["definition"],
    emphasis: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$emphasis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emphasis"],
    hardBreak: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$break$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hardBreak"],
    heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$heading$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heading"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["image"],
    imageReference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$image$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageReference"],
    inlineCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$inline$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inlineCode"],
    link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["link"],
    linkReference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$link$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkReference"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["list"],
    listItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$list$2d$item$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listItem"],
    paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$paragraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["paragraph"],
    root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["root"],
    strong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$strong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strong"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"],
    thematicBreak: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$thematic$2d$break$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["thematicBreak"]
};
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/index.js [app-rsc] (ecmascript) <export handle as defaultHandlers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHandlers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$handle$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/handle/index.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inlineCode",
    ()=>inlineCode
]);
/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {InlineCode, Parents} from 'mdast'
 */ inlineCode.peek = inlineCodePeek;
function inlineCode(node, _, state) {
    let value = node.value || '';
    let sequence = '`';
    let index = -1;
    // If there is a single grave accent on its own in the code, use a fence of
    // two.
    // If there are two in a row, use one.
    while(new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)){
        sequence += '`';
    }
    // If this is not just spaces or eols (tabs don’t count), and either the
    // first or last character are a space, eol, or tick, then pad with spaces.
    if (/[^\n\r ]/.test(value) && (/^[\n\r ]/.test(value) && /[\n\r ]$/.test(value) || /^`|`$/.test(value))) {
        value = ' ' + value + ' ';
    }
    // We have a potential problem: certain characters after eols could result in
    // blocks being seen.
    // For example, if someone injected the string `'\n# b'`, then that would
    // result in an ATX heading.
    // We can’t escape characters in `inlineCode`, but because eols are
    // transformed to spaces when going from markdown to HTML anyway, we can swap
    // them out.
    while(++index < state.unsafe.length){
        const pattern = state.unsafe[index];
        const expression = state.compilePattern(pattern);
        // Only look for `atBreak`s.
        // Btw: note that `atBreak` patterns will always start the regex at LF or
        // CR.
        if (!pattern.atBreak) continue;
        /** @type {RegExpExecArray | null} */ let match;
        while(match = expression.exec(value)){
            let position = match.index;
            // Support CRLF (patterns only look for one of the characters).
            if (value.charCodeAt(position) === 10 /* `\n` */  && value.charCodeAt(position - 1) === 13 /* `\r` */ ) {
                position--;
            }
            value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
        }
    }
    return sequence + value + sequence;
}
/**
 * Peek at this node.
 *
 * @returns {string}
 *   Start of the serialized markdown.
 */ function inlineCodePeek() {
    return '`';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkReference",
    ()=>linkReference
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {LinkReference, Parents} from 'mdast'
 */ linkReference.peek = linkReferencePeek;
function linkReference(node, _, state, info) {
    const type = node.referenceType;
    const exit = state.enter('linkReference');
    let subexit = state.enter('label');
    const tracker = state.createTracker(info);
    let value = tracker.move('[');
    const text = state.containerPhrasing(node, {
        before: value,
        after: ']',
        ...tracker.current()
    });
    value += tracker.move(text + '][');
    subexit();
    // Hide that we’re in phrasing as things like attention or code cannot form
    // in references.
    // Character escapes and references *do* work.
    // It is important to know about other constructs, such as table cells.
    const stack = state.stack;
    state.stack = stack.filter(function(d) {
        return d !== 'phrasing';
    });
    subexit = state.enter('reference');
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = state.safe(state.associationId(node), {
        before: value,
        after: ']',
        ...tracker.current()
    });
    subexit();
    state.stack = stack;
    exit();
    if (type === 'full' || !text || text !== reference) {
        value += tracker.move(reference + ']');
    } else if (type === 'shortcut') {
        // Remove the unwanted `[`.
        value = value.slice(0, -1);
    } else {
        value += tracker.move(']');
    }
    return value;
}
/**
 * Peek at this node.
 *
 * @returns {string}
 *   Start of the serialized markdown.
 */ function linkReferencePeek() {
    return '[';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "link",
    ()=>link
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Link, Parents} from 'mdast'
 * @import {Exit} from '../types.js'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-quote.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$link$2d$as$2d$autolink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js [app-rsc] (ecmascript)");
;
;
link.peek = linkPeek;
function link(node, _, state, info) {
    const quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$quote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkQuote"])(state);
    const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
    const tracker = state.createTracker(info);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$link$2d$as$2d$autolink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLinkAsAutolink"])(node, state)) {
        // Hide that we’re in phrasing as things like attention or code cannot form
        // in autolinks.
        // Character escapes also don’t work (nor character references),
        // but that is a different matter, which `safe.js` handles for `autolink`.
        // It is important to know about other constructs, such as table cells.
        const stack = state.stack;
        state.stack = stack.filter(function(d) {
            return d !== 'phrasing';
        });
        const exit = state.enter('autolink');
        let value = tracker.move('<');
        value += tracker.move(state.containerPhrasing(node, {
            before: value,
            after: '>',
            ...tracker.current()
        }));
        value += tracker.move('>');
        exit();
        state.stack = stack;
        return value;
    }
    const exit = state.enter('link');
    let subexit = state.enter('label');
    let value = tracker.move('[');
    value += tracker.move(state.containerPhrasing(node, {
        before: value,
        after: '](',
        ...tracker.current()
    }));
    value += tracker.move('](');
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = state.enter('destinationLiteral');
        value += tracker.move('<');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: '>',
            ...tracker.current()
        }));
        value += tracker.move('>');
    } else {
        // No whitespace, raw is prettier.
        subexit = state.enter('destinationRaw');
        value += tracker.move(state.safe(node.url, {
            before: value,
            after: node.title ? ' ' : ')',
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = state.enter(`title${suffix}`);
        value += tracker.move(' ' + quote);
        value += tracker.move(state.safe(node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    value += tracker.move(')');
    exit();
    return value;
}
/**
 * Peek at this node.
 *
 * @param {Link} node
 *   Node to peek at.
 * @param {Parents | undefined} _
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Start of the serialized markdown.
 */ function linkPeek(node, _, state) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$format$2d$link$2d$as$2d$autolink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLinkAsAutolink"])(node, state) ? '<' : '[';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/list-item.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listItem",
    ()=>listItem
]);
/**
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 * @import {ListItem, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$list$2d$item$2d$indent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js [app-rsc] (ecmascript)");
;
;
function listItem(node, parent, state, info) {
    const listItemIndent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$list$2d$item$2d$indent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkListItemIndent"])(state);
    let bullet = state.bulletCurrent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBullet"])(state);
    // Add the marker value for ordered lists.
    if (parent && parent.type === 'list' && parent.ordered) {
        bullet = (typeof parent.start === 'number' && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
    }
    let size = bullet.length + 1;
    if (listItemIndent === 'tab' || listItemIndent === 'mixed' && (parent && parent.type === 'list' && parent.spread || node.spread)) {
        size = Math.ceil(size / 4) * 4;
    }
    const tracker = state.createTracker(info);
    tracker.move(bullet + ' '.repeat(size - bullet.length));
    tracker.shift(size);
    const exit = state.enter('listItem');
    const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
    exit();
    return value;
    //TURBOPACK unreachable
    ;
    /**
   * Indent lines of the list item.
   *
   * @type {Map}
   */ function map(line, index, blank) {
        if (index) {
            return (blank ? '' : ' '.repeat(size)) + line;
        }
        return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line;
    }
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/list.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "list",
    ()=>list
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {List, Parents} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2d$other$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2d$ordered$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-rule.js [app-rsc] (ecmascript)");
;
;
;
;
function list(node, parent, state, info) {
    const exit = state.enter('list');
    const bulletCurrent = state.bulletCurrent;
    /** @type {string} */ let bullet = node.ordered ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2d$ordered$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBulletOrdered"])(state) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBullet"])(state);
    /** @type {string} */ const bulletOther = node.ordered ? bullet === '.' ? ')' : '.' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2d$other$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBulletOther"])(state);
    let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
    if (!node.ordered) {
        const firstListItem = node.children ? node.children[0] : undefined;
        // If there’s an empty first list item directly in two list items,
        // we have to use a different bullet:
        //
        // ```markdown
        // * - *
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if (// Bullet could be used as a thematic break marker:
        (bullet === '*' || bullet === '-') && // Empty first list item:
        firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
        state.stack[state.stack.length - 1] === 'list' && state.stack[state.stack.length - 2] === 'listItem' && state.stack[state.stack.length - 3] === 'list' && state.stack[state.stack.length - 4] === 'listItem' && // That are each the first child.
        state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) {
            useDifferentMarker = true;
        }
        // If there’s a thematic break at the start of the first list item,
        // we have to use a different bullet:
        //
        // ```markdown
        // * ---
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkRule"])(state) === bullet && firstListItem) {
            let index = -1;
            while(++index < node.children.length){
                const item = node.children[index];
                if (item && item.type === 'listItem' && item.children && item.children[0] && item.children[0].type === 'thematicBreak') {
                    useDifferentMarker = true;
                    break;
                }
            }
        }
    }
    if (useDifferentMarker) {
        bullet = bulletOther;
    }
    state.bulletCurrent = bullet;
    const value = state.containerFlow(node, info);
    state.bulletLastUsed = bullet;
    state.bulletCurrent = bulletCurrent;
    exit();
    return value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Paragraph, Parents} from 'mdast'
 */ /**
 * Serialize a paragraph node.
 *
 * @param {Paragraph} node
 *   Node to serialize.
 * @param {Parents | undefined} _
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @param {Info} info
 *   Info on surrounding context.
 * @returns {string}
 *   Serialized markdown.
 */ __turbopack_context__.s([
    "paragraph",
    ()=>paragraph
]);
function paragraph(node, _, state, info) {
    const exit = state.enter('paragraph');
    const subexit = state.enter('phrasing');
    const value = state.containerPhrasing(node, info);
    subexit();
    exit();
    return value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/root.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "root",
    ()=>root
]);
/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Root} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$phrasing$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-phrasing/lib/index.js [app-rsc] (ecmascript)");
;
function root(node, _, state, info) {
    // Note: `html` nodes are ambiguous.
    const hasPhrasing = node.children.some(function(d) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$phrasing$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["phrasing"])(d);
    });
    if (!hasPhrasing) return state.containerFlow(node, info);
    const exit = state.enter('phrasing');
    const value = state.containerPhrasing(node, info);
    exit();
    return value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/strong.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "strong",
    ()=>strong
]);
/**
 * @import {AttentionInfo, Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Strong} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$strong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-strong.js [app-rsc] (ecmascript)");
;
strong.attention = attention;
strong.peek = peek;
function strong(node, _, state, info) {
    const exit = state.enter('phrasing');
    const value = state.containerPhrasing({
        type: 'root',
        children: [
            node
        ]
    }, info);
    exit();
    return value;
}
/**
 * Serialize a strong node as attention.
 *
 * @param {Strong} _
 *   Node to serialize.
 * @param {State} state
 *   Info passed around.
 * @returns {AttentionInfo}
 *   Info on how to serialize the node.
 */ function attention(_, state) {
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$strong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkStrong"])(state);
    return {
        construct: 'strong',
        markers: marker === '*' ? [
            '*',
            '_'
        ] : [
            '_',
            '*'
        ],
        sizes: [
            2
        ]
    };
}
/**
 * Peek at this node.
 *
 * @param {Strong} _
 *   Node to serialize.
 * @param {Parents | undefined} _1
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Start of the serialized markdown.
 */ function peek(_, _1, state) {
    return state.options.strong || '*';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/text.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Text} from 'mdast'
 */ /**
 * Serialize a text node.
 *
 * @param {Text} node
 *   Node to serialize.
 * @param {Parents | undefined} parent
 *   Parent node.
 * @param {State} state
 *   Info passed around.
 * @param {Info} info
 *   Info on surrounding context.
 * @returns {string}
 *   Serialized markdown.
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
function text(node, parent, state, info) {
    /* c8 ignore next -- parent always passed */ const siblings = parent ? parent.children : [];
    const index = siblings.indexOf(node);
    return state.safe(node.value, {
        ...info,
        afterNode: siblings[index + 1],
        beforeNode: siblings[index - 1]
    });
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "thematicBreak",
    ()=>thematicBreak
]);
/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Parents, ThematicBreak} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2d$repetition$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-rule.js [app-rsc] (ecmascript)");
;
;
function thematicBreak(_, _1, state) {
    const value = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkRule"])(state) + (state.options.ruleSpaces ? ' ' : '')).repeat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$rule$2d$repetition$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkRuleRepetition"])(state));
    return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred ordered list bullet option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['bulletOrdered'], null | undefined>}
 *   Preferred ordered list bullet.
 */ __turbopack_context__.s([
    "checkBulletOrdered",
    ()=>checkBulletOrdered
]);
function checkBulletOrdered(state) {
    const marker = state.options.bulletOrdered || '.';
    if (marker !== '.' && marker !== ')') {
        throw new Error('Cannot serialize items with `' + marker + '` for `options.bulletOrdered`, expected `.` or `)`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkBulletOther",
    ()=>checkBulletOther
]);
/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js [app-rsc] (ecmascript)");
;
function checkBulletOther(state) {
    const bullet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$markdown$2f$lib$2f$util$2f$check$2d$bullet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkBullet"])(state);
    const bulletOther = state.options.bulletOther;
    if (!bulletOther) {
        return bullet === '*' ? '-' : '*';
    }
    if (bulletOther !== '*' && bulletOther !== '+' && bulletOther !== '-') {
        throw new Error('Cannot serialize items with `' + bulletOther + '` for `options.bulletOther`, expected `*`, `+`, or `-`');
    }
    if (bulletOther === bullet) {
        throw new Error('Expected `bullet` (`' + bullet + '`) and `bulletOther` (`' + bulletOther + '`) to be different');
    }
    return bulletOther;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred list bullet option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['bullet'], null | undefined>}
 *   Preferred list bullet.
 */ __turbopack_context__.s([
    "checkBullet",
    ()=>checkBullet
]);
function checkBullet(state) {
    const marker = state.options.bullet || '*';
    if (marker !== '*' && marker !== '+' && marker !== '-') {
        throw new Error('Cannot serialize items with `' + marker + '` for `options.bullet`, expected `*`, `+`, or `-`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred emphasis option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['emphasis'], null | undefined>}
 *   Preferred emphasis marker.
 */ __turbopack_context__.s([
    "checkEmphasis",
    ()=>checkEmphasis
]);
function checkEmphasis(state) {
    const marker = state.options.emphasis || '*';
    if (marker !== '*' && marker !== '_') {
        throw new Error('Cannot serialize emphasis with `' + marker + '` for `options.emphasis`, expected `*`, or `_`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-fence.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred fence option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['fence'], null | undefined>}
 *   Preferred fence marker.
 */ __turbopack_context__.s([
    "checkFence",
    ()=>checkFence
]);
function checkFence(state) {
    const marker = state.options.fence || '`';
    if (marker !== '`' && marker !== '~') {
        throw new Error('Cannot serialize code with `' + marker + '` for `options.fence`, expected `` ` `` or `~`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred list item indent option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['listItemIndent'], null | undefined>}
 *   Preferred list item indent.
 */ __turbopack_context__.s([
    "checkListItemIndent",
    ()=>checkListItemIndent
]);
function checkListItemIndent(state) {
    const style = state.options.listItemIndent || 'one';
    if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
        throw new Error('Cannot serialize items with `' + style + '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`');
    }
    return style;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-quote.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred quote option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['quote'], null | undefined>}
 *   Preferred quote.
 */ __turbopack_context__.s([
    "checkQuote",
    ()=>checkQuote
]);
function checkQuote(state) {
    const marker = state.options.quote || '"';
    if (marker !== '"' && marker !== "'") {
        throw new Error('Cannot serialize title with `' + marker + '` for `options.quote`, expected `"`, or `\'`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred rule repetition option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['ruleRepetition'], null | undefined>}
 *   Preferred rule repetition.
 */ __turbopack_context__.s([
    "checkRuleRepetition",
    ()=>checkRuleRepetition
]);
function checkRuleRepetition(state) {
    const repetition = state.options.ruleRepetition || 3;
    if (repetition < 3) {
        throw new Error('Cannot serialize rules with repetition `' + repetition + '` for `options.ruleRepetition`, expected `3` or more');
    }
    return repetition;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-rule.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred rule option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['rule'], null | undefined>}
 *   Preferred rule marker.
 */ __turbopack_context__.s([
    "checkRule",
    ()=>checkRule
]);
function checkRule(state) {
    const marker = state.options.rule || '*';
    if (marker !== '*' && marker !== '-' && marker !== '_') {
        throw new Error('Cannot serialize rules with `' + marker + '` for `options.rule`, expected `*`, `-`, or `_`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/check-strong.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */ /**
 * Checks the preferred strong option.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Exclude<Options['strong'], null | undefined>}
 *   Preferred strong marker.
 */ __turbopack_context__.s([
    "checkStrong",
    ()=>checkStrong
]);
function checkStrong(state) {
    const marker = state.options.strong || '*';
    if (marker !== '*' && marker !== '_') {
        throw new Error('Cannot serialize strong with `' + marker + '` for `options.strong`, expected `*`, or `_`');
    }
    return marker;
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encode a code point as a character reference.
 *
 * @param {number} code
 *   Code point to encode.
 * @returns {string}
 *   Encoded character reference.
 */ __turbopack_context__.s([
    "encodeCharacterReference",
    ()=>encodeCharacterReference
]);
function encodeCharacterReference(code) {
    return '&#x' + code.toString(16).toUpperCase() + ';';
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Code} from 'mdast'
 */ /**
 * Checks if a code block can be formatted as an indented code block.
 *
 * @param {Code} node
 *   Node to check.
 * @param {State} state
 *   Info passed around.
 * @returns {boolean}
 *   Whether the code can be formatted as an indented code block.
 */ __turbopack_context__.s([
    "formatCodeAsIndented",
    ()=>formatCodeAsIndented
]);
function formatCodeAsIndented(node, state) {
    return Boolean(state.options.fences === false && node.value && // If there’s no info…
    !node.lang && // And there’s a non-whitespace character…
    /[^\n\r ]/.test(node.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(node.value));
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatHeadingAsSetext",
    ()=>formatHeadingAsSetext
]);
/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Heading} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit-parents/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit/lib/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-string/lib/index.js [app-rsc] (ecmascript)");
;
;
function formatHeadingAsSetext(node, state) {
    let literalWithBreak = false;
    // Look for literals with a line break.
    // Note that this also
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(node, function(node) {
        if ('value' in node && /\r?\n|\r/.test(node.value) || node.type === 'break') {
            literalWithBreak = true;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EXIT"];
        }
    });
    return Boolean((!node.depth || node.depth < 3) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toString"])(node) && (state.options.setext || literalWithBreak));
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLinkAsAutolink",
    ()=>formatLinkAsAutolink
]);
/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Link} from 'mdast'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-to-string/lib/index.js [app-rsc] (ecmascript)");
;
function formatLinkAsAutolink(node, state) {
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toString"])(node);
    return Boolean(!state.options.resourceLink && // If there’s a url…
    node.url && // And there’s no title…
    !node.title && // And the content of `node` is a single text node…
    node.children && node.children.length === 1 && node.children[0].type === 'text' && // And if the url is the same as the content…
    (raw === node.url || 'mailto:' + raw === node.url) && // And that starts w/ a protocol…
    /^[a-z][+\-.a-z]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node.url));
}
}),
"[project]/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {ConstructName, Unsafe} from 'mdast-util-to-markdown'
 */ /**
 * Check if a pattern is in scope based on the current stack of constructs.
 *
 * @param {Array<ConstructName>} stack
 *   Current stack of constructs.
 * @param {Unsafe} pattern
 *   Pattern to check.
 * @returns {boolean}
 *   Whether the pattern is in scope.
 */ __turbopack_context__.s([
    "patternInScope",
    ()=>patternInScope
]);
function patternInScope(stack, pattern) {
    return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
/**
 * Check if any of the constructs in the list are present in the stack.
 *
 * @param {Array<ConstructName>} stack
 *   Current stack of constructs.
 * @param {Unsafe['inConstruct']} list
 *   List of constructs to check for in the stack.
 * @param {boolean} none
 *   Value to return if the list is empty or not provided.
 * @returns {boolean}
 *   Whether any of the constructs in the list are present in the stack.
 */ function listInScope(stack, list, none) {
    if (typeof list === 'string') {
        list = [
            list
        ];
    }
    if (!list || list.length === 0) {
        return none;
    }
    let index = -1;
    while(++index < list.length){
        if (stack.includes(list[index])) {
            return true;
        }
    }
    return false;
}
}),
"[project]/node_modules/mdast-util-to-string/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */ /** @type {Options} */ const emptyOptions = {};
function toString(value, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === 'boolean' ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;
    return one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function one(value, includeImageAlt, includeHtml) {
    if (node(value)) {
        if ('value' in value) {
            return value.type === 'html' && !includeHtml ? '' : value.value;
        }
        if (includeImageAlt && 'alt' in value && value.alt) {
            return value.alt;
        }
        if ('children' in value) {
            return all(value.children, includeImageAlt, includeHtml);
        }
    }
    if (Array.isArray(value)) {
        return all(value, includeImageAlt, includeHtml);
    }
    return '';
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length){
        result[index] = one(values[index], includeImageAlt, includeHtml);
    }
    return result.join('');
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */ function node(value) {
    return Boolean(value && typeof value === 'object');
}
}),
"[project]/node_modules/micromark-core-commonmark/dev/lib/blank-line.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blankLine",
    ()=>blankLine
]);
/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-factory-space/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)");
;
;
;
const blankLine = {
    partial: true,
    tokenize: tokenizeBlankLine
};
/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */ function tokenizeBlankLine(effects, ok, nok) {
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, after, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].linePrefix)(code) : after(code);
    }
    /**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code) ? ok(code) : nok(code);
    }
}
}),
"[project]/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmAutolinkLiteralHtml",
    ()=>gfmAutolinkLiteralHtml
]);
/**
 * @import {CompileContext, Handle, HtmlExtension, Token} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-sanitize-uri/dev/index.js [app-rsc] (ecmascript)");
;
function gfmAutolinkLiteralHtml() {
    return {
        exit: {
            literalAutolinkEmail,
            literalAutolinkHttp,
            literalAutolinkWww
        }
    };
}
/**
 * @this {CompileContext}
 * @type {Handle}
 */ function literalAutolinkWww(token) {
    anchorFromToken.call(this, token, 'http://');
}
/**
 * @this {CompileContext}
 * @type {Handle}
 */ function literalAutolinkEmail(token) {
    anchorFromToken.call(this, token, 'mailto:');
}
/**
 * @this {CompileContext}
 * @type {Handle}
 */ function literalAutolinkHttp(token) {
    anchorFromToken.call(this, token);
}
/**
 * @this CompileContext
 * @param {Token} token
 * @param {string | null | undefined} [protocol]
 * @returns {undefined}
 */ function anchorFromToken(token, protocol) {
    const url = this.sliceSerialize(token);
    this.tag('<a href="' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeUri"])((protocol || '') + url) + '">');
    this.raw(this.encode(url));
    this.tag('</a>');
}
}),
"[project]/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmAutolinkLiteral",
    ()=>gfmAutolinkLiteral
]);
/**
 * @import {Code, ConstructRecord, Event, Extension, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
;
;
const wwwPrefix = {
    tokenize: tokenizeWwwPrefix,
    partial: true
};
const domain = {
    tokenize: tokenizeDomain,
    partial: true
};
const path = {
    tokenize: tokenizePath,
    partial: true
};
const trail = {
    tokenize: tokenizeTrail,
    partial: true
};
const emailDomainDotTrail = {
    tokenize: tokenizeEmailDomainDotTrail,
    partial: true
};
const wwwAutolink = {
    name: 'wwwAutolink',
    tokenize: tokenizeWwwAutolink,
    previous: previousWww
};
const protocolAutolink = {
    name: 'protocolAutolink',
    tokenize: tokenizeProtocolAutolink,
    previous: previousProtocol
};
const emailAutolink = {
    name: 'emailAutolink',
    tokenize: tokenizeEmailAutolink,
    previous: previousEmail
};
/** @type {ConstructRecord} */ const text = {};
function gfmAutolinkLiteral() {
    return {
        text
    };
}
/** @type {Code} */ let code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].digit0;
// Add alphanumerics.
while(code < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftCurlyBrace){
    text[code] = emailAutolink;
    code++;
    if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseA;
    else if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket) code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseA;
}
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].plusSign] = emailAutolink;
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash] = emailAutolink;
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot] = emailAutolink;
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore] = emailAutolink;
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseH] = [
    emailAutolink,
    protocolAutolink
];
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseH] = [
    emailAutolink,
    protocolAutolink
];
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseW] = [
    emailAutolink,
    wwwAutolink
];
text[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseW] = [
    emailAutolink,
    wwwAutolink
];
// To do: perform email autolink literals on events, afterwards.
// That’s where `markdown-rs` and `cmark-gfm` perform it.
// It should look for `@`, then for atext backwards, and then for a label
// forwards.
// To do: `mailto:`, `xmpp:` protocol as prefix.
/**
 * Email autolink literal.
 *
 * ```markdown
 * > | a contact@example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeEmailAutolink(effects, ok, nok) {
    const self = this;
    /** @type {boolean | undefined} */ let dot;
    /** @type {boolean} */ let data;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of email autolink literal.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (!gfmAtext(code) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
            return nok(code);
        }
        effects.enter('literalAutolink');
        effects.enter('literalAutolinkEmail');
        return atext(code);
    }
    /**
   * In email atext.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */ function atext(code) {
        if (gfmAtext(code)) {
            effects.consume(code);
            return atext;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].atSign) {
            effects.consume(code);
            return emailDomain;
        }
        return nok(code);
    }
    /**
   * In email domain.
   *
   * The reference code is a bit overly complex as it handles the `@`, of which
   * there may be just one.
   * Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L318>
   *
   * ```markdown
   * > | a contact@example.org b
   *               ^
   * ```
   *
   * @type {State}
   */ function emailDomain(code) {
        // Dot followed by alphanumerical (not `-` or `_`).
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot) {
            return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code);
        }
        // Alphanumerical, `-`, and `_`.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(code)) {
            data = true;
            effects.consume(code);
            return emailDomain;
        }
        // To do: `/` if xmpp.
        // Note: normally we’d truncate trailing punctuation from the link.
        // However, email autolink literals cannot contain any of those markers,
        // except for `.`, but that can only occur if it isn’t trailing.
        // So we can ignore truncating!
        return emailDomainAfter(code);
    }
    /**
   * In email domain, on dot that is not a trail.
   *
   * ```markdown
   * > | a contact@example.org b
   *                      ^
   * ```
   *
   * @type {State}
   */ function emailDomainDot(code) {
        effects.consume(code);
        dot = true;
        return emailDomain;
    }
    /**
   * After email domain.
   *
   * ```markdown
   * > | a contact@example.org b
   *                          ^
   * ```
   *
   * @type {State}
   */ function emailDomainAfter(code) {
        // Domain must not be empty, must include a dot, and must end in alphabetical.
        // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L332>.
        if (data && dot && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlpha"])(self.previous)) {
            effects.exit('literalAutolinkEmail');
            effects.exit('literalAutolink');
            return ok(code);
        }
        return nok(code);
    }
}
/**
 * `www` autolink literal.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeWwwAutolink(effects, ok, nok) {
    const self = this;
    return wwwStart;
    //TURBOPACK unreachable
    ;
    /**
   * Start of www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */ function wwwStart(code) {
        if (code !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseW && code !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseW || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
            return nok(code);
        }
        effects.enter('literalAutolink');
        effects.enter('literalAutolinkWww');
        // Note: we *check*, so we can discard the `www.` we parsed.
        // If it worked, we consider it as a part of the domain.
        return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code);
    }
    /**
   * After a www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *                          ^
   * ```
   *
   * @type {State}
   */ function wwwAfter(code) {
        effects.exit('literalAutolinkWww');
        effects.exit('literalAutolink');
        return ok(code);
    }
}
/**
 * Protocol autolink literal.
 *
 * ```markdown
 * > | a https://example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeProtocolAutolink(effects, ok, nok) {
    const self = this;
    let buffer = '';
    let seen = false;
    return protocolStart;
    //TURBOPACK unreachable
    ;
    /**
   * Start of protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */ function protocolStart(code) {
        if ((code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseH || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseH) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
            effects.enter('literalAutolink');
            effects.enter('literalAutolinkHttp');
            buffer += String.fromCodePoint(code);
            effects.consume(code);
            return protocolPrefixInside;
        }
        return nok(code);
    }
    /**
   * In protocol.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^^^^^
   * ```
   *
   * @type {State}
   */ function protocolPrefixInside(code) {
        // `5` is size of `https`
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlpha"])(code) && buffer.length < 5) {
            // @ts-expect-error: definitely number.
            buffer += String.fromCodePoint(code);
            effects.consume(code);
            return protocolPrefixInside;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) {
            const protocol = buffer.toLowerCase();
            if (protocol === 'http' || protocol === 'https') {
                effects.consume(code);
                return protocolSlashesInside;
            }
        }
        return nok(code);
    }
    /**
   * In slashes.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *           ^^
   * ```
   *
   * @type {State}
   */ function protocolSlashesInside(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].slash) {
            effects.consume(code);
            if (seen) {
                return afterProtocol;
            }
            seen = true;
            return protocolSlashesInside;
        }
        return nok(code);
    }
    /**
   * After protocol, before domain.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *             ^
   * ```
   *
   * @type {State}
   */ function afterProtocol(code) {
        // To do: this is different from `markdown-rs`:
        // https://github.com/wooorm/markdown-rs/blob/b3a921c761309ae00a51fe348d8a43adbc54b518/src/construct/gfm_autolink_literal.rs#L172-L182
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiControl"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code) ? nok(code) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code);
    }
    /**
   * After a protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *                              ^
   * ```
   *
   * @type {State}
   */ function protocolAfter(code) {
        effects.exit('literalAutolinkHttp');
        effects.exit('literalAutolink');
        return ok(code);
    }
}
/**
 * `www` prefix.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeWwwPrefix(effects, ok, nok) {
    let size = 0;
    return wwwPrefixInside;
    //TURBOPACK unreachable
    ;
    /**
   * In www prefix.
   *
   * ```markdown
   * > | www.example.com
   *     ^^^^
   * ```
   *
   * @type {State}
   */ function wwwPrefixInside(code) {
        if ((code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseW || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseW) && size < 3) {
            size++;
            effects.consume(code);
            return wwwPrefixInside;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot && size === 3) {
            effects.consume(code);
            return wwwPrefixAfter;
        }
        return nok(code);
    }
    /**
   * After www prefix.
   *
   * ```markdown
   * > | www.example.com
   *         ^
   * ```
   *
   * @type {State}
   */ function wwwPrefixAfter(code) {
        // If there is *anything*, we can link.
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof ? nok(code) : ok(code);
    }
}
/**
 * Domain.
 *
 * ```markdown
 * > | a https://example.org b
 *               ^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeDomain(effects, ok, nok) {
    /** @type {boolean | undefined} */ let underscoreInLastSegment;
    /** @type {boolean | undefined} */ let underscoreInLastLastSegment;
    /** @type {boolean | undefined} */ let seen;
    return domainInside;
    //TURBOPACK unreachable
    ;
    /**
   * In domain.
   *
   * ```markdown
   * > | https://example.com/a
   *             ^^^^^^^^^^^
   * ```
   *
   * @type {State}
   */ function domainInside(code) {
        // Check whether this marker, which is a trailing punctuation
        // marker, optionally followed by more trailing markers, and then
        // followed by an end.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore) {
            return effects.check(trail, domainAfter, domainAtPunctuation)(code);
        }
        // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
        // occur, which sounds like ASCII only, but they also support `www.點看.com`,
        // so that’s Unicode.
        // Instead of some new production for Unicode alphanumerics, markdown
        // already has that for Unicode punctuation and whitespace, so use those.
        // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L12>.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code) || code !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) {
            return domainAfter(code);
        }
        seen = true;
        effects.consume(code);
        return domainInside;
    }
    /**
   * In domain, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com
   *                    ^
   * ```
   *
   * @type {State}
   */ function domainAtPunctuation(code) {
        // There is an underscore in the last segment of the domain
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore) {
            underscoreInLastSegment = true;
        } else {
            underscoreInLastLastSegment = underscoreInLastSegment;
            underscoreInLastSegment = undefined;
        }
        effects.consume(code);
        return domainInside;
    }
    /**
   * After domain.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^
   * ```
   *
   * @type {State} */ function domainAfter(code) {
        // Note: that’s GH says a dot is needed, but it’s not true:
        // <https://github.com/github/cmark-gfm/issues/279>
        if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
            return nok(code);
        }
        return ok(code);
    }
}
/**
 * Path.
 *
 * ```markdown
 * > | a https://example.org/stuff b
 *                          ^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizePath(effects, ok) {
    let sizeOpen = 0;
    let sizeClose = 0;
    return pathInside;
    //TURBOPACK unreachable
    ;
    /**
   * In path.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^^
   * ```
   *
   * @type {State}
   */ function pathInside(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            sizeOpen++;
            effects.consume(code);
            return pathInside;
        }
        // To do: `markdown-rs` also needs this.
        // If this is a paren, and there are less closings than openings,
        // we don’t check for a trail.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightParenthesis && sizeClose < sizeOpen) {
            return pathAtPunctuation(code);
        }
        // Check whether this trailing punctuation marker is optionally
        // followed by more trailing markers, and then followed
        // by an end.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].exclamationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].quotationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].ampersand || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].apostrophe || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].asterisk || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].comma || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].semicolon || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lessThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].questionMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde) {
            return effects.check(trail, ok, pathAtPunctuation)(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
            return ok(code);
        }
        effects.consume(code);
        return pathInside;
    }
    /**
   * In path, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com/a"b
   *                          ^
   * ```
   *
   * @type {State}
   */ function pathAtPunctuation(code) {
        // Count closing parens.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightParenthesis) {
            sizeClose++;
        }
        effects.consume(code);
        return pathInside;
    }
}
/**
 * Trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the entire trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | https://example.com").
 *                        ^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeTrail(effects, ok, nok) {
    return trail;
    //TURBOPACK unreachable
    ;
    /**
   * In trail of domain or path.
   *
   * ```markdown
   * > | https://example.com").
   *                        ^
   * ```
   *
   * @type {State}
   */ function trail(code) {
        // Regular trailing punctuation.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].exclamationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].quotationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].apostrophe || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].asterisk || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].comma || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].semicolon || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].questionMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde) {
            effects.consume(code);
            return trail;
        }
        // `&` followed by one or more alphabeticals and then a `;`, is
        // as a whole considered as trailing punctuation.
        // In all other cases, it is considered as continuation of the URL.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].ampersand) {
            effects.consume(code);
            return trailCharacterReferenceStart;
        }
        // Needed because we allow literals after `[`, as we fix:
        // <https://github.com/github/cmark-gfm/issues/278>.
        // Check that it is not followed by `(` or `[`.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            return trailBracketAfter;
        }
        if (// `<` is an end.
        code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lessThan || // So is whitespace.
        code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
            return ok(code);
        }
        return nok(code);
    }
    /**
   * In trail, after `]`.
   *
   * > 👉 **Note**: this deviates from `cmark-gfm` to fix a bug.
   * > See end of <https://github.com/github/cmark-gfm/issues/278> for more.
   *
   * ```markdown
   * > | https://example.com](
   *                         ^
   * ```
   *
   * @type {State}
   */ function trailBracketAfter(code) {
        // Whitespace or something that could start a resource or reference is the end.
        // Switch back to trail otherwise.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
            return ok(code);
        }
        return trail(code);
    }
    /**
   * In character-reference like trail, after `&`.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */ function trailCharacterReferenceStart(code) {
        // When non-alpha, it’s not a trail.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlpha"])(code) ? trailCharacterReferenceInside(code) : nok(code);
    }
    /**
   * In character-reference like trail.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */ function trailCharacterReferenceInside(code) {
        // Switch back to trail if this is well-formed.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].semicolon) {
            effects.consume(code);
            return trail;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlpha"])(code)) {
            effects.consume(code);
            return trailCharacterReferenceInside;
        }
        // It’s not a trail.
        return nok(code);
    }
}
/**
 * Dot in email domain trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | contact@example.org.
 *                        ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeEmailDomainDotTrail(effects, ok, nok) {
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                    ^   ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        // Must be dot.
        effects.consume(code);
        return after;
    }
    /**
   * After dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                     ^   ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        // Not a trail if alphanumeric.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(code) ? nok(code) : ok(code);
    }
}
/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L156>.
 *
 * @type {Previous}
 */ function previousWww(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].asterisk || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code);
}
/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L214>.
 *
 * @type {Previous}
 */ function previousProtocol(code) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlpha"])(code);
}
/**
 * @this {TokenizeContext}
 * @type {Previous}
 */ function previousEmail(code) {
    // Do not allow a slash “inside” atext.
    // The reference code is a bit weird, but that’s what it results in.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L307>.
    // Other than slash, every preceding character is allowed.
    return !(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].slash || gfmAtext(code));
}
/**
 * @param {Code} code
 * @returns {boolean}
 */ function gfmAtext(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].plusSign || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dot || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].underscore || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(code);
}
/**
 * @param {Array<Event>} events
 * @returns {boolean}
 */ function previousUnbalanced(events) {
    let index = events.length;
    let result = false;
    while(index--){
        const token = events[index][1];
        if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
            result = true;
            break;
        }
        // If we’ve seen this token, and it was marked as not having any unbalanced
        // bracket before it, we can exit.
        if (token._gfmAutolinkLiteralWalkedInto) {
            result = false;
            break;
        }
    }
    if (events.length > 0 && !result) {
        // Mark the last token as “walked into” w/o finding
        // anything.
        events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }
    return result;
}
}),
"[project]/node_modules/micromark-extension-gfm-footnote/dev/lib/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBackLabel",
    ()=>defaultBackLabel,
    "gfmFootnoteHtml",
    ()=>gfmFootnoteHtml
]);
/**
 * @import {HtmlOptions as Options} from 'micromark-extension-gfm-footnote'
 * @import {HtmlExtension} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-normalize-identifier/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-sanitize-uri/dev/index.js [app-rsc] (ecmascript)");
;
;
;
const own = {}.hasOwnProperty;
/** @type {Options} */ const emptyOptions = {};
function defaultBackLabel(referenceIndex, rereferenceIndex) {
    return 'Back to reference ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '');
}
function gfmFootnoteHtml(options) {
    const config = options || emptyOptions;
    const label = config.label || 'Footnotes';
    const labelTagName = config.labelTagName || 'h2';
    const labelAttributes = config.labelAttributes === null || config.labelAttributes === undefined ? 'class="sr-only"' : config.labelAttributes;
    const backLabel = config.backLabel || defaultBackLabel;
    const clobberPrefix = config.clobberPrefix === null || config.clobberPrefix === undefined ? 'user-content-' : config.clobberPrefix;
    return {
        enter: {
            gfmFootnoteDefinition () {
                const stack = this.getData('tightStack');
                stack.push(false);
            },
            gfmFootnoteDefinitionLabelString () {
                this.buffer();
            },
            gfmFootnoteCallString () {
                this.buffer();
            }
        },
        exit: {
            gfmFootnoteDefinition () {
                let definitions = this.getData('gfmFootnoteDefinitions');
                const footnoteStack = this.getData('gfmFootnoteDefinitionStack');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(footnoteStack, 'expected `footnoteStack`');
                const tightStack = this.getData('tightStack');
                const current = footnoteStack.pop();
                const value = this.resume();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(current, 'expected to be in a footnote');
                if (!definitions) {
                    this.setData('gfmFootnoteDefinitions', definitions = {});
                }
                if (!own.call(definitions, current)) definitions[current] = value;
                tightStack.pop();
                this.setData('slurpOneLineEnding', true);
                // “Hack” to prevent a line ending from showing up if we’re in a definition in
                // an empty list item.
                this.setData('lastWasTag');
            },
            gfmFootnoteDefinitionLabelString (token) {
                let footnoteStack = this.getData('gfmFootnoteDefinitionStack');
                if (!footnoteStack) {
                    this.setData('gfmFootnoteDefinitionStack', footnoteStack = []);
                }
                footnoteStack.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)));
                this.resume(); // Drop the label.
                this.buffer(); // Get ready for a value.
            },
            gfmFootnoteCallString (token) {
                let calls = this.getData('gfmFootnoteCallOrder');
                let counts = this.getData('gfmFootnoteCallCounts');
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token));
                /** @type {number} */ let counter;
                this.resume();
                if (!calls) this.setData('gfmFootnoteCallOrder', calls = []);
                if (!counts) this.setData('gfmFootnoteCallCounts', counts = {});
                const index = calls.indexOf(id);
                const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeUri"])(id.toLowerCase());
                if (index === -1) {
                    calls.push(id);
                    counts[id] = 1;
                    counter = calls.length;
                } else {
                    counts[id]++;
                    counter = index + 1;
                }
                const reuseCounter = counts[id];
                this.tag('<sup><a href="#' + clobberPrefix + 'fn-' + safeId + '" id="' + clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : '') + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(counter) + '</a></sup>');
            },
            null () {
                const calls = this.getData('gfmFootnoteCallOrder') || [];
                const counts = this.getData('gfmFootnoteCallCounts') || {};
                const definitions = this.getData('gfmFootnoteDefinitions') || {};
                let index = -1;
                if (calls.length > 0) {
                    this.lineEndingIfNeeded();
                    this.tag('<section data-footnotes="" class="footnotes"><' + labelTagName + ' id="footnote-label"' + (labelAttributes ? ' ' + labelAttributes : '') + '>');
                    this.raw(this.encode(label));
                    this.tag('</' + labelTagName + '>');
                    this.lineEndingIfNeeded();
                    this.tag('<ol>');
                }
                while(++index < calls.length){
                    // Called definitions are always defined.
                    const id = calls[index];
                    const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeUri"])(id.toLowerCase());
                    let referenceIndex = 0;
                    /** @type {Array<string>} */ const references = [];
                    while(++referenceIndex <= counts[id]){
                        references.push('<a href="#' + clobberPrefix + 'fnref-' + safeId + (referenceIndex > 1 ? '-' + referenceIndex : '') + '" data-footnote-backref="" aria-label="' + this.encode(typeof backLabel === 'string' ? backLabel : backLabel(index, referenceIndex)) + '" class="data-footnote-backref">↩' + (referenceIndex > 1 ? '<sup>' + referenceIndex + '</sup>' : '') + '</a>');
                    }
                    const reference = references.join(' ');
                    let injected = false;
                    this.lineEndingIfNeeded();
                    this.tag('<li id="' + clobberPrefix + 'fn-' + safeId + '">');
                    this.lineEndingIfNeeded();
                    this.tag(definitions[id].replace(/<\/p>(?:\r?\n|\r)?$/, function($0) {
                        injected = true;
                        return ' ' + reference + $0;
                    }));
                    if (!injected) {
                        this.lineEndingIfNeeded();
                        this.tag(reference);
                    }
                    this.lineEndingIfNeeded();
                    this.tag('</li>');
                }
                if (calls.length > 0) {
                    this.lineEndingIfNeeded();
                    this.tag('</ol>');
                    this.lineEndingIfNeeded();
                    this.tag('</section>');
                }
            }
        }
    };
}
}),
"[project]/node_modules/micromark-extension-gfm-footnote/dev/lib/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmFootnote",
    ()=>gfmFootnote
]);
/**
 * @import {Event, Exiter, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$blank$2d$line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-core-commonmark/dev/lib/blank-line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-factory-space/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-normalize-identifier/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const indent = {
    tokenize: tokenizeIndent,
    partial: true
};
function gfmFootnote() {
    /** @type {Extension} */ return {
        document: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket]: {
                name: 'gfmFootnoteDefinition',
                tokenize: tokenizeDefinitionStart,
                continuation: {
                    tokenize: tokenizeDefinitionContinuation
                },
                exit: gfmFootnoteDefinitionEnd
            }
        },
        text: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket]: {
                name: 'gfmFootnoteCall',
                tokenize: tokenizeGfmFootnoteCall
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket]: {
                name: 'gfmPotentialFootnoteCall',
                add: 'after',
                tokenize: tokenizePotentialGfmFootnoteCall,
                resolveTo: resolveToPotentialGfmFootnoteCall
            }
        }
    };
}
// To do: remove after micromark update.
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {Token} */ let labelStart;
    // Find an opening.
    while(index--){
        const token = self.events[index][1];
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].labelImage) {
            labelStart = token;
            break;
        }
        // Exit if we’ve walked far enough.
        if (token.type === 'gfmFootnoteCall' || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].labelLink || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].label || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].image || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].link) {
            break;
        }
    }
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket, 'expected `]`');
        if (!labelStart || !labelStart._balanced) {
            return nok(code);
        }
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        }));
        if (id.codePointAt(0) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].caret || !defined.includes(id.slice(1))) {
            return nok(code);
        }
        effects.enter('gfmFootnoteCallLabelMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteCallLabelMarker');
        return ok(code);
    }
}
// To do: remove after micromark update.
/** @type {Resolver} */ function resolveToPotentialGfmFootnoteCall(events, context) {
    let index = events.length;
    /** @type {Token | undefined} */ let labelStart;
    // Find an opening.
    while(index--){
        if (events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].labelImage && events[index][0] === 'enter') {
            labelStart = events[index][1];
            break;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(labelStart, 'expected `labelStart` to resolve');
    // Change the `labelImageMarker` to a `data`.
    events[index + 1][1].type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data;
    events[index + 3][1].type = 'gfmFootnoteCallLabelMarker';
    // The whole (without `!`):
    /** @type {Token} */ const call = {
        type: 'gfmFootnoteCall',
        start: Object.assign({}, events[index + 3][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    // The `^` marker
    /** @type {Token} */ const marker = {
        type: 'gfmFootnoteCallMarker',
        start: Object.assign({}, events[index + 3][1].end),
        end: Object.assign({}, events[index + 3][1].end)
    };
    // Increment the end 1 character.
    marker.end.column++;
    marker.end.offset++;
    marker.end._bufferIndex++;
    /** @type {Token} */ const string = {
        type: 'gfmFootnoteCallString',
        start: Object.assign({}, marker.end),
        end: Object.assign({}, events[events.length - 1][1].start)
    };
    /** @type {Token} */ const chunk = {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].chunkString,
        contentType: 'string',
        start: Object.assign({}, string.start),
        end: Object.assign({}, string.end)
    };
    /** @type {Array<Event>} */ const replacement = [
        // Take the `labelImageMarker` (now `data`, the `!`)
        events[index + 1],
        events[index + 2],
        [
            'enter',
            call,
            context
        ],
        // The `[`
        events[index + 3],
        events[index + 4],
        // The `^`.
        [
            'enter',
            marker,
            context
        ],
        [
            'exit',
            marker,
            context
        ],
        // Everything in between.
        [
            'enter',
            string,
            context
        ],
        [
            'enter',
            chunk,
            context
        ],
        [
            'exit',
            chunk,
            context
        ],
        [
            'exit',
            string,
            context
        ],
        // The ending (`]`, properly parsed and labelled).
        events[events.length - 2],
        events[events.length - 1],
        [
            'exit',
            call,
            context
        ]
    ];
    events.splice(index, events.length - index + 1, ...replacement);
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let size = 0;
    /** @type {boolean} */ let data;
    // Note: the implementation of `markdown-rs` is different, because it houses
    // core *and* extensions in one project.
    // Therefore, it can include footnote logic inside `label-end`.
    // We can’t do that, but luckily, we can parse footnotes in a simpler way than
    // needed for labels.
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of footnote label.
   *
   * ```markdown
   * > | a [^b] c
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        effects.enter('gfmFootnoteCall');
        effects.enter('gfmFootnoteCallLabelMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteCallLabelMarker');
        return callStart;
    }
    /**
   * After `[`, at `^`.
   *
   * ```markdown
   * > | a [^b] c
   *        ^
   * ```
   *
   * @type {State}
   */ function callStart(code) {
        if (code !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].caret) return nok(code);
        effects.enter('gfmFootnoteCallMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteCallMarker');
        effects.enter('gfmFootnoteCallString');
        effects.enter('chunkString').contentType = 'string';
        return callData;
    }
    /**
   * In label.
   *
   * ```markdown
   * > | a [^b] c
   *         ^
   * ```
   *
   * @type {State}
   */ function callData(code) {
        if (// Too long.
        size > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            return nok(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.exit('chunkString');
            const token = effects.exit('gfmFootnoteCallString');
            if (!defined.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(self.sliceSerialize(token)))) {
                return nok(code);
            }
            effects.enter('gfmFootnoteCallLabelMarker');
            effects.consume(code);
            effects.exit('gfmFootnoteCallLabelMarker');
            effects.exit('gfmFootnoteCall');
            return ok;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            data = true;
        }
        size++;
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash ? callEscape : callData;
    }
    /**
   * On character after escape.
   *
   * ```markdown
   * > | a [^b\c] d
   *           ^
   * ```
   *
   * @type {State}
   */ function callEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            size++;
            return callData;
        }
        return callData(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeDefinitionStart(effects, ok, nok) {
    const self = this;
    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {string} */ let identifier;
    let size = 0;
    /** @type {boolean | undefined} */ let data;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of GFM footnote definition.
   *
   * ```markdown
   * > | [^a]: b
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        effects.enter('gfmFootnoteDefinition')._container = true;
        effects.enter('gfmFootnoteDefinitionLabel');
        effects.enter('gfmFootnoteDefinitionLabelMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteDefinitionLabelMarker');
        return labelAtMarker;
    }
    /**
   * In label, at caret.
   *
   * ```markdown
   * > | [^a]: b
   *      ^
   * ```
   *
   * @type {State}
   */ function labelAtMarker(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].caret) {
            effects.enter('gfmFootnoteDefinitionMarker');
            effects.consume(code);
            effects.exit('gfmFootnoteDefinitionMarker');
            effects.enter('gfmFootnoteDefinitionLabelString');
            effects.enter('chunkString').contentType = 'string';
            return labelInside;
        }
        return nok(code);
    }
    /**
   * In label.
   *
   * > 👉 **Note**: `cmark-gfm` prevents whitespace from occurring in footnote
   * > definition labels.
   *
   * ```markdown
   * > | [^a]: b
   *       ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (// Too long.
        size > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket && !data || // Space or tab is not supported by GFM for some reason.
        // `\n` and `[` not being supported makes sense.
        code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            return nok(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.exit('chunkString');
            const token = effects.exit('gfmFootnoteDefinitionLabelString');
            identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(self.sliceSerialize(token));
            effects.enter('gfmFootnoteDefinitionLabelMarker');
            effects.consume(code);
            effects.exit('gfmFootnoteDefinitionLabelMarker');
            effects.exit('gfmFootnoteDefinitionLabel');
            return labelAfter;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            data = true;
        }
        size++;
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * > 👉 **Note**: `cmark-gfm` currently does not support escaped brackets:
   * > <https://github.com/github/cmark-gfm/issues/240>
   *
   * ```markdown
   * > | [^a\*b]: c
   *         ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
    /**
   * After definition label.
   *
   * ```markdown
   * > | [^a]: b
   *         ^
   * ```
   *
   * @type {State}
   */ function labelAfter(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) {
            effects.enter('definitionMarker');
            effects.consume(code);
            effects.exit('definitionMarker');
            if (!defined.includes(identifier)) {
                defined.push(identifier);
            }
            // Any whitespace after the marker is eaten, forming indented code
            // is not possible.
            // No space is also fine, just like a block quote marker.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, whitespaceAfter, 'gfmFootnoteDefinitionWhitespace');
        }
        return nok(code);
    }
    /**
   * After definition prefix.
   *
   * ```markdown
   * > | [^a]: b
   *           ^
   * ```
   *
   * @type {State}
   */ function whitespaceAfter(code) {
        // `markdown-rs` has a wrapping token for the prefix that is closed here.
        return ok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeDefinitionContinuation(effects, ok, nok) {
    /// Start of footnote definition continuation.
    ///
    /// ```markdown
    ///   | [^a]: b
    /// > |     c
    ///     ^
    /// ```
    //
    // Either a blank line, which is okay, or an indented thing.
    return effects.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$blank$2d$line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blankLine"], ok, effects.attempt(indent, ok, nok));
}
/** @type {Exiter} */ function gfmFootnoteDefinitionEnd(effects) {
    effects.exit('gfmFootnoteDefinition');
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeIndent(effects, ok, nok) {
    const self = this;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, afterPrefix, 'gfmFootnoteDefinitionIndent', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].tabSize + 1);
    //TURBOPACK unreachable
    ;
    /**
   * @type {State}
   */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === 'gfmFootnoteDefinitionIndent' && tail[2].sliceSerialize(tail[1], true).length === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].tabSize ? ok(code) : nok(code);
    }
}
}),
"[project]/node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {HtmlExtension} from 'micromark-util-types'
 */ /**
 * Create an HTML extension for `micromark` to support GFM strikethrough when
 * serializing to HTML.
 *
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support GFM strikethrough when serializing to HTML.
 */ __turbopack_context__.s([
    "gfmStrikethroughHtml",
    ()=>gfmStrikethroughHtml
]);
function gfmStrikethroughHtml() {
    return {
        enter: {
            strikethrough () {
                this.tag('<del>');
            }
        },
        exit: {
            strikethrough () {
                this.tag('</del>');
            }
        }
    };
}
}),
"[project]/node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmStrikethrough",
    ()=>gfmStrikethrough
]);
/**
 * @import {Options} from 'micromark-extension-gfm-strikethrough'
 * @import {Event, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-chunked/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$classify$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-classify-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$resolve$2d$all$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-resolve-all/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
function gfmStrikethrough(options) {
    const options_ = options || {};
    let single = options_.singleTilde;
    const tokenizer = {
        name: 'strikethrough',
        tokenize: tokenizeStrikethrough,
        resolveAll: resolveAllStrikethrough
    };
    if (single === null || single === undefined) {
        single = true;
    }
    return {
        text: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde]: tokenizer
        },
        insideSpan: {
            null: [
                tokenizer
            ]
        },
        attentionMarkers: {
            null: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde
            ]
        }
    };
    //TURBOPACK unreachable
    ;
    /**
   * Take events and resolve strikethrough.
   *
   * @type {Resolver}
   */ function resolveAllStrikethrough(events, context) {
        let index = -1;
        // Walk through all events.
        while(++index < events.length){
            // Find a token that can close.
            if (events[index][0] === 'enter' && events[index][1].type === 'strikethroughSequenceTemporary' && events[index][1]._close) {
                let open = index;
                // Now walk back to find an opener.
                while(open--){
                    // Find a token that can open the closer.
                    if (events[open][0] === 'exit' && events[open][1].type === 'strikethroughSequenceTemporary' && events[open][1]._open && // If the sizes are the same:
                    events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
                        events[index][1].type = 'strikethroughSequence';
                        events[open][1].type = 'strikethroughSequence';
                        /** @type {Token} */ const strikethrough = {
                            type: 'strikethrough',
                            start: Object.assign({}, events[open][1].start),
                            end: Object.assign({}, events[index][1].end)
                        };
                        /** @type {Token} */ const text = {
                            type: 'strikethroughText',
                            start: Object.assign({}, events[open][1].end),
                            end: Object.assign({}, events[index][1].start)
                        };
                        // Opening.
                        /** @type {Array<Event>} */ const nextEvents = [
                            [
                                'enter',
                                strikethrough,
                                context
                            ],
                            [
                                'enter',
                                events[open][1],
                                context
                            ],
                            [
                                'exit',
                                events[open][1],
                                context
                            ],
                            [
                                'enter',
                                text,
                                context
                            ]
                        ];
                        const insideSpan = context.parser.constructs.insideSpan.null;
                        if (insideSpan) {
                            // Between.
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splice"])(nextEvents, nextEvents.length, 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$resolve$2d$all$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAll"])(insideSpan, events.slice(open + 1, index), context));
                        }
                        // Closing.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splice"])(nextEvents, nextEvents.length, 0, [
                            [
                                'exit',
                                text,
                                context
                            ],
                            [
                                'enter',
                                events[index][1],
                                context
                            ],
                            [
                                'exit',
                                events[index][1],
                                context
                            ],
                            [
                                'exit',
                                strikethrough,
                                context
                            ]
                        ]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splice"])(events, open - 1, index - open + 3, nextEvents);
                        index = open + nextEvents.length - 2;
                        break;
                    }
                }
            }
        }
        index = -1;
        while(++index < events.length){
            if (events[index][1].type === 'strikethroughSequenceTemporary') {
                events[index][1].type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data;
            }
        }
        return events;
    }
    /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */ function tokenizeStrikethrough(effects, ok, nok) {
        const previous = this.previous;
        const events = this.events;
        let size = 0;
        return start;
        //TURBOPACK unreachable
        ;
        /** @type {State} */ function start(code) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde, 'expected `~`');
            if (previous === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde && events[events.length - 1][1].type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].characterEscape) {
                return nok(code);
            }
            effects.enter('strikethroughSequenceTemporary');
            return more(code);
        }
        /** @type {State} */ function more(code) {
            const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$classify$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classifyCharacter"])(previous);
            if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].tilde) {
                // If this is the third marker, exit.
                if (size > 1) return nok(code);
                effects.consume(code);
                size++;
                return more;
            }
            if (size < 2 && !single) return nok(code);
            const token = effects.exit('strikethroughSequenceTemporary');
            const after = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$classify$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["classifyCharacter"])(code);
            token._open = !after || after === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].attentionSideAfter && Boolean(before);
            token._close = !before || before === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].attentionSideAfter && Boolean(after);
            return ok(code);
        }
    }
}
}),
"[project]/node_modules/micromark-extension-gfm-table/dev/lib/edit-map.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event} from 'micromark-util-types'
 */ // Port of `edit_map.rs` from `markdown-rs`.
// This should move to `markdown-js` later.
// Deal with several changes in events, batching them together.
//
// Preferably, changes should be kept to a minimum.
// Sometimes, it’s needed to change the list of events, because parsing can be
// messy, and it helps to expose a cleaner interface of events to the compiler
// and other users.
// It can also help to merge many adjacent similar events.
// And, in other cases, it’s needed to parse subcontent: pass some events
// through another tokenizer and inject the result.
/**
 * @typedef {[number, number, Array<Event>]} Change
 * @typedef {[number, number, number]} Jump
 */ /**
 * Tracks a bunch of edits.
 */ __turbopack_context__.s([
    "EditMap",
    ()=>EditMap
]);
class EditMap {
    /**
   * Create a new edit map.
   */ constructor(){
        /**
     * Record of changes.
     *
     * @type {Array<Change>}
     */ this.map = [];
        /**
     * Changes by index, so `add` does not scan `map` (quadratic on
     * table-heavy documents).
     *
     * @type {Map<number, Change>}
     */ this.index = new Map();
    }
    /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */ add(index, remove, add) {
        addImplementation(this, index, remove, add);
    }
    // To do: add this when moving to `micromark`.
    // /**
    //  * Create an edit: but insert `add` before existing additions.
    //  *
    //  * @param {number} index
    //  * @param {number} remove
    //  * @param {Array<Event>} add
    //  * @returns {undefined}
    //  */
    // addBefore(index, remove, add) {
    //   addImplementation(this, index, remove, add, true)
    // }
    /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */ consume(events) {
        this.map.sort(function(a, b) {
            return a[0] - b[0];
        });
        /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */ if (this.map.length === 0) {
            return;
        }
        // To do: if links are added in events, like they are in `markdown-rs`,
        // this is needed.
        // // Calculate jumps: where items in the current list move to.
        // /** @type {Array<Jump>} */
        // const jumps = []
        // let index = 0
        // let addAcc = 0
        // let removeAcc = 0
        // while (index < this.map.length) {
        //   const [at, remove, add] = this.map[index]
        //   removeAcc += remove
        //   addAcc += add.length
        //   jumps.push([at, removeAcc, addAcc])
        //   index += 1
        // }
        //
        // . shiftLinks(events, jumps)
        let index = this.map.length;
        /** @type {Array<Array<Event>>} */ const vecs = [];
        while(index > 0){
            index -= 1;
            vecs.push(events.slice(this.map[index][0] + this.map[index][1]), this.map[index][2]);
            // Truncate rest.
            events.length = this.map[index][0];
        }
        vecs.push(events.slice());
        events.length = 0;
        let slice = vecs.pop();
        while(slice){
            for (const element of slice){
                events.push(element);
            }
            slice = vecs.pop();
        }
        // Truncate everything.
        this.map.length = 0;
        this.index.clear();
    }
}
/**
 * Create an edit.
 *
 * @param {EditMap} editMap
 *   Edit map to apply to.
 * @param {number} at
 *   Index at which to apply the edit.
 * @param {number} remove
 *   Count of items to remove at the index.
 * @param {Array<Event>} add
 *   Items to add at the index.
 * @returns {undefined}
 *   Nothing.
 */ function addImplementation(editMap, at, remove, add) {
    /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */ if (remove === 0 && add.length === 0) {
        return;
    }
    const existing = editMap.index.get(at);
    if (existing) {
        existing[1] += remove;
        // To do: before not used by tables, use when moving to micromark.
        // if (before) {
        //   add.push(...existing[2])
        //   existing[2] = add
        // } else {
        existing[2].push(...add);
        // }
        return;
    }
    /** @type {Change} */ const change = [
        at,
        remove,
        add
    ];
    editMap.map.push(change);
    editMap.index.set(at, change);
} // /**
 //  * Shift `previous` and `next` links according to `jumps`.
 //  *
 //  * This fixes links in case there are events removed or added between them.
 //  *
 //  * @param {Array<Event>} events
 //  * @param {Array<Jump>} jumps
 //  */
 // function shiftLinks(events, jumps) {
 //   let jumpIndex = 0
 //   let index = 0
 //   let add = 0
 //   let rm = 0
 //   while (index < events.length) {
 //     const rmCurr = rm
 //     while (jumpIndex < jumps.length && jumps[jumpIndex][0] <= index) {
 //       add = jumps[jumpIndex][2]
 //       rm = jumps[jumpIndex][1]
 //       jumpIndex += 1
 //     }
 //     // Ignore items that will be removed.
 //     if (rm > rmCurr) {
 //       index += rm - rmCurr
 //     } else {
 //       // ?
 //       // if let Some(link) = &events[index].link {
 //       //     if let Some(next) = link.next {
 //       //         events[next].link.as_mut().unwrap().previous = Some(index + add - rm);
 //       //         while jumpIndex < jumps.len() && jumps[jumpIndex].0 <= next {
 //       //             add = jumps[jumpIndex].2;
 //       //             rm = jumps[jumpIndex].1;
 //       //             jumpIndex += 1;
 //       //         }
 //       //         events[index].link.as_mut().unwrap().next = Some(next + add - rm);
 //       //         index = next;
 //       //         continue;
 //       //     }
 //       // }
 //       index += 1
 //     }
 //   }
 // }
}),
"[project]/node_modules/micromark-extension-gfm-table/dev/lib/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTableHtml",
    ()=>gfmTableHtml
]);
/**
 * @import {HtmlExtension} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
;
const alignment = {
    none: '',
    left: ' align="left"',
    right: ' align="right"',
    center: ' align="center"'
};
function gfmTableHtml() {
    return {
        enter: {
            table (token) {
                const tableAlign = token._align;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(tableAlign, 'expected `_align`');
                this.lineEndingIfNeeded();
                this.tag('<table>');
                this.setData('tableAlign', tableAlign);
            },
            tableBody () {
                this.tag('<tbody>');
            },
            tableData () {
                const tableAlign = this.getData('tableAlign');
                const tableColumn = this.getData('tableColumn');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(tableAlign, 'expected `tableAlign`');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(typeof tableColumn === 'number', 'expected `tableColumn`');
                const align = alignment[tableAlign[tableColumn]];
                if (align === undefined) {
                    // Capture results to ignore them.
                    this.buffer();
                } else {
                    this.lineEndingIfNeeded();
                    this.tag('<td' + align + '>');
                }
            },
            tableHead () {
                this.lineEndingIfNeeded();
                this.tag('<thead>');
            },
            tableHeader () {
                const tableAlign = this.getData('tableAlign');
                const tableColumn = this.getData('tableColumn');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(tableAlign, 'expected `tableAlign`');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(typeof tableColumn === 'number', 'expected `tableColumn`');
                const align = alignment[tableAlign[tableColumn]];
                this.lineEndingIfNeeded();
                this.tag('<th' + align + '>');
            },
            tableRow () {
                this.setData('tableColumn', 0);
                this.lineEndingIfNeeded();
                this.tag('<tr>');
            }
        },
        exit: {
            // Overwrite the default code text data handler to unescape escaped pipes when
            // they are in tables.
            codeTextData (token) {
                let value = this.sliceSerialize(token);
                if (this.getData('tableAlign')) {
                    value = value.replace(/\\([\\|])/g, replace);
                }
                this.raw(this.encode(value));
            },
            table () {
                this.setData('tableAlign');
                // Note: we don’t set `slurpAllLineEndings` anymore, in delimiter rows,
                // but we do need to reset it to match a funky newline GH generates for
                // list items combined with tables.
                this.setData('slurpAllLineEndings');
                this.lineEndingIfNeeded();
                this.tag('</table>');
            },
            tableBody () {
                this.lineEndingIfNeeded();
                this.tag('</tbody>');
            },
            tableData () {
                const tableAlign = this.getData('tableAlign');
                const tableColumn = this.getData('tableColumn');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(tableAlign, 'expected `tableAlign`');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(typeof tableColumn === 'number', 'expected `tableColumn`');
                if (tableColumn in tableAlign) {
                    this.tag('</td>');
                    this.setData('tableColumn', tableColumn + 1);
                } else {
                    // Stop capturing.
                    this.resume();
                }
            },
            tableHead () {
                this.lineEndingIfNeeded();
                this.tag('</thead>');
            },
            tableHeader () {
                const tableColumn = this.getData('tableColumn');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(typeof tableColumn === 'number', 'expected `tableColumn`');
                this.tag('</th>');
                this.setData('tableColumn', tableColumn + 1);
            },
            tableRow () {
                const tableAlign = this.getData('tableAlign');
                let tableColumn = this.getData('tableColumn');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(tableAlign, 'expected `tableAlign`');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(typeof tableColumn === 'number', 'expected `tableColumn`');
                while(tableColumn < tableAlign.length){
                    this.lineEndingIfNeeded();
                    this.tag('<td' + alignment[tableAlign[tableColumn]] + '></td>');
                    tableColumn++;
                }
                this.setData('tableColumn', tableColumn);
                this.lineEndingIfNeeded();
                this.tag('</tr>');
            }
        }
    };
}
/**
 * Replace escaped characters in table cells.
 *
 * @param {string} $0
 *   Whole.
 * @param {string} $1
 *   Escaped character (either a backslash or a pipe).
 * @returns {string}
 *   Replacement for the escaped character.
 */ function replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === '|' ? $1 : $0;
}
}),
"[project]/node_modules/micromark-extension-gfm-table/dev/lib/infer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTableAlign",
    ()=>gfmTableAlign
]);
/**
 * @import {Event} from 'micromark-util-types'
 */ /**
 * @typedef {'center' | 'left' | 'none' | 'right'} Align
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
;
function gfmTableAlign(events, index) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(events[index][1].type === 'table', 'expected table');
    let inDelimiterRow = false;
    /** @type {Array<Align>} */ const align = [];
    while(index < events.length){
        const event = events[index];
        if (inDelimiterRow) {
            if (event[0] === 'enter') {
                // Start of alignment value: set a new column.
                // To do: `markdown-rs` uses `tableDelimiterCellValue`.
                if (event[1].type === 'tableContent') {
                    align.push(events[index + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
                }
            } else if (event[1].type === 'tableContent') {
                if (events[index - 1][1].type === 'tableDelimiterMarker') {
                    const alignIndex = align.length - 1;
                    align[alignIndex] = align[alignIndex] === 'left' ? 'center' : 'right';
                }
            } else if (event[1].type === 'tableDelimiterRow') {
                break;
            }
        } else if (event[0] === 'enter' && event[1].type === 'tableDelimiterRow') {
            inDelimiterRow = true;
        }
        index += 1;
    }
    return align;
}
}),
"[project]/node_modules/micromark-extension-gfm-table/dev/lib/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTable",
    ()=>gfmTable
]);
/**
 * @import {Event, Extension, Point, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */ /**
 * @typedef {[number, number, number, number]} Range
 *   Cell info.
 *
 * @typedef {0 | 1 | 2 | 3} RowKind
 *   Where we are: `1` for head row, `2` for delimiter row, `3` for body row.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-factory-space/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$edit$2d$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-table/dev/lib/edit-map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$infer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-table/dev/lib/infer.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function gfmTable() {
    return {
        flow: {
            null: {
                name: 'table',
                tokenize: tokenizeTable,
                resolveAll: resolveTable
            }
        }
    };
}
/**
 * Tokenizer for GFM tables.
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeTable(effects, ok, nok) {
    const self = this;
    let size = 0;
    let sizeB = 0;
    /** @type {boolean | undefined} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of a GFM table.
   *
   * If there is a valid table row or table head before, then we try to parse
   * another row.
   * Otherwise, we try to parse a head.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   * > | | b |
   *     ^
   * ```
   * @type {State}
   */ function start(code) {
        let index = self.events.length - 1;
        while(index > -1){
            const { type } = self.events[index][1];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].lineEnding || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
            type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].linePrefix) {
                index--;
            } else {
                break;
            }
        }
        const tail = index > -1 ? self.events[index][1].type : null;
        const next = tail === 'tableHead' || tail === 'tableRow' ? bodyRowStart : headRowBefore;
        // Don’t allow lazy body rows.
        if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
            return nok(code);
        }
        return next(code);
    }
    /**
   * Before table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headRowBefore(code) {
        effects.enter('tableHead');
        effects.enter('tableRow');
        return headRowStart(code);
    }
    /**
   * Before table head row, after whitespace.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headRowStart(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            return headRowBreak(code);
        }
        // To do: micromark-js should let us parse our own whitespace in extensions,
        // like `markdown-rs`:
        //
        // ```js
        // // 4+ spaces.
        // if (markdownSpace(code)) {
        //   return nok(code)
        // }
        // ```
        seen = true;
        // Count the first character, that isn’t a pipe, double.
        sizeB += 1;
        return headRowBreak(code);
    }
    /**
   * At break in table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *       ^
   *         ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headRowBreak(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof) {
            // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
            return nok(code);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            // If anything other than one pipe (ignoring whitespace) was used, it’s fine.
            if (sizeB > 1) {
                sizeB = 0;
                // To do: check if this works.
                // Feel free to interrupt:
                self.interrupt = true;
                effects.exit('tableRow');
                effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].lineEnding);
                effects.consume(code);
                effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].lineEnding);
                return headDelimiterStart;
            }
            // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
            return nok(code);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            // To do: check if this is fine.
            // effects.attempt(State::Next(StateName::GfmTableHeadRowBreak), State::Nok)
            // State::Retry(space_or_tab(tokenizer))
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, headRowBreak, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].whitespace)(code);
        }
        sizeB += 1;
        if (seen) {
            seen = false;
            // Header cell count.
            size += 1;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            effects.enter('tableCellDivider');
            effects.consume(code);
            effects.exit('tableCellDivider');
            // Whether a delimiter was seen.
            seen = true;
            return headRowBreak;
        }
        // Anything else is cell data.
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data);
        return headRowData(code);
    }
    /**
   * In table head row data.
   *
   * ```markdown
   * > | | a |
   *       ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headRowData(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data);
            return headRowBreak(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash ? headRowEscape : headRowData;
    }
    /**
   * In table head row escape.
   *
   * ```markdown
   * > | | a\-b |
   *         ^
   *   | | ---- |
   *   | | c    |
   * ```
   *
   * @type {State}
   */ function headRowEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            effects.consume(code);
            return headRowData;
        }
        return headRowData(code);
    }
    /**
   * Before delimiter row.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headDelimiterStart(code) {
        // Reset `interrupt`.
        self.interrupt = false;
        // Note: in `markdown-rs`, we need to handle piercing here too.
        if (self.parser.lazy[self.now().line]) {
            return nok(code);
        }
        effects.enter('tableDelimiterRow');
        // Track if we’ve seen a `:` or `|`.
        seen = false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(self.parser.constructs.disable.null, 'expected `disabled.null`');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, headDelimiterBefore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].linePrefix, self.parser.constructs.disable.null.includes('codeIndented') ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].tabSize)(code);
        }
        return headDelimiterBefore(code);
    }
    /**
   * Before delimiter row, after optional whitespace.
   *
   * Reused when a `|` is found later, to parse another cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */ function headDelimiterBefore(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) {
            return headDelimiterValueBefore(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            seen = true;
            // If we start with a pipe, we open a cell marker.
            effects.enter('tableCellDivider');
            effects.consume(code);
            effects.exit('tableCellDivider');
            return headDelimiterCellBefore;
        }
        // More whitespace / empty row not allowed at start.
        return headDelimiterNok(code);
    }
    /**
   * After `|`, before delimiter cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *      ^
   * ```
   *
   * @type {State}
   */ function headDelimiterCellBefore(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, headDelimiterValueBefore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].whitespace)(code);
        }
        return headDelimiterValueBefore(code);
    }
    /**
   * Before delimiter cell value.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */ function headDelimiterValueBefore(code) {
        // Align: left.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) {
            sizeB += 1;
            seen = true;
            effects.enter('tableDelimiterMarker');
            effects.consume(code);
            effects.exit('tableDelimiterMarker');
            return headDelimiterLeftAlignmentAfter;
        }
        // Align: none.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash) {
            sizeB += 1;
            // To do: seems weird that this *isn’t* left aligned, but that state is used?
            return headDelimiterLeftAlignmentAfter(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            return headDelimiterCellAfter(code);
        }
        return headDelimiterNok(code);
    }
    /**
   * After delimiter cell left alignment marker.
   *
   * ```markdown
   *   | | a  |
   * > | | :- |
   *        ^
   * ```
   *
   * @type {State}
   */ function headDelimiterLeftAlignmentAfter(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash) {
            effects.enter('tableDelimiterFiller');
            return headDelimiterFiller(code);
        }
        // Anything else is not ok after the left-align colon.
        return headDelimiterNok(code);
    }
    /**
   * In delimiter cell filler.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */ function headDelimiterFiller(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].dash) {
            effects.consume(code);
            return headDelimiterFiller;
        }
        // Align is `center` if it was `left`, `right` otherwise.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].colon) {
            seen = true;
            effects.exit('tableDelimiterFiller');
            effects.enter('tableDelimiterMarker');
            effects.consume(code);
            effects.exit('tableDelimiterMarker');
            return headDelimiterRightAlignmentAfter;
        }
        effects.exit('tableDelimiterFiller');
        return headDelimiterRightAlignmentAfter(code);
    }
    /**
   * After delimiter cell right alignment marker.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *         ^
   * ```
   *
   * @type {State}
   */ function headDelimiterRightAlignmentAfter(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, headDelimiterCellAfter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].whitespace)(code);
        }
        return headDelimiterCellAfter(code);
    }
    /**
   * After delimiter cell.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *          ^
   * ```
   *
   * @type {State}
   */ function headDelimiterCellAfter(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            return headDelimiterBefore(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            // Exit when:
            // * there was no `:` or `|` at all (it’s a thematic break or setext
            //   underline instead)
            // * the header cell count is not the delimiter cell count
            if (!seen || size !== sizeB) {
                return headDelimiterNok(code);
            }
            // Note: in markdown-rs`, a reset is needed here.
            effects.exit('tableDelimiterRow');
            effects.exit('tableHead');
            // To do: in `markdown-rs`, resolvers need to be registered manually.
            // effects.register_resolver(ResolveName::GfmTable)
            return ok(code);
        }
        return headDelimiterNok(code);
    }
    /**
   * In delimiter row, at a disallowed byte.
   *
   * ```markdown
   *   | | a |
   * > | | x |
   *       ^
   * ```
   *
   * @type {State}
   */ function headDelimiterNok(code) {
        // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
        return nok(code);
    }
    /**
   * Before table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   * ```
   *
   * @type {State}
   */ function bodyRowStart(code) {
        // Note: in `markdown-rs` we need to manually take care of a prefix,
        // but in `micromark-js` that is done for us, so if we’re here, we’re
        // never at whitespace.
        effects.enter('tableRow');
        return bodyRowBreak(code);
    }
    /**
   * At break in table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   *       ^
   *         ^
   * ```
   *
   * @type {State}
   */ function bodyRowBreak(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            effects.enter('tableCellDivider');
            effects.consume(code);
            effects.exit('tableCellDivider');
            return bodyRowBreak;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.exit('tableRow');
            return ok(code);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, bodyRowBreak, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].whitespace)(code);
        }
        // Anything else is cell content.
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data);
        return bodyRowData(code);
    }
    /**
   * In table body row data.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *       ^
   * ```
   *
   * @type {State}
   */ function bodyRowData(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data);
            return bodyRowBreak(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash ? bodyRowEscape : bodyRowData;
    }
    /**
   * In table body row escape.
   *
   * ```markdown
   *   | | a    |
   *   | | ---- |
   * > | | b\-c |
   *         ^
   * ```
   *
   * @type {State}
   */ function bodyRowEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].verticalBar) {
            effects.consume(code);
            return bodyRowData;
        }
        return bodyRowData(code);
    }
}
/** @type {Resolver} */ function resolveTable(events, context) {
    let index = -1;
    let inFirstCellAwaitingPipe = true;
    /** @type {RowKind} */ let rowKind = 0;
    /** @type {Range} */ let lastCell = [
        0,
        0,
        0,
        0
    ];
    /** @type {Range} */ let cell = [
        0,
        0,
        0,
        0
    ];
    let afterHeadAwaitingFirstBodyRow = false;
    let lastTableEnd = 0;
    /** @type {Token | undefined} */ let currentTable;
    /** @type {Token | undefined} */ let currentBody;
    /** @type {Token | undefined} */ let currentCell;
    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$edit$2d$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditMap"]();
    while(++index < events.length){
        const event = events[index];
        const token = event[1];
        if (event[0] === 'enter') {
            // Start of head.
            if (token.type === 'tableHead') {
                afterHeadAwaitingFirstBodyRow = false;
                // Inject previous (body end and) table end.
                if (lastTableEnd !== 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(currentTable, 'there should be a table opening');
                    flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
                    currentBody = undefined;
                    lastTableEnd = 0;
                }
                // Inject table start.
                currentTable = {
                    type: 'table',
                    start: Object.assign({}, token.start),
                    // Note: correct end is set later.
                    end: Object.assign({}, token.end)
                };
                map.add(index, 0, [
                    [
                        'enter',
                        currentTable,
                        context
                    ]
                ]);
            } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
                inFirstCellAwaitingPipe = true;
                currentCell = undefined;
                lastCell = [
                    0,
                    0,
                    0,
                    0
                ];
                cell = [
                    0,
                    index + 1,
                    0,
                    0
                ];
                // Inject table body start.
                if (afterHeadAwaitingFirstBodyRow) {
                    afterHeadAwaitingFirstBodyRow = false;
                    currentBody = {
                        type: 'tableBody',
                        start: Object.assign({}, token.start),
                        // Note: correct end is set later.
                        end: Object.assign({}, token.end)
                    };
                    map.add(index, 0, [
                        [
                            'enter',
                            currentBody,
                            context
                        ]
                    ]);
                }
                rowKind = token.type === 'tableDelimiterRow' ? 2 : currentBody ? 3 : 1;
            } else if (rowKind && (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
                inFirstCellAwaitingPipe = false;
                // First value in cell.
                if (cell[2] === 0) {
                    if (lastCell[1] !== 0) {
                        cell[0] = cell[1];
                        currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
                        lastCell = [
                            0,
                            0,
                            0,
                            0
                        ];
                    }
                    cell[2] = index;
                }
            } else if (token.type === 'tableCellDivider') {
                if (inFirstCellAwaitingPipe) {
                    inFirstCellAwaitingPipe = false;
                } else {
                    if (lastCell[1] !== 0) {
                        cell[0] = cell[1];
                        currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
                    }
                    lastCell = cell;
                    cell = [
                        lastCell[1],
                        index,
                        0,
                        0
                    ];
                }
            }
        } else if (token.type === 'tableHead') {
            afterHeadAwaitingFirstBodyRow = true;
            lastTableEnd = index;
        } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
            lastTableEnd = index;
            if (lastCell[1] !== 0) {
                cell[0] = cell[1];
                currentCell = flushCell(map, context, lastCell, rowKind, index, currentCell);
            } else if (cell[1] !== 0) {
                currentCell = flushCell(map, context, cell, rowKind, index, currentCell);
            }
            rowKind = 0;
        } else if (rowKind && (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].data || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
            cell[3] = index;
        }
    }
    if (lastTableEnd !== 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(currentTable, 'expected table opening');
        flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
    }
    map.consume(context.events);
    // To do: move this into `html`, when events are exposed there.
    // That’s what `markdown-rs` does.
    // That needs updates to `mdast-util-gfm-table`.
    index = -1;
    while(++index < context.events.length){
        const event = context.events[index];
        if (event[0] === 'enter' && event[1].type === 'table') {
            event[1]._align = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$infer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTableAlign"])(context.events, index);
        }
    }
    return events;
}
/**
 * Generate a cell.
 *
 * @param {EditMap} map
 *   Edit map to apply to.
 * @param {Readonly<TokenizeContext>} context
 *   Tokenize context.
 * @param {Readonly<Range>} range
 *   Range of the cell within events.
 * @param {RowKind} rowKind
 *   Type of row.
 * @param {number | undefined} rowEnd
 *   Index of the end of the row, if known.
 * @param {Token | undefined} previousCell
 *   Previous cell token, if any.
 * @returns {Token | undefined}
 *   Current cell token after flushing, if any.
 */ // eslint-disable-next-line max-params
function flushCell(map, context, range, rowKind, rowEnd, previousCell) {
    // `markdown-rs` uses:
    // rowKind === 2 ? 'tableDelimiterCell' : 'tableCell'
    const groupName = rowKind === 1 ? 'tableHeader' : rowKind === 2 ? 'tableDelimiter' : 'tableData';
    // `markdown-rs` uses:
    // rowKind === 2 ? 'tableDelimiterCellValue' : 'tableCellText'
    const valueName = 'tableContent';
    // Insert an exit for the previous cell, if there is one.
    //
    // ```markdown
    // > | | aa | bb | cc |
    //          ^-- exit
    //           ^^^^-- this cell
    // ```
    if (range[0] !== 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(previousCell, 'expected previous cell enter');
        previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
        map.add(range[0], 0, [
            [
                'exit',
                previousCell,
                context
            ]
        ]);
    }
    // Insert enter of this cell.
    //
    // ```markdown
    // > | | aa | bb | cc |
    //           ^-- enter
    //           ^^^^-- this cell
    // ```
    const now = getPoint(context.events, range[1]);
    previousCell = {
        type: groupName,
        start: Object.assign({}, now),
        // Note: correct end is set later.
        end: Object.assign({}, now)
    };
    map.add(range[1], 0, [
        [
            'enter',
            previousCell,
            context
        ]
    ]);
    // Insert text start at first data start and end at last data end, and
    // remove events between.
    //
    // ```markdown
    // > | | aa | bb | cc |
    //            ^-- enter
    //             ^-- exit
    //           ^^^^-- this cell
    // ```
    if (range[2] !== 0) {
        const relatedStart = getPoint(context.events, range[2]);
        const relatedEnd = getPoint(context.events, range[3]);
        /** @type {Token} */ const valueToken = {
            type: valueName,
            start: Object.assign({}, relatedStart),
            end: Object.assign({}, relatedEnd)
        };
        map.add(range[2], 0, [
            [
                'enter',
                valueToken,
                context
            ]
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(range[3] !== 0);
        if (rowKind !== 2) {
            // Fix positional info on remaining events
            const start = context.events[range[2]];
            const end = context.events[range[3]];
            start[1].end = Object.assign({}, end[1].end);
            start[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].chunkText;
            start[1].contentType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].contentTypeText;
            // Remove if needed.
            if (range[3] > range[2] + 1) {
                const a = range[2] + 1;
                const b = range[3] - range[2] - 1;
                map.add(a, b, []);
            }
        }
        map.add(range[3] + 1, 0, [
            [
                'exit',
                valueToken,
                context
            ]
        ]);
    }
    // Insert an exit for the last cell, if at the row end.
    //
    // ```markdown
    // > | | aa | bb | cc |
    //                    ^-- exit
    //               ^^^^^^-- this cell (the last one contains two “between” parts)
    // ```
    if (rowEnd !== undefined) {
        previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
        map.add(rowEnd, 0, [
            [
                'exit',
                previousCell,
                context
            ]
        ]);
        previousCell = undefined;
    }
    return previousCell;
}
/**
 * Generate table end (and table body end).
 *
 * @param {Readonly<EditMap>} map
 *   Edit map to apply to.
 * @param {Readonly<TokenizeContext>} context
 *   Tokenize context.
 * @param {number} index
 *   Index within the events where the table end should be inserted.
 * @param {Token} table
 *   Table token.
 * @param {Token | undefined} tableBody
 *   Table body token, if any.
 * @returns {undefined}
 *   Nothing.
 */ // eslint-disable-next-line max-params
function flushTableEnd(map, context, index, table, tableBody) {
    /** @type {Array<Event>} */ const exits = [];
    const related = getPoint(context.events, index);
    if (tableBody) {
        tableBody.end = Object.assign({}, related);
        exits.push([
            'exit',
            tableBody,
            context
        ]);
    }
    table.end = Object.assign({}, related);
    exits.push([
        'exit',
        table,
        context
    ]);
    map.add(index + 1, 0, exits);
}
/**
 * Get the point (start or end) for a given event in the list of events.
 *
 * @param {Readonly<Array<Event>>} events
 *   List of events.
 * @param {number} index
 *   Index of the event to get the point for.
 * @returns {Readonly<Point>}
 *   Start point for enter and end point for exit.
 */ function getPoint(events, index) {
    const event = events[index];
    const side = event[0] === 'enter' ? 'start' : 'end';
    return event[1][side];
}
}),
"[project]/node_modules/micromark-extension-gfm-tagfilter/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTagfilterHtml",
    ()=>gfmTagfilterHtml
]);
/**
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Token} Token
 */ // An opening or closing tag start, followed by a case-insensitive specific tag name,
// followed by HTML whitespace, a greater than, or a slash.
const reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
// As HTML (text) parses tags separately (and very strictly), we don’t need to be
// global.
const reText = new RegExp('^' + reFlow.source, 'i');
function gfmTagfilterHtml() {
    return {
        exit: {
            htmlFlowData (token) {
                exitHtmlData.call(this, token, reFlow);
            },
            htmlTextData (token) {
                exitHtmlData.call(this, token, reText);
            }
        }
    };
}
/**
 * @this {CompileContext}
 * @param {Token} token
 * @param {RegExp} filter
 * @returns {undefined}
 */ function exitHtmlData(token, filter) {
    let value = this.sliceSerialize(token);
    if (this.options.allowDangerousHtml) {
        value = value.replace(filter, '&lt;$1$2');
    }
    this.raw(this.encode(value));
}
}),
"[project]/node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {HtmlExtension} from 'micromark-util-types'
 */ /**
 * Create an HTML extension for `micromark` to support GFM task list items when
 * serializing to HTML.
 *
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions` to
 *   support GFM task list items when serializing to HTML.
 */ __turbopack_context__.s([
    "gfmTaskListItemHtml",
    ()=>gfmTaskListItemHtml
]);
function gfmTaskListItemHtml() {
    return {
        enter: {
            taskListCheck () {
                this.tag('<input type="checkbox" disabled="" ');
            }
        },
        exit: {
            taskListCheck () {
                this.tag('/>');
            },
            taskListCheckValueChecked () {
                this.tag('checked="" ');
            }
        }
    };
}
}),
"[project]/node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfmTaskListItem",
    ()=>gfmTaskListItem
]);
/**
 * @import {Extension, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/devlop/lib/development.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-factory-space/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)");
;
;
;
;
const tasklistCheck = {
    name: 'tasklistCheck',
    tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
    return {
        text: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket]: tasklistCheck
        }
    };
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function tokenizeTasklistCheck(effects, ok, nok) {
    const self = this;
    return open;
    //TURBOPACK unreachable
    ;
    /**
   * At start of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *       ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        if (// Exit if there’s stuff before.
        self.previous !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || // Exit if not in the first content that is the first child of a list
        // item.
        !self._gfmTasklistFirstContentOfListItem) {
            return nok(code);
        }
        effects.enter('taskListCheck');
        effects.enter('taskListCheckMarker');
        effects.consume(code);
        effects.exit('taskListCheckMarker');
        return inside;
    }
    /**
   * In task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *        ^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        // Currently we match how GH works in files.
        // To match how GH works in comments, use `markdownSpace` (`[\t ]`) instead
        // of `markdownLineEndingOrSpace` (`[\t\n\r ]`).
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code)) {
            effects.enter('taskListCheckValueUnchecked');
            effects.consume(code);
            effects.exit('taskListCheckValueUnchecked');
            return close;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].uppercaseX || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].lowercaseX) {
            effects.enter('taskListCheckValueChecked');
            effects.consume(code);
            effects.exit('taskListCheckValueChecked');
            return close;
        }
        return nok(code);
    }
    /**
   * At close of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *         ^
   * ```
   *
   * @type {State}
   */ function close(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.enter('taskListCheckMarker');
            effects.consume(code);
            effects.exit('taskListCheckMarker');
            effects.exit('taskListCheck');
            return after;
        }
        return nok(code);
    }
    /**
   * @type {State}
   */ function after(code) {
        // EOL in paragraph means there must be something else after it.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            return ok(code);
        }
        // Space or tab?
        // Check what comes after.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return effects.check({
                tokenize: spaceThenNonSpace
            }, ok, nok)(code);
        }
        // EOF, or non-whitespace, both wrong.
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function spaceThenNonSpace(effects, ok, nok) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factorySpace"])(effects, after, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].whitespace);
    //TURBOPACK unreachable
    ;
    /**
   * After whitespace, after task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *           ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        // EOF means there was nothing, so bad.
        // EOL means there’s content after it, so good.
        // Impossible to have more spaces.
        // Anything else is good.
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof ? nok(code) : ok(code);
    }
}
}),
"[project]/node_modules/micromark-extension-gfm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gfm",
    ()=>gfm,
    "gfmHtml",
    ()=>gfmHtml
]);
/**
 * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
 * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$combine$2d$extensions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-combine-extensions/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$autolink$2d$literal$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/syntax.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$autolink$2d$literal$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$footnote$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-footnote/dev/lib/syntax.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$footnote$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-footnote/dev/lib/html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$strikethrough$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$strikethrough$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-table/dev/lib/syntax.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-table/dev/lib/html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$tagfilter$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-tagfilter/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$task$2d$list$2d$item$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$task$2d$list$2d$item$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function gfm(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$combine$2d$extensions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineExtensions"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$autolink$2d$literal$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmAutolinkLiteral"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$footnote$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmFootnote"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$strikethrough$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmStrikethrough"])(options),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTable"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$task$2d$list$2d$item$2f$dev$2f$lib$2f$syntax$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTaskListItem"])()
    ]);
}
function gfmHtml(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$combine$2d$extensions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineHtmlExtensions"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$autolink$2d$literal$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmAutolinkLiteralHtml"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$footnote$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmFootnoteHtml"])(options),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$strikethrough$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmStrikethroughHtml"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$table$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTableHtml"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$tagfilter$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTagfilterHtml"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2d$task$2d$list$2d$item$2f$dev$2f$lib$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmTaskListItemHtml"])()
    ]);
}
}),
"[project]/node_modules/micromark-factory-space/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factorySpace",
    ()=>factorySpace,
    "factorySpaceMinMax",
    ()=>factorySpaceMinMax
]);
/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
;
function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Infinity;
    let size = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}
function factorySpaceMinMax(effects, ok, nok, type, min, max) {
    let size = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if (max > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return after(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownSpace"])(code) && size < max) {
            effects.consume(code);
            size++;
            return prefix;
        }
        effects.exit(type);
        return after(code);
    }
    /** @type {State} */ function after(code) {
        return size >= min ? ok(code) : nok(code);
    }
}
}),
"[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asciiAlpha",
    ()=>asciiAlpha,
    "asciiAlphanumeric",
    ()=>asciiAlphanumeric,
    "asciiAtext",
    ()=>asciiAtext,
    "asciiControl",
    ()=>asciiControl,
    "asciiDigit",
    ()=>asciiDigit,
    "asciiHexDigit",
    ()=>asciiHexDigit,
    "asciiPunctuation",
    ()=>asciiPunctuation,
    "markdownLineEnding",
    ()=>markdownLineEnding,
    "markdownLineEndingOrSpace",
    ()=>markdownLineEndingOrSpace,
    "markdownSpace",
    ()=>markdownSpace,
    "unicodePunctuation",
    ()=>unicodePunctuation,
    "unicodeWhitespace",
    ()=>unicodeWhitespace
]);
/**
 * @import {Code} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].del));
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code) {
    return code !== null && code < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].horizontalTab;
}
function markdownLineEndingOrSpace(code) {
    return code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].nul || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].space);
}
function markdownSpace(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].horizontalTab || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].virtualSpace || code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].space;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = regexCheck(/\s/);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 *   Expression.
 * @returns {(code: Code) => boolean}
 *   Check.
 */ function regexCheck(regex) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */ function check(code) {
        return code !== null && code > -1 && regex.test(String.fromCharCode(code));
    }
}
}),
"[project]/node_modules/micromark-util-chunked/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "push",
    ()=>push,
    "splice",
    ()=>splice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)");
;
function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {Array<unknown>} */ let parameters;
    // Make start between zero and `end` (included).
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    // No need to chunk the items if there’s only a couple (10k) items.
    if (items.length < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        // @ts-expect-error Hush, it’s fine.
        list.splice(...parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) list.splice(start, remove);
        // Insert the items in chunks to not cause stack overflows.
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize);
            parameters.unshift(start, 0);
            // @ts-expect-error Hush, it’s fine.
            list.splice(...parameters);
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
            start += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}
}),
"[project]/node_modules/micromark-util-classify-character/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classifyCharacter",
    ()=>classifyCharacter
]);
/**
 * @import {Code} from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)");
;
;
function classifyCharacter(code) {
    if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].characterGroupWhitespace;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constants"].characterGroupPunctuation;
    }
}
}),
"[project]/node_modules/micromark-util-combine-extensions/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineExtensions",
    ()=>combineExtensions,
    "combineHtmlExtensions",
    ()=>combineHtmlExtensions
]);
/**
 * @import {
 *   Extension,
 *   Handles,
 *   HtmlExtension,
 *   NormalizedExtension
 * } from 'micromark-util-types'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-chunked/dev/index.js [app-rsc] (ecmascript)");
;
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length){
        syntaxExtension(all, extensions[index]);
    }
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function syntaxExtension(all, extension) {
    /** @type {keyof Extension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});
        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];
        /** @type {string} */ let code;
        if (right) {
            for(code in right){
                if (!hasOwnProperty.call(left, code)) left[code] = [];
                const value = right[code];
                constructs(// @ts-expect-error Looks like a list.
                left[code], Array.isArray(value) ? value : value ? [
                    value
                ] : []);
            }
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 *   List of constructs to merge into.
 * @param {Array<unknown>} list
 *   List of constructs to merge.
 * @returns {undefined}
 *   Nothing.
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {Array<unknown>} */ const before = [];
    while(++index < list.length){
        // @ts-expect-error Looks like an object.
        ;
        (list[index].add === 'after' ? existing : before).push(list[index]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splice"])(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length){
        htmlExtension(handlers, htmlExtensions[index]);
    }
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function htmlExtension(all, extension) {
    /** @type {keyof HtmlExtension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {keyof Handles} */ let type;
        if (right) {
            for(type in right){
                // @ts-expect-error assume document vs regular handler are managed correctly.
                left[type] = right[type];
            }
        }
    }
}
}),
"[project]/node_modules/micromark-util-encode/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode
]);
const characterReferences = {
    '"': 'quot',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
};
function encode(value) {
    return value.replace(/["&<>]/g, replace);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} value
   *   Value to replace.
   * @returns {string}
   *   Encoded value.
   */ function replace(value) {
        return '&' + characterReferences[value] + ';';
    }
}
}),
"[project]/node_modules/micromark-util-normalize-identifier/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeIdentifier",
    ()=>normalizeIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/values.js [app-rsc] (ecmascript)");
;
function normalizeIdentifier(value) {
    return value// Collapse markdown whitespace.
    .replace(/[\t\n\r ]+/g, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["values"].space)// Trim.
    .replace(/^ | $/g, '')// Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}
}),
"[project]/node_modules/micromark-util-resolve-all/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */ __turbopack_context__.s([
    "resolveAll",
    ()=>resolveAll
]);
function resolveAll(constructs, events, context) {
    /** @type {Array<Resolver>} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}
}),
"[project]/node_modules/micromark-util-sanitize-uri/dev/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeUri",
    ()=>normalizeUri,
    "sanitizeUri",
    ()=>sanitizeUri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-character/dev/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-encode/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-util-symbol/lib/values.js [app-rsc] (ecmascript)");
;
;
;
function sanitizeUri(url, protocol) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"])(normalizeUri(url || ''));
    if (!protocol) {
        return value;
    }
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
function normalizeUri(value) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = '';
        // A correct percent encoded value.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codes"].percentSign && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 1)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 2))) {
            skip = 2;
        } else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
                replace = String.fromCharCode(code);
            }
        } else if (code > 55_295 && code < 57_344) {
            const next = value.charCodeAt(index + 1);
            // A correct surrogate pair.
            if (code < 56_320 && next > 56_319 && next < 57_344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else {
                replace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
            }
        } else {
            replace = String.fromCharCode(code);
        }
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = '';
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join('') + value.slice(start);
}
}),
"[project]/node_modules/micromark-util-symbol/lib/codes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Character codes.
 *
 * This module is compiled away!
 *
 * micromark works based on character codes.
 * This module contains constants for the ASCII block and the replacement
 * character.
 * A couple of them are handled in a special way, such as the line endings
 * (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
 * tab) and its expansion based on what column it’s at (virtual space),
 * and the end-of-file (eof) character.
 * As values are preprocessed before handling them, the actual characters LF,
 * CR, HT, and NUL (which is present as the replacement character), are
 * guaranteed to not exist.
 *
 * Unicode basic latin block.
 */ __turbopack_context__.s([
    "codes",
    ()=>codes
]);
const codes = {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    virtualSpace: -1,
    eof: null,
    nul: 0,
    soh: 1,
    stx: 2,
    etx: 3,
    eot: 4,
    enq: 5,
    ack: 6,
    bel: 7,
    bs: 8,
    ht: 9,
    lf: 10,
    vt: 11,
    ff: 12,
    cr: 13,
    so: 14,
    si: 15,
    dle: 16,
    dc1: 17,
    dc2: 18,
    dc3: 19,
    dc4: 20,
    nak: 21,
    syn: 22,
    etb: 23,
    can: 24,
    em: 25,
    sub: 26,
    esc: 27,
    fs: 28,
    gs: 29,
    rs: 30,
    us: 31,
    space: 32,
    exclamationMark: 33,
    quotationMark: 34,
    numberSign: 35,
    dollarSign: 36,
    percentSign: 37,
    ampersand: 38,
    apostrophe: 39,
    leftParenthesis: 40,
    rightParenthesis: 41,
    asterisk: 42,
    plusSign: 43,
    comma: 44,
    dash: 45,
    dot: 46,
    slash: 47,
    digit0: 48,
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    colon: 58,
    semicolon: 59,
    lessThan: 60,
    equalsTo: 61,
    greaterThan: 62,
    questionMark: 63,
    atSign: 64,
    uppercaseA: 65,
    uppercaseB: 66,
    uppercaseC: 67,
    uppercaseD: 68,
    uppercaseE: 69,
    uppercaseF: 70,
    uppercaseG: 71,
    uppercaseH: 72,
    uppercaseI: 73,
    uppercaseJ: 74,
    uppercaseK: 75,
    uppercaseL: 76,
    uppercaseM: 77,
    uppercaseN: 78,
    uppercaseO: 79,
    uppercaseP: 80,
    uppercaseQ: 81,
    uppercaseR: 82,
    uppercaseS: 83,
    uppercaseT: 84,
    uppercaseU: 85,
    uppercaseV: 86,
    uppercaseW: 87,
    uppercaseX: 88,
    uppercaseY: 89,
    uppercaseZ: 90,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
    caret: 94,
    underscore: 95,
    graveAccent: 96,
    lowercaseA: 97,
    lowercaseB: 98,
    lowercaseC: 99,
    lowercaseD: 100,
    lowercaseE: 101,
    lowercaseF: 102,
    lowercaseG: 103,
    lowercaseH: 104,
    lowercaseI: 105,
    lowercaseJ: 106,
    lowercaseK: 107,
    lowercaseL: 108,
    lowercaseM: 109,
    lowercaseN: 110,
    lowercaseO: 111,
    lowercaseP: 112,
    lowercaseQ: 113,
    lowercaseR: 114,
    lowercaseS: 115,
    lowercaseT: 116,
    lowercaseU: 117,
    lowercaseV: 118,
    lowercaseW: 119,
    lowercaseX: 120,
    lowercaseY: 121,
    lowercaseZ: 122,
    leftCurlyBrace: 123,
    verticalBar: 124,
    rightCurlyBrace: 125,
    tilde: 126,
    del: 127,
    // Unicode Specials block.
    byteOrderMarker: 65_279,
    // Unicode Specials block.
    replacementCharacter: 65_533 // `�`
};
}),
"[project]/node_modules/micromark-util-symbol/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Parsing markdown comes with a couple of constants, such as minimum or maximum
 * sizes of certain sequences.
 * Additionally, there are a couple symbols used inside micromark.
 * These are all defined here, but compiled away by scripts.
 */ __turbopack_context__.s([
    "constants",
    ()=>constants
]);
const constants = {
    attentionSideAfter: 2,
    attentionSideBefore: 1,
    atxHeadingOpeningFenceSizeMax: 6,
    autolinkDomainSizeMax: 63,
    autolinkSchemeSizeMax: 32,
    cdataOpeningString: 'CDATA[',
    characterGroupPunctuation: 2,
    characterGroupWhitespace: 1,
    characterReferenceDecimalSizeMax: 7,
    characterReferenceHexadecimalSizeMax: 6,
    characterReferenceNamedSizeMax: 31,
    codeFencedSequenceSizeMin: 3,
    contentTypeContent: 'content',
    contentTypeDocument: 'document',
    contentTypeFlow: 'flow',
    contentTypeString: 'string',
    contentTypeText: 'text',
    hardBreakPrefixSizeMin: 2,
    htmlBasic: 6,
    htmlCdata: 5,
    htmlComment: 2,
    htmlComplete: 7,
    htmlDeclaration: 4,
    htmlInstruction: 3,
    htmlRawSizeMax: 8,
    htmlRaw: 1,
    linkResourceDestinationBalanceMax: 32,
    linkReferenceSizeMax: 999,
    listItemValueSizeMax: 10,
    numericBaseDecimal: 10,
    numericBaseHexadecimal: 0x10,
    tabSize: 4,
    thematicBreakMarkerCountMin: 3,
    v8MaxSafeChunkSize: 10_000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.
};
}),
"[project]/node_modules/micromark-util-symbol/lib/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Here is the list of all types of tokens exposed by micromark, with a short
 * explanation of what they include and where they are found.
 * In picking names, generally, the rule is to be as explicit as possible
 * instead of reusing names.
 * For example, there is a `definitionDestination` and a `resourceDestination`,
 * instead of one shared name.
 */ // Note: when changing the next record, you must also change `TokenTypeMap`
// in `micromark-util-types/index.d.ts`.
__turbopack_context__.s([
    "types",
    ()=>types
]);
const types = {
    // Generic type for data, such as in a title, a destination, etc.
    data: 'data',
    // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
    // Such as, between a fenced code fence and an info string.
    whitespace: 'whitespace',
    // Generic type for line endings (line feed, carriage return, carriage return +
    // line feed).
    lineEnding: 'lineEnding',
    // A line ending, but ending a blank line.
    lineEndingBlank: 'lineEndingBlank',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
    // line.
    linePrefix: 'linePrefix',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
    // line.
    lineSuffix: 'lineSuffix',
    // Whole ATX heading:
    //
    // ```markdown
    // #
    // ## Alpha
    // ### Bravo ###
    // ```
    //
    // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
    atxHeading: 'atxHeading',
    // Sequence of number signs in an ATX heading (`###`).
    atxHeadingSequence: 'atxHeadingSequence',
    // Content in an ATX heading (`alpha`).
    // Includes text.
    atxHeadingText: 'atxHeadingText',
    // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
    // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
    autolink: 'autolink',
    // Email autolink w/o markers (`admin@example.com`)
    autolinkEmail: 'autolinkEmail',
    // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
    autolinkMarker: 'autolinkMarker',
    // Protocol autolink w/o markers (`https://example.com`)
    autolinkProtocol: 'autolinkProtocol',
    // A whole character escape (`\-`).
    // Includes `escapeMarker` and `characterEscapeValue`.
    characterEscape: 'characterEscape',
    // The escaped character (`-`).
    characterEscapeValue: 'characterEscapeValue',
    // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
    // Includes `characterReferenceMarker`, an optional
    // `characterReferenceMarkerNumeric`, in which case an optional
    // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
    characterReference: 'characterReference',
    // The start or end marker (`&` or `;`).
    characterReferenceMarker: 'characterReferenceMarker',
    // Mark reference as numeric (`#`).
    characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',
    // Mark reference as numeric (`x` or `X`).
    characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',
    // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
    characterReferenceValue: 'characterReferenceValue',
    // Whole fenced code:
    //
    // ````markdown
    // ```js
    // alert(1)
    // ```
    // ````
    codeFenced: 'codeFenced',
    // A fenced code fence, including whitespace, sequence, info, and meta
    // (` ```js `).
    codeFencedFence: 'codeFencedFence',
    // Sequence of grave accent or tilde characters (` ``` `) in a fence.
    codeFencedFenceSequence: 'codeFencedFenceSequence',
    // Info word (`js`) in a fence.
    // Includes string.
    codeFencedFenceInfo: 'codeFencedFenceInfo',
    // Meta words (`highlight="1"`) in a fence.
    // Includes string.
    codeFencedFenceMeta: 'codeFencedFenceMeta',
    // A line of code.
    codeFlowValue: 'codeFlowValue',
    // Whole indented code:
    //
    // ```markdown
    //     alert(1)
    // ```
    //
    // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
    codeIndented: 'codeIndented',
    // A text code (``` `alpha` ```).
    // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
    // `codeTextPadding`.
    codeText: 'codeText',
    codeTextData: 'codeTextData',
    // A space or line ending right after or before a tick.
    codeTextPadding: 'codeTextPadding',
    // A text code fence (` `` `).
    codeTextSequence: 'codeTextSequence',
    // Whole content:
    //
    // ```markdown
    // [a]: b
    // c
    // =
    // d
    // ```
    //
    // Includes `paragraph` and `definition`.
    content: 'content',
    // Whole definition:
    //
    // ```markdown
    // [micromark]: https://github.com/micromark/micromark
    // ```
    //
    // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
    // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
    definition: 'definition',
    // Destination of a definition (`https://github.com/micromark/micromark` or
    // `<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
    definitionDestination: 'definitionDestination',
    // Enclosed destination of a definition
    // (`<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteralMarker` and optionally
    // `definitionDestinationString`.
    definitionDestinationLiteral: 'definitionDestinationLiteral',
    // Markers of an enclosed definition destination (`<` or `>`).
    definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',
    // Unenclosed destination of a definition
    // (`https://github.com/micromark/micromark`).
    // Includes `definitionDestinationString`.
    definitionDestinationRaw: 'definitionDestinationRaw',
    // Text in an destination (`https://github.com/micromark/micromark`).
    // Includes string.
    definitionDestinationString: 'definitionDestinationString',
    // Label of a definition (`[micromark]`).
    // Includes `definitionLabelMarker` and `definitionLabelString`.
    definitionLabel: 'definitionLabel',
    // Markers of a definition label (`[` or `]`).
    definitionLabelMarker: 'definitionLabelMarker',
    // Value of a definition label (`micromark`).
    // Includes string.
    definitionLabelString: 'definitionLabelString',
    // Marker between a label and a destination (`:`).
    definitionMarker: 'definitionMarker',
    // Title of a definition (`"x"`, `'y'`, or `(z)`).
    // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
    definitionTitle: 'definitionTitle',
    // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
    definitionTitleMarker: 'definitionTitleMarker',
    // Data without markers in a title (`z`).
    // Includes string.
    definitionTitleString: 'definitionTitleString',
    // Emphasis (`*alpha*`).
    // Includes `emphasisSequence` and `emphasisText`.
    emphasis: 'emphasis',
    // Sequence of emphasis markers (`*` or `_`).
    emphasisSequence: 'emphasisSequence',
    // Emphasis text (`alpha`).
    // Includes text.
    emphasisText: 'emphasisText',
    // The character escape marker (`\`).
    escapeMarker: 'escapeMarker',
    // A hard break created with a backslash (`\\n`).
    // Note: does not include the line ending.
    hardBreakEscape: 'hardBreakEscape',
    // A hard break created with trailing spaces (`  \n`).
    // Does not include the line ending.
    hardBreakTrailing: 'hardBreakTrailing',
    // Flow HTML:
    //
    // ```markdown
    // <div
    // ```
    //
    // Inlcudes `lineEnding`, `htmlFlowData`.
    htmlFlow: 'htmlFlow',
    htmlFlowData: 'htmlFlowData',
    // HTML in text (the tag in `a <i> b`).
    // Includes `lineEnding`, `htmlTextData`.
    htmlText: 'htmlText',
    htmlTextData: 'htmlTextData',
    // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
    // `![alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    image: 'image',
    // Whole link label (`[*alpha*]`).
    // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
    label: 'label',
    // Text in an label (`*alpha*`).
    // Includes text.
    labelText: 'labelText',
    // Start a link label (`[`).
    // Includes a `labelMarker`.
    labelLink: 'labelLink',
    // Start an image label (`![`).
    // Includes `labelImageMarker` and `labelMarker`.
    labelImage: 'labelImage',
    // Marker of a label (`[` or `]`).
    labelMarker: 'labelMarker',
    // Marker to start an image (`!`).
    labelImageMarker: 'labelImageMarker',
    // End a label (`]`).
    // Includes `labelMarker`.
    labelEnd: 'labelEnd',
    // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    link: 'link',
    // Whole paragraph:
    //
    // ```markdown
    // alpha
    // bravo.
    // ```
    //
    // Includes text.
    paragraph: 'paragraph',
    // A reference (`[alpha]` or `[]`).
    // Includes `referenceMarker` and an optional `referenceString`.
    reference: 'reference',
    // A reference marker (`[` or `]`).
    referenceMarker: 'referenceMarker',
    // Reference text (`alpha`).
    // Includes string.
    referenceString: 'referenceString',
    // A resource (`(https://example.com "alpha")`).
    // Includes `resourceMarker`, an optional `resourceDestination` with an optional
    // `whitespace` and `resourceTitle`.
    resource: 'resource',
    // A resource destination (`https://example.com`).
    // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
    resourceDestination: 'resourceDestination',
    // A literal resource destination (`<https://example.com>`).
    // Includes `resourceDestinationLiteralMarker` and optionally
    // `resourceDestinationString`.
    resourceDestinationLiteral: 'resourceDestinationLiteral',
    // A resource destination marker (`<` or `>`).
    resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',
    // A raw resource destination (`https://example.com`).
    // Includes `resourceDestinationString`.
    resourceDestinationRaw: 'resourceDestinationRaw',
    // Resource destination text (`https://example.com`).
    // Includes string.
    resourceDestinationString: 'resourceDestinationString',
    // A resource marker (`(` or `)`).
    resourceMarker: 'resourceMarker',
    // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
    // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
    resourceTitle: 'resourceTitle',
    // A resource title marker (`"`, `'`, `(`, or `)`).
    resourceTitleMarker: 'resourceTitleMarker',
    // Resource destination title (`alpha`).
    // Includes string.
    resourceTitleString: 'resourceTitleString',
    // Whole setext heading:
    //
    // ```markdown
    // alpha
    // bravo
    // =====
    // ```
    //
    // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
    // `setextHeadingLine`.
    setextHeading: 'setextHeading',
    // Content in a setext heading (`alpha\nbravo`).
    // Includes text.
    setextHeadingText: 'setextHeadingText',
    // Underline in a setext heading, including whitespace suffix (`==`).
    // Includes `setextHeadingLineSequence`.
    setextHeadingLine: 'setextHeadingLine',
    // Sequence of equals or dash characters in underline in a setext heading (`-`).
    setextHeadingLineSequence: 'setextHeadingLineSequence',
    // Strong (`**alpha**`).
    // Includes `strongSequence` and `strongText`.
    strong: 'strong',
    // Sequence of strong markers (`**` or `__`).
    strongSequence: 'strongSequence',
    // Strong text (`alpha`).
    // Includes text.
    strongText: 'strongText',
    // Whole thematic break:
    //
    // ```markdown
    // * * *
    // ```
    //
    // Includes `thematicBreakSequence` and `whitespace`.
    thematicBreak: 'thematicBreak',
    // A sequence of one or more thematic break markers (`***`).
    thematicBreakSequence: 'thematicBreakSequence',
    // Whole block quote:
    //
    // ```markdown
    // > a
    // >
    // > b
    // ```
    //
    // Includes `blockQuotePrefix` and flow.
    blockQuote: 'blockQuote',
    // The `>` or `> ` of a block quote.
    blockQuotePrefix: 'blockQuotePrefix',
    // The `>` of a block quote prefix.
    blockQuoteMarker: 'blockQuoteMarker',
    // The optional ` ` of a block quote prefix.
    blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',
    // Whole ordered list:
    //
    // ```markdown
    // 1. a
    //    b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listOrdered: 'listOrdered',
    // Whole unordered list:
    //
    // ```markdown
    // - a
    //   b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listUnordered: 'listUnordered',
    // The indent of further list item lines.
    listItemIndent: 'listItemIndent',
    // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
    listItemMarker: 'listItemMarker',
    // The thing that starts a list item, such as `1. `.
    // Includes `listItemValue` if ordered, `listItemMarker`, and
    // `listItemPrefixWhitespace` (unless followed by a line ending).
    listItemPrefix: 'listItemPrefix',
    // The whitespace after a marker.
    listItemPrefixWhitespace: 'listItemPrefixWhitespace',
    // The numerical value of an ordered item.
    listItemValue: 'listItemValue',
    // Internal types used for subtokenizers, compiled away
    chunkDocument: 'chunkDocument',
    chunkContent: 'chunkContent',
    chunkFlow: 'chunkFlow',
    chunkText: 'chunkText',
    chunkString: 'chunkString'
};
}),
"[project]/node_modules/micromark-util-symbol/lib/values.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * While micromark works based on character codes, this module includes the
 * string versions of ’em.
 * The C0 block, except for LF, CR, HT, and w/ the replacement character added,
 * are available here.
 */ __turbopack_context__.s([
    "values",
    ()=>values
]);
const values = {
    ht: '\t',
    lf: '\n',
    cr: '\r',
    space: ' ',
    exclamationMark: '!',
    quotationMark: '"',
    numberSign: '#',
    dollarSign: '$',
    percentSign: '%',
    ampersand: '&',
    apostrophe: "'",
    leftParenthesis: '(',
    rightParenthesis: ')',
    asterisk: '*',
    plusSign: '+',
    comma: ',',
    dash: '-',
    dot: '.',
    slash: '/',
    digit0: '0',
    digit1: '1',
    digit2: '2',
    digit3: '3',
    digit4: '4',
    digit5: '5',
    digit6: '6',
    digit7: '7',
    digit8: '8',
    digit9: '9',
    colon: ':',
    semicolon: ';',
    lessThan: '<',
    equalsTo: '=',
    greaterThan: '>',
    questionMark: '?',
    atSign: '@',
    uppercaseA: 'A',
    uppercaseB: 'B',
    uppercaseC: 'C',
    uppercaseD: 'D',
    uppercaseE: 'E',
    uppercaseF: 'F',
    uppercaseG: 'G',
    uppercaseH: 'H',
    uppercaseI: 'I',
    uppercaseJ: 'J',
    uppercaseK: 'K',
    uppercaseL: 'L',
    uppercaseM: 'M',
    uppercaseN: 'N',
    uppercaseO: 'O',
    uppercaseP: 'P',
    uppercaseQ: 'Q',
    uppercaseR: 'R',
    uppercaseS: 'S',
    uppercaseT: 'T',
    uppercaseU: 'U',
    uppercaseV: 'V',
    uppercaseW: 'W',
    uppercaseX: 'X',
    uppercaseY: 'Y',
    uppercaseZ: 'Z',
    leftSquareBracket: '[',
    backslash: '\\',
    rightSquareBracket: ']',
    caret: '^',
    underscore: '_',
    graveAccent: '`',
    lowercaseA: 'a',
    lowercaseB: 'b',
    lowercaseC: 'c',
    lowercaseD: 'd',
    lowercaseE: 'e',
    lowercaseF: 'f',
    lowercaseG: 'g',
    lowercaseH: 'h',
    lowercaseI: 'i',
    lowercaseJ: 'j',
    lowercaseK: 'k',
    lowercaseL: 'l',
    lowercaseM: 'm',
    lowercaseN: 'n',
    lowercaseO: 'o',
    lowercaseP: 'p',
    lowercaseQ: 'q',
    lowercaseR: 'r',
    lowercaseS: 's',
    lowercaseT: 't',
    lowercaseU: 'u',
    lowercaseV: 'v',
    lowercaseW: 'w',
    lowercaseX: 'x',
    lowercaseY: 'y',
    lowercaseZ: 'z',
    leftCurlyBrace: '{',
    verticalBar: '|',
    rightCurlyBrace: '}',
    tilde: '~',
    replacementCharacter: '�'
};
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppPageEntrypoint",
    ()=>createAppPageEntrypoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Builds the cache key for the most complete prerenderable shell we can derive
 * from the shell that matched this request. Only params that can still be
 * filled by `generateStaticParams` are substituted; fully dynamic params stay
 * as placeholders so a request like `/c/foo` can complete `/[one]/[two]` into
 * `/c/[two]` rather than `/c/foo`.
 */ function buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params) {
    const prerenderableParamsByName = new Map(remainingPrerenderableParams.map((param)=>[
            param.paramName,
            param
        ]));
    return fallbackPathname.split('/').map((segment)=>{
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getSegmentParam"])(segment);
        if (!segmentParam) {
            return segment;
        }
        const remainingParam = prerenderableParamsByName.get(segmentParam.paramName);
        if (!remainingParam) {
            return segment;
        }
        const value = params == null ? void 0 : params[remainingParam.paramName];
        if (!value) {
            return segment;
        }
        const encodedValue = Array.isArray(value) ? value.map((item)=>encodeURIComponent(item)).join('/') : encodeURIComponent(value);
        return segment.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["buildDynamicSegmentPlaceholder"])(remainingParam), encodedValue);
    }).join('/') || '/';
}
function createAppPageEntrypoint({ tree, page, pathname, require: __next_app_require__, loadChunk: __next_app_load_chunk__, interopDefault }) {
    const __next_app__ = {
        require: __next_app_require__,
        loadChunk: __next_app_load_chunk__
    };
    const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
        definition: {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
            page,
            pathname,
            // The following aren't used in production.
            bundlePath: '',
            filename: '',
            appPaths: []
        },
        userland: {
            loaderTree: tree
        },
        distDir: ("TURBOPACK compile-time value", ".next\\dev") || '',
        relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
    });
    let srcPage = page;
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["normalizeAppPath"])(srcPage);
    // The legacy prerender manifest says whether unmatched values return 404,
    // but does not list all of the route's parameter names. Read them from the
    // route pattern once, since the names do not depend on the request.
    const routeParamNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseNormalizedAppRoute"])(normalizedSrcPage).dynamicSegments.map((segment)=>segment.param.paramName);
    async function handler(req, res, ctx) {
        var _this, _prerenderInfo_fallbackRouteParams, _prerenderInfo_fallbackRootParams, _prerenderInfo_fallbackRouteParams1, _prerenderInfo_fallbackRouteParams2;
        if (ctx.requestMeta) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setRequestMeta"])(req, ctx.requestMeta);
        }
        if (routeModule.isDev) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
        }
        const isMinimalMode = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'minimalMode'));
        // Capture the request target before `prepare()` runs, since route
        // normalization (e.g. `normalizeCdnUrl`) rewrites `req.url` and would
        // otherwise change the `http.target` span attribute. This mirrors
        // `BaseServer.handleRequest`, which records the target before normalization.
        const httpTarget = req.url;
        const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
        const prepareResult = await routeModule.prepare(req, res, {
            srcPage,
            multiZoneDraftMode
        });
        if (!prepareResult) {
            res.statusCode = 400;
            res.end('Bad Request');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, prefetchHintsManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns, deploymentId, clientAssetToken, previewProps } = prepareResult;
        let { isOnDemandRevalidate } = prepareResult;
        // We use the resolvedPathname instead of the parsedUrl.pathname because it
        // is not rewritten as resolvedPathname is. This will ensure that the correct
        // prerender info is used instead of using the original pathname as the
        // source.
        const prerenderMatch = routeModule.match(resolvedPathname, prerenderManifest);
        const prerenderInfo = (prerenderMatch == null ? void 0 : prerenderMatch.route) ?? null;
        // A sibling's prerender must not change this route's rendering mode or
        // supply prefetch metadata for its response.
        const prerenderedRoute = routeModule.isDev || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRouteCacheOwner"])(resolvedPathname, routeModule.cacheOwner, prerenderManifest.routes[resolvedPathname]) ? prerenderManifest.routes[resolvedPathname] : undefined;
        const isPrerendered = Boolean(prerenderedRoute);
        const userAgent = req.headers['user-agent'] || '';
        const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__["getBotType"])(userAgent);
        /**
     * If true, this indicates that the request being made is for an app
     * prefetch request.
     */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
        ;
        // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
        const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]);
        const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getIsPossibleServerAction"])(req);
        // For subresource requests (e.g. images or fonts), return plain text 404
        // instead of rendering the not-found route.
        if (normalizedSrcPage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["UNDERSCORE_NOT_FOUND_ROUTE"] && (req.method === 'GET' || req.method === 'HEAD') && !isRSCRequest && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isNonHtmlSecFetchDest"])(req.headers['sec-fetch-dest'])) {
            res.statusCode = 404;
            res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Not Found');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        /**
     * If the route being rendered is an app page, and the ppr feature has been
     * enabled, then the given route _could_ support PPR.
     */ const couldSupportPPR = Boolean(nextConfig.cacheComponents);
        // Stash postponed state for server actions when in minimal mode.
        // We extract it here so the RDC is available for the re-render after the action completes.
        const resumeStateLengthHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_STATE_LENGTH_HEADER"]];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') && isMinimalMode && couldSupportPPR && isPossibleServerAction && resumeStateLengthHeader && typeof resumeStateLengthHeader === 'string') {
            const stateLength = parseInt(resumeStateLengthHeader, 10);
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            if (!isNaN(stateLength) && stateLength > 0) {
                var _nextConfig_experimental_serverActions;
                if (stateLength > maxPostponedStateSizeBytes) {
                    res.statusCode = 413;
                    res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                // Calculate max total body size to prevent buffering excessively large
                // payloads before the action handler checks. We use stateLength (not
                // maxPostponedStateSizeBytes) so the postponed state doesn't eat into
                // the action body budget - it's already validated above.
                const defaultActionBodySizeLimit = '1 MB';
                const actionBodySizeLimit = ((_nextConfig_experimental_serverActions = nextConfig.experimental.serverActions) == null ? void 0 : _nextConfig_experimental_serverActions.bodySizeLimit) ?? defaultActionBodySizeLimit;
                const actionBodySizeLimitBytes = actionBodySizeLimit !== defaultActionBodySizeLimit ? __turbopack_context__.r("[project]/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)").parse(actionBodySizeLimit) : 1024 * 1024 // 1 MB
                ;
                const maxTotalBodySize = stateLength + actionBodySizeLimitBytes;
                const fullBody = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxTotalBodySize);
                if (fullBody === null) {
                    res.statusCode = 413;
                    res.end(`Request body exceeded limit. ` + `To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit`);
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                if (fullBody.length >= stateLength) {
                    // Extract postponed state from the beginning
                    const postponedState = fullBody.subarray(0, stateLength).toString('utf8');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponedState);
                    // Store the remaining action body for the action handler
                    const actionBody = fullBody.subarray(stateLength);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'actionBody', actionBody);
                } else {
                    throw new Error(`invariant: expected ${stateLength} bytes of postponed state but only received ${fullBody.length} bytes`);
                }
            }
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') !== 'string' && couldSupportPPR && req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_HEADER"]] === '1' && req.method === 'POST') {
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            // Decode the postponed state from the request body, it will come as
            // an array of buffers, so collect them and then concat them to form
            // the string.
            const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxPostponedStateSizeBytes);
            if (body === null) {
                res.statusCode = 413;
                res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                return null;
            }
            const postponed = body.toString('utf8');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponed);
        }
        // When enabled, this will allow the use of the `?__nextppronly` query to
        // enable debugging of the static shell.
        const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
        // When enabled, this will allow the use of the `?__nextppronly` query
        // to enable debugging of the fallback shell.
        const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
        // Whether the testing API is exposed (dev mode or explicit flag)
        const exposeTestingApi = nextConfig.cacheComponents === true && (routeModule.isDev === true || nextConfig.experimental.exposeTestingApiInProductionBuild === true);
        // Enable the Instant Navigation Testing API. Renders only the prefetched
        // portion of the page, excluding dynamic content. This allows tests to
        // assert on the prefetched UI state deterministically.
        //
        // The instant test cookie is sent automatically with all requests while a
        // navigation lock is held. We treat a request as a test render when the
        // cookie is present and either:
        // - it's a document request (no RSC header) — covers MPA navigations
        // - it's a prefetch RSC request — covers client-side prefetches
        // Regular RSC navigation requests proceed normally even during a locked
        // scope; blocking happens on the client side.
        const isInstantNavigationTest = exposeTestingApi && typeof req.headers.cookie === 'string' && req.headers.cookie.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"] + '=') && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]) || req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1');
        // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
        // prerender manifest and this is an app page.
        const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
        // enabled or not, but that would require plumbing the appConfig through
        // to the server during development. We assume that the page supports it
        // but only during development or when the testing API is exposed.
        (hasDebugStaticShellQuery || isInstantNavigationTest) && (exposeTestingApi || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
        const isDebugStaticShell = (hasDebugStaticShellQuery || isInstantNavigationTest) && isRoutePPREnabled;
        // We should enable debugging dynamic accesses when the static shell
        // debugging has been enabled and we're also in development mode.
        const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
        const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
        const isDebugPrerender = isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell;
        // If we're in minimal mode, then try to get the postponed information from
        // the request metadata. If available, use it for resuming the postponed
        // render.
        const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') : undefined;
        const hasPostponedState = typeof minimalPostponed === 'string';
        // If PPR is enabled, and this is a RSC request (but not a prefetch), then
        // we can use this fact to only generate the flight data for the request
        // because we can't cache the HTML (as it's also dynamic).
        const staticPrefetchDataRoute = prerenderedRoute == null ? void 0 : prerenderedRoute.prefetchDataRoute;
        const isEnsureStaticPage = (prerenderInfo == null ? void 0 : prerenderInfo._isEnsureStaticPage) === true;
        let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest && // If generated at build time, treat the RSC request as static
        // so we can serve the prebuilt .rsc without a dynamic render.
        // Only do this for routes that have a concrete prefetchDataRoute.
        !staticPrefetchDataRoute && // Do not serve `ensureStatic = "navigation"` with a dynamic response,
        // (we want to do a blocking prerender instead)
        // TODO(ensure-static): express this in a cleaner way
        !isEnsureStaticPage;
        // During a PPR revalidation, the RSC request is not dynamic if postponed
        // metadata is absent. An empty string represents a resume request without
        // postponed state, which should perform a full dynamic render.
        if (isMinimalMode) {
            isDynamicRSCRequest = isDynamicRSCRequest && hasPostponedState;
        }
        // Need to read this before it's stripped by stripFlightHeaders. We don't
        // need to transfer it to the request meta because it's only read
        // within this function; the static segment data should have already been
        // generated, so we will always either return a static response or a 404.
        const rawSegmentPrefetchHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]];
        const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest') ?? (isPrefetchRSCRequest ? typeof rawSegmentPrefetchHeader === 'string' ? rawSegmentPrefetchHeader : Array.isArray(rawSegmentPrefetchHeader) ? rawSegmentPrefetchHeader[0] : undefined : undefined);
        // TODO: investigate existing bug with shouldServeStreamingMetadata always
        // being true for a revalidate due to modifying the base-server this.renderOpts
        // when fixing this to correct logic it causes hydration issue since we set
        // serveStreamingMetadata to true during export
        const serveStreamingMetadata = !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
        // A PPR shell has already closed its head before the dynamic render resumes.
        // Blocking metadata resolved during the resume would therefore be emitted
        // after the head, where HTML-limited bots cannot observe it. Bypass the
        // shell so blocking metadata is included in the initial document head.
        const shouldForceDynamicPPRRender = isRoutePPREnabled && !serveStreamingMetadata;
        const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && !shouldForceDynamicPPRRender);
        // When a page supports cacheComponents, we can support RDC for Navigations
        const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
        // In development, we always want to generate dynamic HTML.
        const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
        routeModule.isDev === true || // If this is a draft mode request, it supports dynamic HTML.
        isDraftMode || // If this is not SSG or does not have static paths, then it supports
        // dynamic HTML.
        !isSSG || // If this request has provided postponed data, it supports dynamic
        // HTML.
        hasPostponedState || // If this handler supports onCacheEntryV2, then we can only support
        // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
        // doesn't support it we must fallback to the default behavior.
        (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
        // which will trigger the `supportsDynamicResponse` to be true.
        isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
        const remainingPrerenderableParams = (prerenderInfo == null ? void 0 : prerenderInfo.remainingPrerenderableParams) ?? [];
        const remainingFallbackRouteParams = nextConfig.cacheComponents ? (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.filter((param)=>!remainingPrerenderableParams.some((prerenderableParam)=>prerenderableParam.paramName === param.paramName))) ?? [] : [];
        // Concrete optional routes like `/optional-catchall` can still match their
        // generic shell entry (eg /optional-catchall/[[...slug]]) in the prerender manifest.
        // If the omitted param already resolved to a real prerendered path, keep serving that concrete result.
        const hasOmittedConcreteFallbackParam = isPrerendered && remainingPrerenderableParams.some((param)=>{
            const value = params == null ? void 0 : params[param.paramName];
            return value == null || Array.isArray(value) && value.length === 0;
        });
        const hasUnresolvedRootFallbackParams = (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && (((_prerenderInfo_fallbackRootParams = prerenderInfo.fallbackRootParams) == null ? void 0 : _prerenderInfo_fallbackRootParams.length) ?? 0) > 0;
        // SSG writes and navigation RDC reads use the same shell key. Completion
        // uses the matched shell rather than the fully resolved pathname. A request
        // for `/prefix/c/foo` can complete `/prefix/[one]/[two]` to
        // `/prefix/c/[two]`. This avoids creating an entry for every value of
        // `two`.
        //
        // The completed-shell key also applies when unresolved root params require
        // a blocking render. A source shell cannot be shared across root branches.
        // Completion resolves the params into the key as follows:
        // - Root params and other prerenderable params use concrete values.
        // - Never-prerenderable params remain placeholders.
        // The values of those placeholder params must not partition the cache.
        const fallbackPathname = prerenderMatch ? typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : prerenderMatch.source : null;
        let shellCacheKey = null;
        if (nextConfig.cacheComponents && // A closed matcher has no fallback shell. Its generated outputs must
        // retain their concrete cache keys.
        (prerenderInfo == null ? void 0 : prerenderInfo.fallback) !== false && // Never-prerenderable params must stay out of the key even when Partial
        // Prefetching is disabled.
        (nextConfig.partialPrefetching || remainingFallbackRouteParams.length > 0) && fallbackPathname && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams1 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams1.length) && !hasOmittedConcreteFallbackParam) {
            const cacheKey = buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params);
            if (cacheKey !== fallbackPathname || remainingFallbackRouteParams.length > 0) {
                shellCacheKey = cacheKey;
            }
        }
        let ssgCacheKey = null;
        let usesShellCacheKey = false;
        if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !hasPostponedState && !isDynamicRSCRequest) {
            if (shellCacheKey !== null) {
                // Normal fallback serving uses the source shell's separate cache
                // lookup. Explicit revalidation skips that path, so it must write the
                // source key here even when no params can be completed.
                if (shellCacheKey !== fallbackPathname || isOnDemandRevalidate) {
                    ssgCacheKey = shellCacheKey;
                    usesShellCacheKey = true;
                }
            } else {
                ssgCacheKey = resolvedPathname;
            }
        }
        // the staticPathKey differs from ssgCacheKey since
        // ssgCacheKey is null in dev since we're always in "dynamic"
        // mode in dev to bypass the cache. It can also be null for partial
        // fallback shells that should remain shared and must not create a
        // param-specific ISR entry, but we still need to honor fallback handling.
        let staticPathKey = ssgCacheKey;
        if (!staticPathKey && (routeModule.isDev || isSSG && pageIsDynamic && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams2 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams2.length) && // Server action requests must not get a staticPathKey, otherwise they
        // enter the fallback rendering block below and return the cached HTML
        // shell with the action result appended, instead of responding with
        // just the RSC action result.
        !isPossibleServerAction)) {
            staticPathKey = resolvedPathname;
        }
        // If this is a request for an app path that should be statically generated
        // and we aren't in the edge runtime, strip the flight headers so it will
        // generate the static response.
        if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["stripFlightHeaders"])(req.headers);
        }
        const ComponentMod = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
            tree,
            handler,
            routeModule,
            __next_app__
        };
        // Before rendering (which initializes component tree modules), we have to
        // set the reference manifests to our global store so Server Action's
        // encryption util can access to them at the top level of the page module.
        if (serverActionsManifest && clientReferenceManifest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setManifestsSingleton"])({
                page: srcPage,
                clientReferenceManifest,
                serverActionsManifest
            });
        }
        const method = req.method || 'GET';
        const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getTracer"])();
        const activeSpan = tracer.getActiveScopeSpan();
        const isWrappedByNextServer = Boolean(routerServerContext == null ? void 0 : routerServerContext.isWrappedByNextServer);
        const render404 = async ()=>{
            // TODO: should route-module itself handle rendering the 404
            if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                await routerServerContext.render404(req, res, parsedUrl, false);
            } else {
                res.statusCode = 404;
                res.end('This page could not be found');
            }
            return null;
        };
        try {
            const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
            res.setHeader('Vary', varyHeader);
            let parentSpan;
            const invokeRouteModule = async (span, context, renderOperation)=>{
                const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextRequest"](req);
                const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextResponse"](res);
                const result = renderOperation === 'prerender' ? routeModule.prerender(nextReq, nextRes, context) : routeModule.render(nextReq, nextRes, context);
                return result.finally(()=>{
                    if (!span) return;
                    span.setAttributes({
                        'http.status_code': res.statusCode,
                        'next.rsc': isRSCRequest
                    });
                    if (res.statusCode && res.statusCode >= 500) {
                        // For 5xx status codes: SHOULD be set to 'Error' span status.
                        // x-ref: https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
                        span.setStatus({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                        });
                        // For span status 'Error', SHOULD set 'error.type' attribute.
                        span.setAttribute('error.type', res.statusCode.toString());
                    }
                    const rootSpanAttributes = tracer.getRootSpanAttributes();
                    // We were unable to get attributes, probably OTEL is not enabled
                    if (!rootSpanAttributes) {
                        return;
                    }
                    if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["BaseServerSpan"].handleRequest) {
                        console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                        return;
                    }
                    const route = rootSpanAttributes.get('next.route') || normalizedSrcPage;
                    const name = isRSCRequest ? `RSC ${method} ${route}` : `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                    // Propagate http.route to the parent span if one exists (e.g.
                    // a platform-created HTTP span in adapter deployments).
                    if (parentSpan && parentSpan !== span) {
                        parentSpan.setAttribute('http.route', route);
                        parentSpan.updateName(name);
                    }
                });
            };
            const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'incrementalCache') || await routeModule.getIncrementalCache(req, nextConfig, previewProps, prerenderManifest, isMinimalMode);
            incrementalCache == null ? void 0 : incrementalCache.resetRequestCache();
            globalThis.__incrementalCache = incrementalCache;
            const doRender = async ({ span, postponed, fallbackRouteParams, renderOperation, allowEmptyStaticShell })=>{
                var _prerenderManifest_dynamicRoutes_normalizedSrcPage, _prerenderManifest_dynamicRoutes_normalizedSrcPage1;
                // A static page may have stripped Flight headers before reaching this
                // render. Parse only when the response cache invokes the render.
                const parsedRequestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseRequestHeaders"])(req.headers, {
                    isRoutePPREnabled,
                    previewModeId: previewProps == null ? void 0 : previewProps.previewModeId
                });
                const routeMatch = {
                    resolvedPathname
                };
                const dev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createDevRenderContext"])(req);
                const context = {
                    query,
                    params,
                    page: normalizedSrcPage,
                    routeMatch,
                    parsedRequestHeaders,
                    sharedContext: {
                        buildId,
                        deploymentId,
                        clientAssetToken
                    },
                    dev,
                    fallbackRouteParams,
                    renderOpts: {
                        App: ()=>null,
                        Document: ()=>null,
                        pageConfig: {},
                        ComponentMod,
                        Component: interopDefault(ComponentMod),
                        params,
                        routeModule,
                        page: srcPage,
                        postponed,
                        allowEmptyStaticShell,
                        serveStreamingMetadata,
                        supportsDynamicResponse: renderOperation === 'render' && (typeof postponed === 'string' || supportsDynamicResponse),
                        buildManifest,
                        nextFontManifest,
                        reactLoadableManifest,
                        subresourceIntegrityManifest,
                        setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                        setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                        setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                        sendErrorsToBrowser: routerServerContext == null ? void 0 : routerServerContext.sendErrorsToBrowser,
                        dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                        isDraftMode,
                        botType,
                        isOnDemandRevalidate,
                        isPossibleServerAction,
                        assetPrefix: routeModule.getAssetPrefixForRender(routerServerContext, nextConfig.assetPrefix),
                        nextConfigOutput: nextConfig.output,
                        crossOrigin: nextConfig.crossOrigin,
                        trailingSlash: nextConfig.trailingSlash,
                        images: nextConfig.images,
                        previewProps,
                        enableTainting: nextConfig.experimental.taint,
                        reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                        multiZoneDraftMode,
                        prefetchHints: prefetchHintsManifest,
                        // With dynamicParams = false, every parameter is restricted to the
                        // paths generated at build time. Advertise this even for allowed
                        // URLs. Read the current manifest here because dev updates it as
                        // routes compile.
                        notFoundParams: (routeModule.isDev ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devNotFoundParams') : undefined) ?? ((_prerenderManifest_dynamicRoutes_normalizedSrcPage = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage.notFoundParams) ?? (((_prerenderManifest_dynamicRoutes_normalizedSrcPage1 = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage1.fallback) === false ? routeParamNames : undefined),
                        incrementalCache,
                        cacheLifeProfiles: nextConfig.cacheLife,
                        staticPageGenerationTimeout: nextConfig.staticPageGenerationTimeout,
                        basePath: nextConfig.basePath,
                        serverActions: nextConfig.experimental.serverActions,
                        logServerFunctions: typeof nextConfig.logging === 'object' && Boolean(nextConfig.logging.serverFunctions),
                        ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                            isBuildTimePrerendering: true,
                            isDebugDynamicAccesses: isDebugDynamicAccesses
                        } : {},
                        cacheComponents: Boolean(nextConfig.cacheComponents),
                        partialPrefetching: nextConfig.partialPrefetching,
                        // A fallback shell can only be upgraded to a concrete version if at
                        // least one of its fallback params is a `generateStaticParams`
                        // candidate (`remainingPrerenderableParams`), and only when Partial
                        // Prefetching is enabled (the upgrade itself is gated on it above).
                        // This gates whether the per-segment prefetch responses are flagged
                        // `isUpgradeableISRFallback`; without an upgrade to wait for, the
                        // client should not retry the prefetch.
                        isFallbackUpgradeable: Boolean(nextConfig.partialPrefetching) && remainingPrerenderableParams.length > 0,
                        validationLevel: nextConfig.experimental.instantInsights.validationLevel,
                        experimental: {
                            isRoutePPREnabled,
                            expireTime: nextConfig.expireTime,
                            staleTimes: nextConfig.experimental.staleTimes,
                            dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                            optimisticRouting: Boolean(nextConfig.experimental.optimisticRouting),
                            parallelRouteMetadata: Boolean(nextConfig.experimental.parallelRouteMetadata),
                            inlineCss: Boolean(nextConfig.experimental.inlineCss),
                            prefetchInlining: nextConfig.experimental.prefetchInlining ?? false,
                            authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                            reactBrowserBailout: Boolean(nextConfig.experimental.reactBrowserBailout),
                            serverComponentsHmrCancellation: Boolean(nextConfig.experimental.serverComponentsHmrCancellation),
                            useCacheTimeout: nextConfig.experimental.useCacheTimeout,
                            durableUseCacheEntries: Boolean(nextConfig.experimental.durableUseCacheEntries),
                            cachedNavigations: nextConfig.experimental.cachedNavigations ?? false,
                            clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                            clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins,
                            maxPostponedStateSizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize),
                            disableResumeDataCacheCompression: nextConfig.experimental.disableResumeDataCacheCompression ?? false,
                            exposeTestingApi
                        },
                        waitUntil: ctx.waitUntil,
                        onClose: (cb)=>{
                            res.on('close', cb);
                        },
                        onAfterTaskError: ()=>{},
                        onInstrumentationRequestError: (error, errorContext, silenceLog)=>routeModule.onRequestError(req, error, errorContext, silenceLog, routerServerContext),
                        err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'invokeError')
                    }
                };
                const result = await invokeRouteModule(span, context, renderOperation);
                // Keep recovery output separate from successful response cache entries.
                if ('error' in result) {
                    ;
                    req.fetchMetrics = result.result.metadata.fetchMetrics;
                    return result;
                }
                const { metadata } = result;
                const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
                // Apply the `expireTime` fallback as soon as we have the render's
                // `cacheControl`, so every downstream consumer (the cache stored via
                // `incrementalCache.set`, the response Cache-Control header, the outgoing
                // entry returned to `handleResponse`) sees a finalized `cacheControl`
                // with a populated `expire`. This mirrors the build-time fallback in
                // `build/index.ts` so we don't apply an expire to routes that opt out of
                // revalidation entirely (`revalidate: false`) or that are dynamic
                // (`revalidate: 0`).
                if (cacheControl && cacheControl.revalidate !== false && cacheControl.revalidate > 0 && cacheControl.expire === undefined) {
                    cacheControl.expire = nextConfig.expireTime;
                }
                if (cacheTags) {
                    headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
                }
                // Pull any fetch metrics from the render onto the request.
                ;
                req.fetchMetrics = fetchMetrics;
                // we don't throw static to dynamic errors in dev as isSSG
                // is a best guess in dev since we don't have the prerender pass
                // to know whether the path is actually static or not
                if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                    const staticBailoutInfo = metadata.staticBailoutInfo;
                    const err = new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`);
                    if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                        const stack = staticBailoutInfo.stack;
                        err.stack = err.message + stack.substring(stack.indexOf('\n'));
                    }
                    throw err;
                }
                return {
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                        html: result,
                        headers,
                        rscData: metadata.flightData,
                        postponed: metadata.postponed,
                        status: metadata.statusCode,
                        segmentData: metadata.segmentData
                    },
                    cacheControl
                };
            };
            const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
                const isProduction = routeModule.isDev === false;
                const didRespond = hasResolved || res.writableEnded;
                const reportRevalidationError = (error)=>routeModule.onRequestError(req, error, {
                        routerKind: 'App Router',
                        routePath: srcPage,
                        routeType: 'render',
                        revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                            isStaticGeneration: isSSG,
                            isOnDemandRevalidate
                        })
                    }, false, routerServerContext);
                try {
                    var _prerenderInfo_fallbackRouteParams;
                    // skip on-demand revalidate if cache is not present and
                    // revalidate-if-generated is set
                    if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                            await routerServerContext.render404(req, res);
                        } else {
                            res.statusCode = 404;
                            res.end('This page could not be found');
                        }
                        return null;
                    }
                    let fallbackMode;
                    if (prerenderInfo) {
                        fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseFallbackField"])(prerenderInfo.fallback);
                    }
                    // A closed matcher rejects new paths, not regeneration of paths that
                    // were produced by the build. Their cache entries can be invalidated
                    // or evicted without removing the path from the build manifest.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND && isPrerendered) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (nextConfig.partialPrefetching && (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && // TODO(ensure-static): express this in a cleaner way
                    !isEnsureStaticPage && !prerenderInfo.isExplicitlyBlocking && !hasOmittedConcreteFallbackParam && !hasUnresolvedRootFallbackParams && remainingPrerenderableParams.length > 0) {
                        // Generic source shells without unresolved root params don't have a
                        // concrete fallback file of their own, so they're marked as blocking.
                        // When we can complete the shell into a more specific
                        // prerendered shell for this request, treat it like a prerender
                        // fallback so we can serve that shell instead of blocking on the full
                        // route. Root-param shells stay blocking, since unknown root branches
                        // should not inherit a shell from another generated branch.
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER;
                    }
                    // When serving a request that requires blocking metadata, we want to
                    // use a blocking render instead of the prerendered fallback. Without
                    // PPR, preserve the existing behavior for built-in bots.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER && (isRoutePPREnabled ? !serveStreamingMetadata : Boolean(botType))) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                        isOnDemandRevalidate = true;
                    }
                    // On-demand revalidation blocks for admitted paths. Cache contents
                    // must not make an otherwise closed path eligible for generation.
                    if (isOnDemandRevalidate && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (// below. Only production, forced background work, and explicit
                    // shell debugging may enter fallback prerender handling.
                    (isProduction || forceStaticRender || isDebugPrerender) && !isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                        // When cacheComponents is enabled, we can use the fallback
                        // response if the request is not a dynamic RSC request because the
                        // RSC data when this feature flag is enabled does not contain any
                        // param references. Without this feature flag enabled, the RSC data
                        // contains param references, and therefore we can't use the fallback.
                        if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                            const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                            let fallbackRouteParams;
                            if (isProduction) {
                                // In production, rely on the prerender manifest's fallback
                                // entry — the authoritative set computed at build time by
                                // `buildAppStaticPaths`.
                                if (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                                } else if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else {
                                    fallbackRouteParams = null;
                                }
                            } else {
                                // Dev selects the source for static-shell debug renders from
                                // the per-URL `getStaticPaths` result. The dev prerender
                                // manifest does not contain these ad-hoc paths. `base-server`
                                // passes the source's fallback params in request metadata.
                                // These renders need the source set, not the completed target's
                                // potentially smaller `stagedFallbackParams`.
                                if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else if (isDebugStaticShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'fallbackRouteParams') ?? null;
                                } else {
                                    fallbackRouteParams = null;
                                }
                            }
                            // Debug rendering stages the params of the selected source shell.
                            if (isDebugStaticShell) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', fallbackRouteParams);
                            }
                            // We use the response cache here to handle the revalidation and
                            // management of the fallback shell.
                            const fallbackResponse = await routeModule.handleResponse({
                                cacheKey,
                                req,
                                nextConfig,
                                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                                isFallback: true,
                                previewProps,
                                prerenderManifest,
                                isRoutePPREnabled,
                                responseGenerator: async ()=>doRender({
                                        span,
                                        // We pass `undefined` as rendering a fallback isn't resumed
                                        // here.
                                        postponed: undefined,
                                        // Always serve the shell that matched this request
                                        // immediately. If there are still prerenderable params left,
                                        // the background path below will complete the shell into a
                                        // more specific cache entry for later requests.
                                        fallbackRouteParams,
                                        renderOperation: 'prerender',
                                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                                    }),
                                waitUntil: ctx.waitUntil,
                                isMinimalMode
                            });
                            if (fallbackResponse === null || 'error' in fallbackResponse) {
                                return fallbackResponse;
                            }
                            // Otherwise, if we did get a fallback response, we should return it.
                            if (fallbackResponse) {
                                if (!isMinimalMode && isRoutePPREnabled && // Upgrading a fallback shell into a more specific ISR entry is
                                // only done when Partial Prefetching is enabled, mirroring the
                                // `partialFallback` flag the adapter emits for deployments.
                                nextConfig.partialPrefetching && // Match the build-time contract: only fallback shells that can
                                // still be completed with prerenderable params should upgrade.
                                remainingPrerenderableParams.length > 0 && ssgCacheKey && incrementalCache && !isOnDemandRevalidate && !isDebugFallbackShell && // The testing API relies on deterministic shell behavior, so
                                // don't upgrade fallback shells in the background when it's
                                // exposed.
                                !exposeTestingApi && // Instant Navigation Testing API requests intentionally keep
                                // the route in shell mode; don't upgrade these in background.
                                !isInstantNavigationTest) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                        const responseCache = routeModule.getResponseCache(req);
                                        try {
                                            // Only the params that were just specialized should be
                                            // removed from the fallback render. Any remaining fallback
                                            // params stay deferred so the revalidated result is a more
                                            // specific shell (e.g. `/prefix/c/[two]`), not a fully
                                            // concrete route (`/prefix/c/foo`).
                                            const result = await responseCache.revalidate(ssgCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>{
                                                return doRender({
                                                    span: c.span,
                                                    postponed: undefined,
                                                    fallbackRouteParams: remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : null,
                                                    renderOperation: 'prerender'
                                                });
                                            }, null, hasResolved, ctx.waitUntil);
                                            if (result !== null && 'error' in result) {
                                                throw result.error;
                                            }
                                        } catch (err) {
                                            console.error('Error revalidating the page in the background', err);
                                        }
                                    });
                                }
                                // Remove the cache control from the response to prevent it from being
                                // used in the surrounding cache.
                                delete fallbackResponse.cacheControl;
                                return fallbackResponse;
                            }
                        }
                    }
                    // Only requests that aren't revalidating can be resumed. If we have the
                    // minimal postponed data, then we should resume the render with it.
                    let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
                    let hasFullyStaticCacheEntry = false;
                    if (// use the postponed data from the static render (if available). This
                    // ensures that we can utilize the resume data cache (RDC) from the static
                    // render to ensure that the data is consistent between the static and
                    // dynamic renders (for navigations) or when re-rendering after a server
                    // action.
                    // Only enable RDC for Navigations if the feature is enabled.
                    supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && // Include both dynamic RSC requests (navigations) and server actions
                    (isDynamicRSCRequest || isPossibleServerAction) && // We don't typically trigger an on-demand revalidation for dynamic RSC
                    // requests, as we're typically revalidating the page in the background
                    // instead. However, if the cache entry is stale, we should trigger a
                    // background revalidation on dynamic RSC requests. This prevents us
                    // from entering an infinite loop of revalidations.
                    !forceStaticRender) {
                        const incrementalCacheKey = shellCacheKey ?? resolvedPathname;
                        const incrementalCacheEntry = await incrementalCache.get(incrementalCacheKey, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["IncrementalCacheKind"].APP_PAGE,
                            route: routeModule.cacheOwner,
                            isRoutePPREnabled: true,
                            isFallback: false
                        });
                        // If the cache entry is found, we should use the postponed data from
                        // the cache.
                        if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                            // CRITICAL: we're assigning the postponed data from the cache entry
                            // here as we're using the RDC to resume the render.
                            postponed = incrementalCacheEntry.value.postponed;
                            hasFullyStaticCacheEntry = postponed === undefined;
                            // If the cache entry is stale, we should trigger a background
                            // revalidation so that subsequent requests will get a fresh response.
                            if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                            // the requested revalidation flow is either foreground or
                            // background.
                            (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                                // We want to schedule this on the next tick to ensure that the
                                // render is not blocked on it.
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                    const responseCache = routeModule.getResponseCache(req);
                                    try {
                                        const result = await responseCache.revalidate(incrementalCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                                ...c,
                                                // CRITICAL: we need to set this to true as we're
                                                // revalidating in the background and typically this dynamic
                                                // RSC request is not treated as static.
                                                forceStaticRender: true
                                            }), // previous cache entry here (which is stale) will switch on
                                        // isOnDemandRevalidate and break the prerendering.
                                        null, hasResolved, ctx.waitUntil);
                                        if (result !== null && 'error' in result) {
                                            throw result.error;
                                        }
                                    } catch (err) {
                                        console.error('Error revalidating the page in the background', err);
                                    }
                                });
                            }
                        }
                    }
                    // When we're in minimal mode, if we're trying to debug the static shell,
                    // return an empty App Page response instead of resuming the dynamic
                    // render. The static shell has already been streamed by the platform.
                    if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                        return {
                            cacheControl: {
                                revalidate: 1,
                                expire: undefined
                            },
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', isRSCRequest ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                                rscData: undefined,
                                postponed,
                                segmentData: undefined,
                                headers: undefined,
                                status: undefined
                            }
                        };
                    }
                    const placeholderFallbackRouteParams = // defer only the unresolved subset instead of forcing all fallback
                    // params to suspend.
                    !routeModule.isDev && pageIsDynamic && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPlaceholderFallbackRouteParams"])(params, prerenderInfo.fallbackRouteParams) : null;
                    const fallbackRouteParamsForRender = placeholderFallbackRouteParams && placeholderFallbackRouteParams.length > 0 ? placeholderFallbackRouteParams : prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams;
                    const hasPlaceholderFallbackRouteParams = placeholderFallbackRouteParams != null && placeholderFallbackRouteParams.length > 0;
                    // When route-module.ts resolved partial nxtP* params during
                    // background revalidation, filter fallbackRouteParams to only the
                    // params that are still unresolved. This lets doRender produce an
                    // intermediate PPR shell that suspends only for those params.
                    let effectiveFallbackRouteParams = null;
                    if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                        const resolvedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'resolvedRouteParamKeys');
                        if (resolvedKeys && resolvedKeys.size > 0) {
                            effectiveFallbackRouteParams = prerenderInfo.fallbackRouteParams.filter((param)=>!resolvedKeys.has(param.paramName));
                        }
                    }
                    const fallbackRouteParams = // non-prerendered URL, use the prerender manifest's fallback route
                    // params which correctly identifies which params are unknown.
                    (isProduction && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'renderFallbackShell') || hasPlaceholderFallbackRouteParams || isDebugStaticShell && !isPrerendered) && fallbackRouteParamsForRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(fallbackRouteParamsForRender) : // prerender suspends only for the unresolved params.
                    effectiveFallbackRouteParams && effectiveFallbackRouteParams.length > 0 && effectiveFallbackRouteParams.length < ((prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.length) ?? 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(effectiveFallbackRouteParams) : // shared entry. Per-request resumes resolve those params
                    // instead. Blocking renders and RSC-triggered revalidations
                    // both need this restriction.
                    //
                    // The serving modes obtain the unresolved params differently:
                    // - `next start` defers them in this branch.
                    // - Minimal mode uses the platform's placeholders above.
                    // The platform strips never-prerenderable param values before
                    // calling the origin.
                    !isMinimalMode && (usesShellCacheKey || forceStaticRender && shellCacheKey !== null) && remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // Staging defers params without replacing their values with opaque
                    // placeholders. A resumed render reads the selected artifact's mask
                    // from its postponed state.
                    if ((isProduction || isDebugStaticShell) && nextConfig.cacheComponents) {
                        let stagedFallbackParams;
                        if (hasPlaceholderFallbackRouteParams) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(placeholderFallbackRouteParams);
                        } else if (isDebugStaticShell) {
                            stagedFallbackParams = fallbackRouteParams;
                        } else if (hasFullyStaticCacheEntry || isPrerendered) {
                            stagedFallbackParams = null;
                        } else if (postponed && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                            // App-render uses this source-shell set only when the supplied
                            // state does not record its own fallback params.
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                        } else if (prerenderInfo) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getStagedFallbackParams"])(prerenderInfo);
                        } else {
                            stagedFallbackParams = null;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', stagedFallbackParams);
                    }
                    // Forced static and debug renders are prerenders even when the
                    // surrounding request otherwise supports dynamic rendering.
                    const isRequestSpecificRender = !forceStaticRender && !isDebugPrerender && (supportsDynamicResponse || isPossibleServerAction);
                    // Perform the render.
                    const result = await doRender({
                        span,
                        postponed,
                        fallbackRouteParams,
                        renderOperation: isRequestSpecificRender ? 'render' : 'prerender',
                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                    });
                    // The response cache already served the stale entry, so response
                    // delivery cannot report this background failure.
                    if ('error' in result && hasResolved) {
                        await reportRevalidationError(result.error);
                    }
                    return result;
                } catch (err) {
                    // The foreground handler reports errors while it awaits a response.
                    // Report here only after the cache has resolved that response.
                    if (hasResolved) {
                        await reportRevalidationError(err);
                    }
                    throw err;
                }
            };
            const invokeOnCacheEntry = (cacheEntry)=>{
                var _parseUrl;
                // If we support RDC for Navigations, prefer the callback that can
                // deliver postponed state for both document and RSC requests.
                const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry');
                if (!onCacheEntry) {
                    return false;
                }
                const rawCacheEntryUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'initURL') ?? req.url;
                const cacheEntryUrl = rawCacheEntryUrl ? ((_parseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseUrl"])(rawCacheEntryUrl)) == null ? void 0 : _parseUrl.pathname) ?? rawCacheEntryUrl : undefined;
                return onCacheEntry(cacheEntry, {
                    url: cacheEntryUrl
                });
            };
            const resumeRender = (body, postponed, span)=>{
                // Attach the continuation before rendering so the prelude can start
                // streaming immediately.
                const transformer = new TransformStream();
                body.push(transformer.readable);
                // This metadata supplies fallback params when the saved state does not
                // record them. App-render uses the saved state's own set when present.
                if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams));
                }
                // Start the resume without awaiting it. The response consumes the
                // continuation stream attached above.
                doRender({
                    span,
                    postponed,
                    // The resume retains concrete param values; staging only defers
                    // access.
                    fallbackRouteParams: null,
                    renderOperation: 'render'
                }).then(async (result)=>{
                    var _result_value;
                    if (!result) {
                        throw new Error('Invariant: expected a result to be returned');
                    }
                    if ('error' in result) {
                        throw result.error;
                    }
                    if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                        var _result_value1;
                        throw new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`);
                    }
                    // Pipe the resume result to the transformer.
                    await result.value.html.pipeTo(transformer.writable);
                }).catch((err)=>{
                    // An error occurred during piping or preparing the render, abort
                    // the transformers writer so we can terminate the stream.
                    transformer.writable.abort(err).catch((e)=>{
                        console.error("couldn't abort transformer", e);
                    });
                });
            };
            const handleResponse = async (span)=>{
                var _cacheEntry_value, _cachedData_headers;
                // Development evaluates the configured policy without emitting its
                // production matchers. Use that outcome at the same admission boundary.
                const devParamMatchingRejected = routeModule.isDev && !isDebugPrerender && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devParamMatchingRejected');
                // Decide whether this URL is allowed before consulting ISR. An exact
                // build path remains valid even when its cached result is missing, and
                // the most specific matched route controls whether other paths may be
                // generated. Neither a cache hit nor revalidation changes that decision.
                // Server Actions may be forwarded to a worker's route pattern rather
                // than a concrete URL. That invokes the action, not a page navigation.
                if (!isMinimalMode && !isDraftMode && !isPossibleServerAction && pageIsDynamic && (devParamMatchingRejected || (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === false && !isPrerendered)) {
                    if (nextConfig.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                const cacheEntry = await routeModule.handleResponse({
                    cacheKey: ssgCacheKey,
                    responseGenerator: (c)=>responseGenerator({
                            span,
                            ...c
                        }),
                    routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                    isOnDemandRevalidate,
                    isRoutePPREnabled,
                    req,
                    nextConfig,
                    previewProps,
                    prerenderManifest,
                    waitUntil: ctx.waitUntil,
                    isMinimalMode
                });
                if (cacheEntry !== null && 'error' in cacheEntry) {
                    if (res.headersSent || res.writableEnded) {
                        // The outer catch reports the error when we cannot send recovery.
                        throw cacheEntry.error;
                    }
                    // Returned failures bypass the outer catch's error reporting. Do not
                    // await async reporting before sending the error response.
                    const reportPrerenderError = ()=>{
                        const errorReporting = routeModule.onRequestError(req, cacheEntry.error, {
                            routerKind: 'App Router',
                            routePath: srcPage,
                            routeType: 'render',
                            revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                                isStaticGeneration: isSSG,
                                isOnDemandRevalidate
                            })
                        }, false, routerServerContext).catch((err)=>{
                            console.error(err);
                        });
                        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, errorReporting);
                    };
                    const { result } = cacheEntry;
                    for (const [name, value] of Object.entries(result.metadata.headers ?? {})){
                        if (value !== undefined) {
                            res.appendHeader(name, typeof value === 'number' ? value.toString() : value);
                        }
                    }
                    // Each request needs the failure status, including callers that
                    // reused another request's render through the response cache.
                    res.statusCode = 500;
                    span == null ? void 0 : span.setAttributes({
                        'http.status_code': 500,
                        'next.rsc': isRSCRequest,
                        'error.type': '500'
                    });
                    span == null ? void 0 : span.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                    });
                    res.removeHeader('x-nextjs-cache');
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                    let response = result;
                    if (isRSCRequest) {
                        // The router discards failed prefetches and falls back to a
                        // document load when navigation receives a failed Flight response.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]);
                    } else if (typeof result.metadata.postponed === 'string') {
                        // The platform needs the postponed state to resume with the actual
                        // request. This value is only for delivery; the response cache
                        // retains the failure and never persists it as ISR output.
                        //
                        // The callback writes to res without applying value.status. Its
                        // status and metadata headers must be set first.
                        if (await invokeOnCacheEntry({
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: result,
                                rscData: result.metadata.flightData,
                                postponed: result.metadata.postponed,
                                status: 500,
                                headers: undefined,
                                segmentData: undefined
                            },
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        })) {
                            reportPrerenderError();
                            return null;
                        }
                        if (isMinimalMode) {
                            // A prerender invocation may have filtered request headers, so
                            // only the platform can resume with the original request.
                            //
                            // Let the outer catch report this error once.
                            throw cacheEntry.error;
                        }
                        // Each request owns its continuation. The buffered prelude and
                        // postponed state can be shared by the response cache.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(result.toUnchunkedString(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]);
                        resumeRender(response, result.metadata.postponed, span);
                    }
                    reportPrerenderError();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        result: response,
                        generateEtags: false,
                        poweredByHeader: nextConfig.poweredByHeader,
                        cacheControl: undefined
                    });
                }
                if (isDraftMode) {
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                }
                // Documents and RSC payloads must not be stored in development.
                // Browsers reuse a stored response for a history navigation without
                // revalidating it, so a back navigation would restore a page from
                // before the latest edit. Static assets never reach this code. They
                // keep a revalidatable `Cache-Control`, so the browser caches them
                // between page loads.
                if (routeModule.isDev) {
                    res.setHeader('Cache-Control', 'no-store');
                }
                if (!cacheEntry) {
                    if (ssgCacheKey) {
                        // A cache entry might not be generated if a response is written
                        // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                        // have a cache key. If we do have a cache key but we don't end up
                        // with a cache entry, then either Next.js or the application has a
                        // bug that needs fixing.
                        throw new Error('invariant: cache entry required but not generated');
                    }
                    return null;
                }
                if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                    var _cacheEntry_value1;
                    throw new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`);
                }
                const didPostpone = typeof cacheEntry.value.postponed === 'string';
                // Set the build ID header for RSC navigation requests when deploymentId is configured. This
                // corresponds with maybeAppendBuildIdToRSCPayload in app-render.tsx which omits the build ID
                // from the RSC payload when deploymentId is set (relying on this header instead). Server
                // actions are excluded here because action redirect responses get the deployment ID header
                // from the pre-fetched redirect target (via createRedirectRenderResult in action-handler.ts
                // which copies headers from the internal RSC fetch).
                // For static prerenders served from CDN, routes-manifest.json adds a header.
                if (isRSCRequest && !isPossibleServerAction && deploymentId) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_NAV_DEPLOYMENT_ID_HEADER"], deploymentId);
                }
                if (isSSG && // We don't want to send a cache header for requests that contain dynamic
                // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
                // request, then we should set the cache header.
                !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                    if (!isMinimalMode) {
                        // set x-nextjs-cache header to match the header
                        // we set for the image-optimizer
                        res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                    }
                    // Set a header used by the client router to signal the response is static
                    // and should respect the `static` cache staleTime value.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
                }
                const { value: cachedData } = cacheEntry;
                // Coerce the cache control parameter from the render.
                let cacheControl;
                // If this is a resume request in minimal mode it is streamed with dynamic
                // content and should not be cached.
                if (hasPostponedState) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (isDynamicRSCRequest) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!routeModule.isDev) {
                    // If this is a preview mode request, we shouldn't cache it
                    if (isDraftMode) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    } else if (!isSSG) {
                        if (!res.getHeader('Cache-Control')) {
                            cacheControl = {
                                revalidate: 0,
                                expire: undefined
                            };
                        }
                    } else if (cacheEntry.cacheControl) {
                        // If the cache entry has a cache control with a revalidate value that's
                        // a number, use it.
                        if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                            if (cacheEntry.cacheControl.revalidate < 1) {
                                throw new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`);
                            }
                            cacheControl = {
                                revalidate: cacheEntry.cacheControl.revalidate,
                                expire: cacheEntry.cacheControl.expire
                            };
                        } else {
                            cacheControl = {
                                revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CACHE_ONE_YEAR_SECONDS"],
                                expire: undefined
                            };
                        }
                    }
                }
                cacheEntry.cacheControl = cacheControl;
                if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                    var _cachedData_headers1;
                    // This is a prefetch request issued by the client Segment Cache. These
                    // should never reach the application layer (lambda). We should either
                    // respond from the cache (HIT) or respond with 404 (MISS).
                    // Set a header to indicate that PPR is enabled for this route. This
                    // lets the client distinguish between a regular cache miss and a cache
                    // miss due to PPR being disabled. In other contexts this header is used
                    // to indicate that the response contains dynamic data, but here we're
                    // only using it to indicate that the feature is enabled — the segment
                    // response itself contains whether the data is dynamic.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                    // Add the cache tags header to the response if it exists and we're in
                    // minimal mode while rendering a static page.
                    const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                        res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                    }
                    const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                    if (matchedSegment !== undefined) {
                        // Cache hit
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // Cache miss. Either a cache entry for this route has not been generated
                    // (which technically should not be possible when PPR is enabled, because
                    // at a minimum there should always be a fallback entry) or there's no
                    // match for the requested segment. Respond with a 404.
                    res.statusCode = 404;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // `onCacheEntry` lets the platform capture a freshly prerendered result
                // so the proxy can write it to the ISR cache; on deploy it returns true
                // and the function returns below. In debug-shell mode the render was
                // skipped and we only serve the already-cached shell, so there is nothing
                // to capture, and we need to reach the serve path below to close the
                // document. `onCacheEntry` is absent in `next start`/dev, so this guard
                // only affects the deploy (minimalMode) path.
                if (!isDebugStaticShell && await invokeOnCacheEntry(cacheEntry)) {
                    return null;
                }
                if (cachedData.headers) {
                    const headers = {
                        ...cachedData.headers
                    };
                    if (!isMinimalMode || !isSSG) {
                        delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    }
                    for (let [key, value] of Object.entries(headers)){
                        if (typeof value === 'undefined') continue;
                        if (Array.isArray(value)) {
                            for (const v of value){
                                res.appendHeader(key, v);
                            }
                        } else if (typeof value === 'number') {
                            value = value.toString();
                            res.appendHeader(key, value);
                        } else {
                            res.appendHeader(key, value);
                        }
                    }
                }
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                // If the request is a data request, then we shouldn't set the status code
                // from the response because it should always be 200. This should be gated
                // behind the experimental PPR flag.
                if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                    res.statusCode = cachedData.status;
                }
                // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
                if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                    res.statusCode = 200;
                }
                // Mark that the request did postpone.
                if (didPostpone && !isDynamicRSCRequest) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
                }
                // we don't go through this block when preview mode is true
                // as preview mode is a dynamic request (bypasses cache) and doesn't
                // generate both HTML and payloads in the same request so continue to just
                // return the generated payload
                if (isRSCRequest && !isDraftMode) {
                    // If this is a dynamic RSC request, then stream the response.
                    if (typeof cachedData.rscData === 'undefined') {
                        // If the response is not an RSC response, then we can't serve it.
                        if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                            if (nextConfig.cacheComponents) {
                                res.statusCode = 404;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                                    req,
                                    res,
                                    generateEtags: nextConfig.generateEtags,
                                    poweredByHeader: nextConfig.poweredByHeader,
                                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                                    cacheControl: cacheEntry.cacheControl
                                });
                            } else {
                                // Otherwise this case is not expected.
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`);
                            }
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: cachedData.html,
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // As this isn't a prefetch request, we should serve the static flight
                    // data.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // This is a request for HTML data.
                const body = cachedData.html;
                // Instant Navigation Testing API: under the instant lock we serve the
                // static shell as a complete document without resuming the dynamic
                // render, either recovering from an empty (blocking) shell or appending
                // the closing tags to a non-empty one.
                if (isInstantNavigationTest && isDebugStaticShell) {
                    const isEmptyPrelude = typeof cachedData.postponed === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__.isEmptyHTMLPrelude(cachedData.postponed);
                    if (isEmptyPrelude) {
                        // A blocking route (a Suspense boundary above <body>, or `export
                        // const instant = false`) has an empty static shell. Serving it under
                        // the lock would be a blank document with no way to release the lock,
                        // so every reload would render the same blank shell and leave the
                        // user stuck. We surface the reason instead: in development we throw
                        // so it shows as an error overlay (the catch below clears the instant
                        // cookie via Set-Cookie); in production we serve a minimal document
                        // whose script clears the cookie client-side, since on deploy the
                        // edge has already served the cached shell and committed the response
                        // headers and this function only resumes by appending to the body, so
                        // a Set-Cookie could not take effect. `next start` reuses the same
                        // document, where throwing would render only a generic "Internal
                        // Server Error" page.
                        if (routeModule.isDev === true) {
                            throw new Error(`The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.\n\n` + `To identify why this route is blocking, refer to the Instant Navigation docs: https://preview.nextjs.org/docs/app/guides/instant-navigation`);
                        }
                        const recoveryHtml = `<!DOCTYPE html><html><head><meta charSet="utf-8"/></head><body>` + `<script>document.cookie="${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0"</script>` + `<p>The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.</p>` + `<p>To identify why this route is blocking, refer to the ` + `<a href="https://preview.nextjs.org/docs/app/guides/instant-navigation">Instant Navigation docs</a>.</p>` + `</body></html>`;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(recoveryHtml, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        });
                    }
                    // Non-empty shell: the cookie-guarded bootstrap that sets
                    // self.__next_instant_test is embedded in the prerendered shell via
                    // `bootstrapScriptContent`, so it is already present (in the served
                    // shell for a fresh render, or in the cached prelude on deploy). Append
                    // the closing tags so the browser can parse a complete document.
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If there's no postponed state, we should just serve the HTML. This
                // should also be the case for a resume request because it's completed
                // as a server render (rather than a static render).
                if (!didPostpone || isMinimalMode || isRSCRequest) {
                    // If we're in test mode, we should add a sentinel chunk to the response
                    // that's between the static and dynamic parts so we can compare the
                    // chunks and add assertions.
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // If we're debugging the static shell or the dynamic API accesses, we
                // should just serve the HTML without resuming the render. The returned
                // HTML will be the static shell so all the Dynamic API's will be used
                // during static generation.
                if (isDebugStaticShell || isDebugDynamicAccesses) {
                    // Since we're not resuming the render, we need to at least add the
                    // closing body and html tags to create valid HTML.
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                resumeRender(body, cachedData.postponed, span);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    // We don't want to cache the response if it has postponed data because
                    // the response being sent to the client it's dynamic parts are streamed
                    // to the client on the same request.
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            };
            // TODO: activeSpan code path is for when wrapped by
            // next-server can be removed when this is no longer used
            if (isWrappedByNextServer && activeSpan) {
                await handleResponse(activeSpan);
            } else {
                parentSpan = tracer.getActiveScopeSpan();
                return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["BaseServerSpan"].handleRequest, {
                        spanName: `${method} ${srcPage}`,
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanKind"].SERVER,
                        attributes: {
                            'http.method': method,
                            'http.target': httpTarget
                        }
                    }, handleResponse), undefined, !isWrappedByNextServer);
            }
        } catch (err) {
            // If an Instant Navigation Testing document render fails (e.g. the page
            // blocks at the root with no Suspense boundary above it, producing an empty
            // or bailed-out static shell), clear the instant navigation cookie before
            // serving the error page. Otherwise the cookie would persist and every
            // reload would re-render the same broken shell, leaving the user stuck
            // without a way to release the lock.
            if (isInstantNavigationTest && !res.headersSent) {
                res.setHeader('Set-Cookie', `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0`);
            }
            if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
                const silenceLog = false;
                await routeModule.onRequestError(req, err, {
                    routerKind: 'App Router',
                    routePath: srcPage,
                    routeType: 'render',
                    revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                        isStaticGeneration: isSSG,
                        isOnDemandRevalidate
                    })
                }, silenceLog, routerServerContext);
            }
            // rethrow so that we can handle serving error page
            throw err;
        }
    }
    return {
        __next_app__,
        routeModule,
        handler
    };
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
}
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "InstantValidation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InstantValidation"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "LoadingBoundaryProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LoadingBoundaryProvider"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectPrefetchHints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectPrefetchHints"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "isEmptyHTMLPrelude",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isEmptyHTMLPrelude"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "prerenderToNodeStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerenderToNodeStream"],
    "renderToPipeableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToPipeableStream"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
;
const __TURBOPACK__icon__$23$0__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript)'));
const __TURBOPACK__layout__$23$1__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__not$2d$found__$23$2__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__forbidden__$23$3__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__unauthorized__$23$4__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__global$2d$error__$23$5__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__page__$23$6__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
;
;
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$6__,
                    "[project]/src/app/page.tsx"
                ]
            },
            []
        ]
    },
    {
        metadata: {
            icon: [
                async ()=>{
                    const mod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["interopDefault"])(await __TURBOPACK__icon__$23$0__());
                    return [
                        {
                            url: "/favicon.ico" + `?${mod.src.split("/").splice(-1)[0]}`,
                            sizes: `${mod.width}x${mod.height}`,
                            type: `image/x-icon`
                        }
                    ];
                }
            ]
        },
        "layout": [
            __TURBOPACK__layout__$23$1__,
            "[project]/src/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$2__,
            "[project]/src/app/not-found.tsx"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$3__,
            "[project]/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$4__,
            "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$5__,
            "[project]/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    },
    []
];
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAppPageEntrypoint"])({
    tree,
    page: "/page",
    pathname: "/",
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__,
    interopDefault: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["interopDefault"]
});
const __next_app__ = entrypoint.__next_app__;
const routeModule = entrypoint.routeModule;
const handler = entrypoint.handler;
;
}),
"[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Wraps a module getter from the generated loader tree code so that the
 * result of an async module (e.g. due to a top-level await) is tracked as a
 * pending import, which the cache warming phase of a prerender waits for.
 * Both bundlers emit this around every module getter in the loader tree.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "instrumentModuleGetter", {
    enumerable: true,
    get: function() {
        return instrumentModuleGetter;
    }
});
function instrumentModuleGetter(getter) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return ()=>{
            const { trackPendingImport } = __turbopack_context__.r("[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)");
            const exportsOrPromise = getter();
            trackPendingImport(exportsOrPromise);
            return exportsOrPromise;
        };
    }
}
}),
"[project]/node_modules/rehype-slug/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rehypeSlug
]);
/**
 * @typedef {import('hast').Root} Root
 */ /**
 * @typedef Options
 *   Configuration (optional).
 * @property {string} [prefix='']
 *   Prefix to add in front of `id`s (default: `''`).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$github$2d$slugger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/github-slugger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hast-util-heading-rank/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hast-util-to-string/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit/lib/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
/** @type {Options} */ const emptyOptions = {};
const slugs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$github$2d$slugger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
function rehypeSlug(options) {
    const settings = options || emptyOptions;
    const prefix = settings.prefix || '';
    /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */ return function(tree) {
        slugs.reset();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, 'element', function(node) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hast$2d$util$2d$heading$2d$rank$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headingRank"])(node) && !node.properties.id) {
                node.properties.id = prefix + slugs.slug((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toString"])(node));
            }
        });
    };
}
}),
"[project]/node_modules/remark-gfm/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>remarkGfm
]);
/**
 * @import {Root} from 'mdast'
 * @import {Options} from 'remark-gfm'
 * @import {} from 'remark-parse'
 * @import {} from 'remark-stringify'
 * @import {Processor} from 'unified'
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mdast-util-gfm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/micromark-extension-gfm/index.js [app-rsc] (ecmascript)");
;
;
/** @type {Options} */ const emptyOptions = {};
function remarkGfm(options) {
    // @ts-expect-error: TS is wrong about `this`.
    // eslint-disable-next-line unicorn/no-this-assignment
    const self = this;
    const settings = options || emptyOptions;
    const data = self.data();
    const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
    const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
    const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
    micromarkExtensions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$micromark$2d$extension$2d$gfm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfm"])(settings));
    fromMarkdownExtensions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmFromMarkdown"])());
    toMarkdownExtensions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mdast$2d$util$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gfmToMarkdown"])(settings));
}
}),
"[project]/node_modules/unist-util-is/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Parent} from 'unist'
 */ /**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */ /**
 * @callback Check
 *   Check that an arbitrary value is a node.
 * @param {unknown} this
 *   The given context.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 *
 * @typedef {Record<string, unknown> | Node} Props
 *   Object to check for equivalence.
 *
 *   Note: `Node` is included as it is common but is not indexable.
 *
 * @typedef {Array<Props | TestFunction | string> | ReadonlyArray<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary node.
 *
 * @callback TestFunction
 *   Check if a node passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | undefined | void}
 *   Whether this node passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param {unknown} node
 *   Thing to check, typically `Node`.
 * @param {Test} test
 *   A check for a specific node.
 * @param {number | null | undefined} index
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} parent
 *   The node’s parent.
 * @param {unknown} context
 *   Context object (`this`) to pass to `test` functions.
 * @returns {boolean}
 *   Whether `node` is a node and passes a test.
 */ __turbopack_context__.s([
    "convert",
    ()=>convert,
    "is",
    ()=>is
]);
const is = /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error('Expected positive finite index');
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error('Expected parent node');
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error('Expected both parent and index');
    }
    return looksLikeANode(node) ? check.call(context, node, index, parent) : false;
};
const convert = /**
     * @param {Test} [test]
     * @returns {Check}
     */ function(test) {
    if (test === null || test === undefined) {
        return ok;
    }
    if (typeof test === 'function') {
        return castFactory(test);
    }
    if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : // narrows to `Array`.
        propertiesFactory(test);
    }
    if (typeof test === 'string') {
        return typeFactory(test);
    }
    throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */ function anyFactory(tests) {
    /** @type {Array<Check>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return castFactory(any);
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {TestFunction}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].apply(this, parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */ function propertiesFactory(check) {
    const checkAsRecord = check;
    return castFactory(all);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        const nodeAsRecord = node;
        /** @type {string} */ let key;
        for(key in check){
            if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */ function typeFactory(check) {
    return castFactory(type);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */ function castFactory(testFunction) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {Check}
   */ function check(value, index, parent) {
        return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === 'number' ? index : undefined, parent || undefined));
    }
}
function ok() {
    return true;
}
/**
 * @param {unknown} value
 * @returns {value is Node}
 */ function looksLikeANode(value) {
    return value !== null && typeof value === 'object' && 'type' in value;
}
}),
"[project]/node_modules/unist-util-visit-parents/lib/color.node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {string} d
 * @returns {string}
 */ __turbopack_context__.s([
    "color",
    ()=>color
]);
function color(d) {
    return '\u001B[33m' + d + '\u001B[39m';
}
}),
"[project]/node_modules/unist-util-visit-parents/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTINUE",
    ()=>CONTINUE,
    "EXIT",
    ()=>EXIT,
    "SKIP",
    ()=>SKIP,
    "visitParents",
    ()=>visitParents
]);
/**
 * @import {Node as UnistNode, Parent as UnistParent} from 'unist'
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ /**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends ReadonlyArray<infer T>
 *   ? MatchesOne<Value, T>
 *   : Check extends Array<infer T>
 *   ? MatchesOne<Value, T>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {'skip' | boolean} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<VisitedParents>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [VisitedParents=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Tree type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-is/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit-parents/lib/color.node.js [app-rsc] (ecmascript)");
;
;
/** @type {Readonly<ActionTuple>} */ const empty = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = 'skip';
function visitParents(tree, test, visitor, reverse) {
    /** @type {Test} */ let check;
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
    } else {
        // @ts-expect-error visitor given, so `test` isn’t a visitor.
        check = test;
    }
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convert"])(check);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */ function factory(node, index, parents) {
        const value = node && typeof node === 'object' ? node : {};
        if (typeof value.type === 'string') {
            const name = // `hast`
            typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
            Object.defineProperty(visit, 'name', {
                value: 'node (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["color"])(node.type + (name ? '<' + name + '>' : '')) + ')'
            });
        }
        return visit;
        //TURBOPACK unreachable
        ;
        function visit() {
            /** @type {Readonly<ActionTuple>} */ let result = empty;
            /** @type {Readonly<ActionTuple>} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<UnistParent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
                // @ts-expect-error: `visitor` is now a visitor.
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            if ('children' in node && node.children) {
                const nodeAsParent = node;
                if (nodeAsParent.children && result[0] !== SKIP) {
                    offset = (reverse ? nodeAsParent.children.length : -1) + step;
                    grandparents = parents.concat(nodeAsParent);
                    while(offset > -1 && offset < nodeAsParent.children.length){
                        const child = nodeAsParent.children[offset];
                        subresult = factory(child, offset, grandparents)();
                        if (subresult[0] === EXIT) {
                            return subresult;
                        }
                        offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                    }
                }
            }
            return result;
        }
    }
}
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return [
            CONTINUE,
            value
        ];
    }
    return value === null || value === undefined ? empty : [
        value
    ];
}
}),
"[project]/node_modules/unist-util-visit/lib/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "visit",
    ()=>visit
]);
/**
 * @import {Node as UnistNode, Parent as UnistParent} from 'unist'
 * @import {VisitorResult} from 'unist-util-visit-parents'
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ // To do: use types from `unist-util-visit-parents` when it’s released.
/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends ReadonlyArray<any>
 *   ? MatchesOne<Value, Check[number]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends UnistNode ? number | undefined : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [Ancestor=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
 *   Build a typed `Visitor` function from a node and all possible parents.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Visited
 *   Node type.
 * @template {UnistParent} Ancestor
 *   Parent type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     Matches<Descendant, Check>,
 *     Extract<Descendant, UnistParent>
 *   >
 * )} BuildVisitorFromDescendants
 *   Build a typed `Visitor` function from a list of descendants and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Node type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/unist-util-visit-parents/lib/index.js [app-rsc] (ecmascript)");
;
;
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    /** @type {boolean | null | undefined} */ let reverse;
    /** @type {Test} */ let test;
    /** @type {Visitor} */ let visitor;
    if (typeof testOrVisitor === 'function' && typeof visitorOrReverse !== 'function') {
        test = undefined;
        visitor = testOrVisitor;
        reverse = visitorOrReverse;
    } else {
        // @ts-expect-error: assume the overload with test was given.
        test = testOrVisitor;
        // @ts-expect-error: assume the overload with test was given.
        visitor = visitorOrReverse;
        reverse = maybeReverse;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["visitParents"])(tree, test, overload, reverse);
    /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        const index = parent ? parent.children.indexOf(node) : undefined;
        return visitor(node, index, parent);
    }
}
}),
]})(),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01jsut6-qd6_o._.js.map