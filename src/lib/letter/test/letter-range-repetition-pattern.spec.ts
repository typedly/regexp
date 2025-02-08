import { LetterRangeRepetitionPattern } from "../..";


type Example1 = LetterRangeRepetitionPattern<'a', 'z', 'd', false, 2, 4>; // Produces: "[a-z\\d]{2,4}"
type Example2 = LetterRangeRepetitionPattern<'A', 'F', '', true, 1>; // Produces: "[^A-F]{1}"
type AnyLowercase = LetterRangeRepetitionPattern<'a', 'z', '', false, '*'> // Output: "[a-z]*"
type AtLeastOneDigit = LetterRangeRepetitionPattern<'0', '9', '', false, '+'>; // Output: "[0-9]+"
type OptionalUppercase = LetterRangeRepetitionPattern<'A', 'Z', '', false, '?'>; // Output: "[A-Z]?"
