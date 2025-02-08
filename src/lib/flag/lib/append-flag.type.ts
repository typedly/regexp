// Type.
import { RegExpFlag } from './regexp-flag.type';
/**
 * @description Appends (The flag is added **at the end** of the array.) a flag to the `array` if not already present.
 * @export
 * @example
 * // Case 1: Adding a flag that is not in the list
 * type Example1 = AppendFlag<[], 'g'>; // Result: ['g']
 * type Example2 = AppendFlag<['i'], 'm'>; // Result: ['i', 'm']
 * type Example3 = AppendFlag<['g', 'i'], 's'>; // Result: ['g', 'i', 's']
 * // Case 2: Adding a flag that is already present (should return the same list)
 * type Example4 = AppendFlag<['g', 'i'], 'i'>; // Result: ['g', 'i'] (unchanged)
 * type Example5 = AppendFlag<['m', 'u', 'y'], 'y'>; // Result: ['m', 'u', 'y'] (unchanged)
 * // Case 3: Adding multiple flags sequentially
 * type Example6 = AppendFlag<AppendFlag<['g'], 'i'>, 'm'>; // Result: ['g', 'i', 'm']
 * @template {RegExpFlag[]} Flags 
 * @template {RegExpFlag} Flag 
 */
export type AppendFlag<Flags extends RegExpFlag[], Flag extends RegExpFlag> = 
  Flag extends Flags[number] ? Flags : [...Flags, Flag];
