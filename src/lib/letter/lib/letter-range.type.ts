// Type.
import { AlphabeticLetter } from '@typedly/letter';
import { CharacterRange } from '../../character';
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
 * @template {AlphabeticLetter} [From='a'] - The starting letter in the range, defaults to 'a'.
 * @template {AlphabeticLetter} [To='z'] - The ending letter in the range, defaults to 'z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 */
export type LetterRange<
  From extends AlphabeticLetter = 'a',
  To extends AlphabeticLetter = 'z',
  Character extends string = '',
  Negated extends boolean = false
> = CharacterRange<From, To, Character, Negated>
