// Type.
import { Repetition } from './repetition.type';
/**
 * @description
 * @export
 * @template {[string, string][]} Ranges 
 * @template {number | ''} [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 */
export type MultiLetterRange<
  Ranges extends [string, string][],
  Min extends number | '' = '',
  Max extends number | '' = ''
> = `[${Ranges extends [[infer F, infer T], ...infer Rest]
      ? `${F & string}-${T & string}${Rest extends [string, string][] ? MultiLetterRange<Rest> extends `[${infer Inner}]` ? Inner : '' : ''}`
      : ''}]${Repetition<Min, Max>}`;
