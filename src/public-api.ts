/*
 * Public API Surface of regexp
 */

export type {
  Escaped,
  EscapedArray,
  EscapedString,
  FromTo,
  NonCapturingRepetition,
  Quantifier,
  Range,
  RegExpPattern,
  Repetition,

  // Character.
  CharacterRange,
  CharacterRangeRepetition,

  // Flag.
  AppendFlag,
  FlagString,
  IncludeFlag,
  IncludeFlags,
  PrependFlag,
  RegExpFlag,
  RemoveFlag,

  // LetterRange
  LetterRange,
  LetterRangeExclusion,
  LetterRangeRepetition,
  LetterRangeRepetitionPattern,
  LetterRangeTuple,

  // Lowercase
  LowercaseLetterRange,
  LowercaseLetterRangePattern,

  // MultiLetter
  MultiLetterRange,
  MultiLetterRangeRepetition,

  // UpperLetter
  UppercaseLetterRange,
  UppercaseLetterRangePattern,
} from './lib';
