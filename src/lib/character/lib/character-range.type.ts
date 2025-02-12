// Type.
import { EscapedStringFromArray } from "../../escaped-string-from-array.type";
import { Escaped } from "../../escaped.type";
import { FromTo } from "../../from-to.type";
/**
 * @description
 * @export
 * @template {string | number} [From='a'] 
 * @template {string | number} [To='z'] 
 * @template {string} [Character=''] 
 * @template {boolean} [Negated=false] 
 * @example
 * const example1: CharacterRange<'a', 'z'>  = '[a-z]'; // "[a-z]"
 * const example2: CharacterRange<'', 'z'> = '[z]'; // "[z]"
 * const example3: CharacterRange<'a', ''>  = '[a]';  // "[a]"
 * const example4: CharacterRange<'', ''>  = '[]'; // "[]"
 * const example5: CharacterRange<'a', 'z', '_'> = '[a-z_]'; // "[a-z_]"
 * const example6: CharacterRange<'', '', '_'> = '[_]'; // "[_]"
 * const example7: CharacterRange<'a', 'z', ['d', 'w', 's']>  =  '[a-z\\d\\w\\s]'; // "[a-z\\d\\w\\s]"
 */
export type CharacterRange<
  From extends string | number = 'a',
  To extends string | number = 'z',
  Character extends string | string[] = '',
  Negated extends boolean = false
> = `[${FromTo<From, To, Negated, '-'>}${Character extends string ? Escaped<Character> : EscapedStringFromArray<Character>}]`;
