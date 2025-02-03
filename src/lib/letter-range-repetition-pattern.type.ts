// Type.
import { LetterRangeRepetition } from './letter-range-repetition.type';
import { RegExpFlags } from './regexp-flags.type';
/**
 * @description The representation of a letter range with optional quantity constraints, suitable for use in `RegExp` patterns.
 * @example
 * type LowercaseLetters_AtLeast3 = LetterRangeRepetition<'a', 'z', '', false, 3>; // Output: "[a-z]{3}"
 * type LettersAndDigits_2to4 = LetterRangeRepetition<'a', 'z', 'd', false, 2, 4>; // Output: "[a-z\\d]{2,4}"
 * type NotUppercase_Exactly5 = LetterRangeRepetition<'A', 'Z', '', true, 5>; // Output: "[^A-Z]{5}"
 * @export
 * @template {string} [From='a'] - The starting letter in the range, defaults to 'a'.
 * @template {string} [To='z'] - The ending letter in the range, defaults to 'z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 * @template {number | ''} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 * @template {RegExpFlags | ''} [Flag='g'] 
 */
export type LetterRangeRepetitionPattern<
  From extends string = 'a',
  To extends string = 'z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' = '',
  Max extends number | '' = '',
  Flag extends RegExpFlags | '' = 'g'
> = `/${LetterRangeRepetition<From, To, Character, Negated, Min, Max>}/${Flag}`;
