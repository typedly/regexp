// Type.
import { LetterRange } from '../..';
import { AlphabeticLetter } from "@typedly/letter";


function buildLetterRange<
  From extends AlphabeticLetter = 'a',
  To extends AlphabeticLetter = 'z',
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

console.log(buildLetterRange('a', 'z', 'dws'));
