// Type.
import { Quantifier } from "./quantifier.type";
import { Repetition } from "./repetition.type";
/**
 * @description
 * @export
 * @template {string} Pattern 
 * @template {number | '' | Quantifier} [Min=''] 
 * @template {number | ''} [Max=''] 
 */
export type NonCapturingRepetition<
  Pattern extends string,
  Min extends number | '' | Quantifier = '',
  Max extends number | '' = ''
> = `${Min extends '' ? Max extends '' ? '' : '(?:' : '(?:'}${Pattern}${Min extends '' ? Max extends '' ? '' : ')' : ')'}${Repetition<Min, Max>}`;
