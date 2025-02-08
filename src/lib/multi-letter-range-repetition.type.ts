// Type.
import { LetterRangeTuple } from "./letter/lib/letter-range-tuple.type";
/**
 * @description
 * @export
 * @template {LetterRangeTuple[]} Ranges 
 */
export type  MultiLetterRangeRepetition<
  Ranges extends LetterRangeTuple[]
> = `${Ranges extends [[infer F, infer T, infer Min, infer Max], ...infer Rest]
      ? `${`[${F & string}-${T & string}]${Min extends '' 
          ? Max extends '' 
            ? '' 
            : `{,${Max & number}}`
          : Max extends '' 
            ? `{${Min & number}}`
            : `{${Min & number},${Max & number}}`}`
        }${Rest extends LetterRangeTuple[] ? MultiLetterRangeRepetition<Rest> : ''}`
      : ''}`;
