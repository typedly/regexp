/*
 * Public API Surface of regexp
 */

export type {
  Escaped,

  // Flag.
  Flag,
  RegExpFlag,
  IncludeFlag,
  PatternFlag,

  // Repetition.
  Repetition,

  // LetterRange
  LetterRangeExclusion,
  LetterRangeRepetitionPattern,
  LetterRangeRepetition,
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
