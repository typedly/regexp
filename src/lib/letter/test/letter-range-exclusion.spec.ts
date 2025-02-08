import { LetterRangeExclusion } from "../..";

type ExcludedLowercase = LetterRangeExclusion; // Resolves to "[^a-z]
type ExcludedVowels = LetterRangeExclusion<'a', 'u'>; // Resolves to "[^a-u]"
// Using the type in a variable
const pattern: ExcludedLowercase = "[^a-z]";  // This matches any character not in a-z
// If you log the pattern or use it in a RegExp, it will exclude lowercase letters:
const regex = new RegExp(pattern);
regex.test("B");  // true, because 'B' is not a lowercase letter
regex.test("b");  // false, because 'b' is a lowercase letter
