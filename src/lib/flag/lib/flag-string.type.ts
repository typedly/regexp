// Type.
import { RegExpFlag } from "./regexp-flag.type";
/**
 * @description Constructs a string representation from an array of `RegExpFlag` values.
 * This type recursively concatenates each flag in the provided `Flags` array into a single string.
 * @example
 * type Example = FlagString<['g', 'i', 'm']>; // 'gim'
 * 
 * @export
 * @template {RegExpFlag[]} Flags The array of regular expression flags to be converted into a string.
 */
export type FlagString<Flags extends RegExpFlag[]> = Flags extends []
  ? ''
  : Flags extends [infer First extends RegExpFlag, ...infer Rest extends RegExpFlag[]]
  ? `${First}${FlagString<Rest>}`
  : never;
