// Type.
import { FlagString, RegExpFlag } from "./flag";
/**
 * @description
 * @export
 * @template {string} Source 
 * @template {RegExpFlag[]} [Flags=[]] 
 */
export type RegExpPattern<Source extends string, Flags extends RegExpFlag[] = []> = 
  `/${Source}/${FlagString<Flags>}`;
