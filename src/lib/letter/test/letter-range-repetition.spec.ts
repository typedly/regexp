import { LetterRangeRepetition } from "../..";


type Example1 = LetterRangeRepetition<'a', 'z', 'd', false, 2, 4>; // Produces: "[a-z\\d]{2,4}"
type Example2 = LetterRangeRepetition<'A', 'F', '', true, 1>; // Produces: "[^A-F]{1}"
type AnyLowercase = LetterRangeRepetition<'a', 'z', '', false, '*'> // Output: "[a-z]*"
type AtLeastOneDigit = LetterRangeRepetition<'0', '9', '', false, '+'>; // Output: "[0-9]+"
type OptionalUppercase = LetterRangeRepetition<'A', 'Z', '', false, '?'>; // Output: "[A-Z]?"
