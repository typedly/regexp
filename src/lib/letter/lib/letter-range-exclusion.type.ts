// Type.
import { AlphabeticLetter } from '@typedly/letter';
import { FromTo } from "../../from-to.type";
/**
 * @description Represents a range of excluded letters, suitable for use in `RegExp` patterns. 
 * The type allows specifying a range from `From` to `To`.
 * @example
 * type ExcludedLowercase = LetterRangeExclusion; // Resolves to "[^a-z]
 * type ExcludedVowels = LetterRangeExclusion<'a', 'u'>; // Resolves to "[^a-u]"
 * // Using the type in a variable
 * const pattern: ExcludedLowercase = "[^a-z]";  // This matches any character not in a-z
 * // If you log the pattern or use it in a RegExp, it will exclude lowercase letters:
 * const regex = new RegExp(pattern);
 * regex.test("B");  // true, because 'B' is not a lowercase letter
 * regex.test("b");  // false, because 'b' is a lowercase letter
 * @export
 * @template {AlphabeticLetter} [From=''] - The starting letter in the range, defaults to 'a'.
 * @template {AlphabeticLetter} [To=''] - The ending letter in the range, defaults to 'z'.
 */
export type LetterRangeExclusion<
  From extends AlphabeticLetter = 'a',
  To extends AlphabeticLetter = 'z'
> = `[^${FromTo<From, To>}]`;
