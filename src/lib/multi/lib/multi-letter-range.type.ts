// Type.
import { AlphabeticLetter } from '@typedly/letter';
import { CharacterRangeRepetition } from '../../character';
import { LetterRangeTuple } from '../../letter';
/**
 * @description
 * @export
 * @example
 * const multiRange: MultiLetterRange<[['a', 'z', 1, 2], ['A', 'Z', 2, 5]]> = '[a-z]{1,2}[A-Z]{2,5}';
 * @template {LetterRangeTuple[]} Ranges 
 */
export type MultiLetterRange<
  Ranges extends LetterRangeTuple[],
> = `${Ranges extends [[infer From extends AlphabeticLetter, infer To extends AlphabeticLetter, infer Min extends number, infer Max extends number], ...infer Rest]
      ? `${CharacterRangeRepetition<From, To, '', false, Min, Max>}${Rest extends LetterRangeTuple[] ? MultiLetterRange<Rest> extends `${infer Inner}` ? Inner : '' : ''}`
      : ''}`;
