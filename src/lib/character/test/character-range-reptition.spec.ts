
import { CharacterRangeRepetition } from '../lib/character-range-repetition.type';

type AtLeastOneDigit = CharacterRangeRepetition<0, 9, '', false, '+'>; // Output: "[0-9]+"
