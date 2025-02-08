// Type.
import { Escaped } from "../../escaped.type";
import { FromTo } from "../../from-to.type";
/**
 * @description
 * @export
 * @example
 * const example1: CharacterRange<'a', 'z'>  = '[a-z]'; // "[a-z]"
 * const example2: CharacterRange<'', 'z'> = '[z]'; // "[z]"
 * const example3: CharacterRange<'a', ''>  = '[a]';  // "[a]"=
 * const example4: CharacterRange<'', ''>  = '[]'; // "[]"
 * const example5: CharacterRange<'a', 'z', '_'> = '[a-z_]'; // "[a-z_]"
 * const example6: CharacterRange<'', '', '_'> = '[_]'; // "[_]"
 * @template {string | number} [From=''] 
 * @template {string | number} [To=''] 
 * @template {string} [Character=''] 
 * @template {boolean} [Negated=false] 
 */
export type CharacterRange<
  From extends string | number = '',
  To extends string | number = '',
  Character extends string = '',
  Negated extends boolean = false
> = `[${Negated extends true ? '^' : ''}${FromTo<From, To>}${Escaped<Character>}]`;
