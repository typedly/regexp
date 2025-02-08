// Type.
import { LetterRange } from '../..';


function buildLetterRange<
  From extends string = '',
  To extends string = '',
  Character extends string = '',
  Negated extends boolean = false
>(
  from: From,
  to: To,
  character: Character = '' as Character,
  negated: Negated = false as Negated
): LetterRange<From, To, Character, Negated> {
  return `[${negated ? '^' : ''}${from}-${to}${character ? `\\${character}` : ''}]` as LetterRange<From, To, Character, Negated>;
}

// const source = <
//   From extends string = '',
//   To extends string = '',
//   Escaped extends string = ''
// >(from: From, to: To, escaped: Escaped): LetterRange<From, To, Escaped> => {
//   return new RegExp(`[${from}-${to}]`) as any;
// }

console.log(buildLetterRange('a', 'z', 'dws'));
