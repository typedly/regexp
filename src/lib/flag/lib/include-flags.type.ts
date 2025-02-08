// Type.
import { IncludeFlag } from './include-flag.type';
/**
 * @description The type represents the regexp flags.
 * @export
 * @example
 * type Example1 = Flag<true, true, true, true, true, true>;
 * @template {boolean} G 
 * @template {boolean} I 
 * @template {boolean} M 
 * @template {boolean} S 
 * @template {boolean} U 
 * @template {boolean} Y 
 */
export type IncludeFlags<
  G extends boolean = false,
  I extends boolean = false,
  M extends boolean = false,
  S extends boolean = false,
  U extends boolean = false,
  Y extends boolean = false
> = `${IncludeFlag<'g', G>}${IncludeFlag<'i', I>}${IncludeFlag<'m', M>}${IncludeFlag<'s', S>}${IncludeFlag<'u', U>}${IncludeFlag<'y', Y>}`;
