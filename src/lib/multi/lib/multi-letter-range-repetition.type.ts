// Type.
import { LetterRangeTuple } from "../../letter/lib/letter-range-tuple.type";
import { MultiLetterRange } from "./multi-letter-range.type";
import { NonCapturingRepetition } from "../../non-capturing-repetition.type";
/**
 * @description
 * @export
 * @example
 * const example1: MultiLetterRangeRepetition<[['a', 'z', 1, 2], ['A', 'Z', 2, 5]]> = '[a-z]{1,2}[A-Z]{2,5}';
 * const example2: MultiLetterRangeRepetition<[['a', 'z', 1, 2], ['A', 'Z', 2, 5]], 1, 2> = '(?:[a-z]{1,2}[A-Z]{2,5}){1,2}';
 * @template {LetterRangeTuple[]} Ranges 
 * @template {number | '' | } [Min=''] - The minimum repetition count (optional).
 * @template {number | ''} [Max=''] - The maximum repetition count (optional).
 */
export type MultiLetterRangeRepetition<
  Ranges extends LetterRangeTuple[],
  Min extends number | '' = '',
  Max extends number | '' = ''
> = NonCapturingRepetition<MultiLetterRange<Ranges>, Min, Max>;
