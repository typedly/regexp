// Type.
import { RegExpFlag } from "./regexp-flag.type";
/**
 * @description The type represents a string of regular expression flags by combining multiple flags passed as a tuple.
 * @export
 * @template {RegExpFlag[]} Flags - A tuple representing an array of regular expression flags. Each flag must be a valid `RegExpFlag`. * 
 * @example
 * type Flags1 = PatternFlag<['g', 'i']>; // Result: "gi"
 * type Flags2 = PatternFlag<['m']>; // Result: "m"
 */
export type PatternFlag<Flags extends RegExpFlag[]> = Flags extends [infer First, ...infer Rest]
  ? First extends RegExpFlag
    ? `${First}${PatternFlag<Rest extends RegExpFlag[] ? Rest : []>}`
    : ''
  : '';
