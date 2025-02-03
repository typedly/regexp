// Type.
import { RegExpFlag } from "./regexp-flag.type";
/**
 * @description 
 * @template {RegExpFlag} Flag 
 * @template {boolean} Include 
 */
export type IncludeFlag<Flag extends RegExpFlag, Include extends boolean> = 
  Include extends true ? Flag : '';
