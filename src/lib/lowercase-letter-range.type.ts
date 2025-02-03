// Type.
import { LetterRange } from './letter-range.type';
import { LowercaseLetter } from '@typedly/letter';
import { Repetition } from './repetition.type';
/**
 * @description
 * @export
 * @template {LowercaseLetter} [From='a'] - The starting letter in the range, defaults to 'a'.
 * @template {LowercaseLetter} [To='z'] - The ending letter in the range, defaults to 'z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 * @template {number | '' | '*' | '+' | '?'} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 */
export type LowercaseLetterRange<
  From extends LowercaseLetter = 'a',
  To extends LowercaseLetter = 'z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' | '*' | '+' | '?' = '',
  Max extends number | '' = ''
> = `${LetterRange<From, To, Character, Negated>}${Repetition<Min, Max>}`;
