// Type.
import { EscapedStringFromArray } from "./escaped-string-from-array.type";
import { EscapedString } from "./escaped-string.type";
/**
 * @description Escapes special characters in either a `string` or an `array` of strings.
 * @export
 * @template {string | string[]} Character 
 * @example
 * type TestString = Escaped<'d+*'>;  // Expected: "\\d\\+\\*"
 * type TestArray = Escaped<['d+', '*', 'W']>; // Expected: "\\d\\+\\*\\W"
 */
export type Escaped<Character extends string | string[] = ''> =
  Character extends string
    ? EscapedString<Character>
    : Character extends string[]
    ? EscapedStringFromArray<Character>
    : never;
