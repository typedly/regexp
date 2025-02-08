// Type.
import { CharacterRange } from "./character-range.type";
import { Repetition } from "../../repetition.type";
/**
 * @description
 * @export
 * @example
 * const example1: CharacterRangeRepetition<'a', 'z', 'dw', false, 1, 2>  = '[a-z\\d\\w]{1,2}'; // "[a-z\\d\\w]{1,2}"
 * const example2: CharacterRangeRepetition<'', 'z', 'dws', true, 5, 7> = '[^z\\d\\w\\s]{5,7}'; // "[^z\\d\\w\\s]{5,7}
 * const example3: CharacterRangeRepetition<'a', '', 'dws', false, 2, 3>  = '[a\\d\\w\\s]{2,3}';  // "[a\\d\\w\\s]{2,3}"
 * const example4: CharacterRangeRepetition<'', ''>  = '[]'; // "[]"
 * const example5: CharacterRangeRepetition<'a', 'z', '_', true, '*'> = '[^a-z_]*'; // "[^a-z_]*"
 * const example6: CharacterRangeRepetition<'', '', '_', false, '?'> = '[_]?'; // "[_]?"
 * @template {string | number} [From='a'] 
 * @template {string | number} [To='z'] 
 * @template {string} [Character=''] 
 * @template {boolean} [Negated=false] 
 * @template {number | '' | '*' | '+' | '?'} [Min=''] 
 * @template {number | ''} [Max=''] 
 */
export type CharacterRangeRepetition<
  From extends string | number = 'a',
  To extends string | number = 'z',
  Character extends string = '',
  Negated extends boolean = false,
  Min extends number | '' | '*' | '+' | '?' = '',
  Max extends number | '' = ''
> = `${CharacterRange<From, To, Character, Negated>}${Repetition<Min, Max>}`;
