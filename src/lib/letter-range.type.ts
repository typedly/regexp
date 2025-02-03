// Type.
import { Escaped } from "./escaped.type";
/**
 * @description Represents a range of letters, suitable for use in `RegExp` patterns.
 * The type allows specifying a range from `From` to `To`.
 * Adding additional characters e.g. 'd', 'D' or 's'.
 * Negate the range with the `boolean`.
 * @example
 * - LetterRange<'a', 'z'> produces "[a-z]"
 * - LetterRange<'a', 'z', 'd'> produces "[a-z\\d]"
 * - LetterRange<'a', 'z', '', true> produces "[^a-z]"
 * - LetterRange<'a', 'z', 'd', true> produces "[^a-z\\d]"
 * @export
 * @template {string} [From='a'] - The starting letter in the range, defaults to 'a'.
 * @template {string} [To='z'] - The ending letter in the range, defaults to 'z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 */
export type LetterRange<
  From extends string = 'a',
  To extends string = 'z',
  Character extends string = '',
  Negated extends boolean = false
> =`[${Negated extends true ? '^': ''}${From}-${To}${Escaped<Character>}]`;
