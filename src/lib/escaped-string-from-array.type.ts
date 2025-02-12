// Type.
import { EscapedString } from "./escaped-string.type";
/**
 * @description Converts `EscapeArray<Characters>` into a single escaped string.
 * @export
 * @template {string[]} Characters 
 * @example
 * type Test3 = EscapedStringFromArray<['d+', '*', 'W']>;
 * // Expected: "\\d\\+\\*\\W"
 * 
 */
export type EscapedStringFromArray<Characters extends string | string[]> =
  Characters extends [infer First, ...infer Rest extends string[]]
    ? `${EscapedString<First & string>}${EscapedStringFromArray<Rest>}`
    : '';
