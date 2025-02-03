// Type.
import { LetterRange } from './letter-range.type';
import { Repetition } from './repetition.type';
import { UppercaseLetter } from '@typedly/letter';
/**
 * @description
 * @export
 * @template {UppercaseLetter} [From='A'] - The starting letter in the range, defaults to 'A'.
 * @template {UppercaseLetter} [To='Z'] - The ending letter in the range, defaults to 'Z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 * @template {number | ''} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 */
export type UppercaseLetterRange<
  From extends UppercaseLetter = 'A',
  To extends UppercaseLetter = 'Z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' = '',
  Max extends number | '' = ''
> = `${LetterRange<From, To, Character, Negated> }${Repetition<Min, Max>}`;
