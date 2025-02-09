// Type.
import { RegExpFlag } from './regexp-flag.type';
/**
 * @description Removes a flag while keeping tuple order.
 * @export
 * @template {RegExpFlag[]} Flags 
 * @template {RegExpFlag} Flag 
 */
export type RemoveFlag<Flags extends RegExpFlag[], Flag extends RegExpFlag> = 
  Flags extends [infer First extends RegExpFlag, ...infer Rest extends RegExpFlag[]]
    ? First extends Flag
      ? RemoveFlag<Rest, Flag>
      : [First, ...RemoveFlag<Rest, Flag>]
    : [];
