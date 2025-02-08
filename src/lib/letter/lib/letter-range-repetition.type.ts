// Type.
import { AlphabeticLetter } from '@typedly/letter';
import { LetterRange } from "./letter-range.type";
import { Repetition } from "../../repetition.type";
/**
 * @description The representation of a letter range with optional quantity constraints, suitable for use in `RegExp` patterns.
 * The type allows specifying a range of letters (from `From` to `To`) with optional `Min` and `Max` quantities for repetition.
 * @example
 * type Example1 = LetterRangeRepetition<'a', 'z', 'd', false, 2, 4>; // Produces: "[a-z\\d]{2,4}"
 * type Example2 = LetterRangeRepetition<'A', 'F', '', true, 1>; // Produces: "[^A-F]{1}"
 * type AnyLowercase = LetterRangeRepetition<'a', 'z', '', false, '*'> // Output: "[a-z]*"
 * type AtLeastOneDigit = LetterRangeRepetition<'0', '9', '', false, '+'>; // Output: "[0-9]+"
 * type OptionalUppercase = LetterRangeRepetition<'A', 'Z', '', false, '?'>; // Output: "[A-Z]?"
 * @export
 * @template {AlphabeticLetter} [From='a'] - The starting letter in the range, defaults to 'a'.
 * @template {AlphabeticLetter} [To='z'] - The ending letter in the range, defaults to 'z'.
 * @template {string} [Character=''] - An optional string of additional characters that will be escaped and appended to the range.
 * @template {boolean} [Negated=false] - A flag that indicates if the character class should be negated. If true, a caret (^) is added immediately after the opening bracket.
 * @template {number | '' | '*' | '+' | '?'} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 */
export type LetterRangeRepetition<
  From extends AlphabeticLetter = 'a',
  To extends AlphabeticLetter = 'z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' | '*' | '+' | '?' = '',
  Max extends number | '' = ''
> = `${LetterRange<From, To, Character, Negated>}${Repetition<Min, Max>}`;
