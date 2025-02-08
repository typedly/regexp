// Type.
import { RegExpFlag } from './regexp-flag.type';
/**
 * @description Conditionally includes a RegExp flag based on a boolean value.
 * @example
 * // Includes the 'g' flag because Include is true
 * type GlobalFlag = IncludeFlag<'g', true>; // 'g'
 *
 * // Does not include the 'i' flag because Include is false
 * type CaseInsensitiveFlag = IncludeFlag<'i', false>; // ''
 *
 * // Can be used to dynamically construct a set of flags
 * type Flags = `${IncludeFlag<'g', true>}${IncludeFlag<'i', false>}${IncludeFlag<'m', true>}`; // 'gm'
 * 
 * @template {RegExpFlag} Flag The regular expression flag to include (e.g., 'g', 'i', 'm').
 * @template {boolean} Include A boolean value that determines whether to include the flag.
 */
export type IncludeFlag<Flag extends RegExpFlag, Include extends boolean> = 
  Include extends true ? Flag : '';
