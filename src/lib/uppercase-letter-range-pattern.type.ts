// Type.
import { RegExpFlags } from './regexp-flags.type';
import { UppercaseLetter } from '@typedly/letter';
import { UppercaseLetterRange } from './uppercase-letter-range.type';
/**
 * @description
 * @export
 * @template {UppercaseLetter} [From='A'] - The starting letter in the range, defaults to 'A'.
 * @template {UppercaseLetter} [To='Z'] - The ending letter in the range, defaults to 'Z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 * @template {number | ''} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 * @template {RegExpFlags | ''} [Flag='g'] 
 */
export type UppercaseLetterRangePattern<
  From extends UppercaseLetter = 'A',
  To extends UppercaseLetter = 'Z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' = '',
  Max extends number | '' = '',
  Flag extends RegExpFlags | '' = 'g'
> = `/${UppercaseLetterRange<From, To, Character, Negated, Min, Max>}/${Flag}`;
