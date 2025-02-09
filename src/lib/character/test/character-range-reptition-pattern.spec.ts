import { CharacterRangeRepetition } from "../lib";

type Digit = CharacterRangeRepetition<'0', '9', '', false, 1, 5>; // Output: "[0-9]{1, 5}"
