// Type.
import { RegExpFlag } from './regexp-flag.type';
/**
 * @description Prepends (The flag is added **at the beginning* of the array.) a flag to the `array` if not already present.
 * @export
 * @template {RegExpFlag[]} Flags 
 * @template {RegExpFlag} Flag 
 */
export type PrependFlag<
  Flags extends RegExpFlag[],
  Flag extends RegExpFlag
> = 
  Flag extends Flags[number] ? Flags : [Flag, ...Flags];
