// Type.
import { FromTo } from "./from-to.type";
/**
 * @description
 * @export
 * @template {string | number} [From=''] 
 * @template {string | number} [To=''] 
 * @template {boolean} [Negated=false] 
 * @template {string} [Delimiter='-'] 
 */
export type Range<
  From extends string | number = '',
  To extends string | number = '',
  Negated extends boolean = false,
  Delimiter extends string = '-',
> = `[${FromTo<From, To, Negated, Delimiter>}]`;
