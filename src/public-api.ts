/*
 * Public API Surface of regexp
 */

export type {
  Escaped,
  RegExpFlags,

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
