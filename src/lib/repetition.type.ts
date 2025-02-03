/**
 * @description The type represents the repetition of a pattern with an optional `Min` and `Max` value for repetitions. 
 * This allows defining how many times a character (or a pattern) should appear, where the quantity can be either exact or a range.
 * If both `Min` and `Max` are empty, no repetition is applied.
 * If only `Max` is provided, the pattern can repeat up to that number of times. 
 * If both `Min` and `Max` are provided, it specifies a range of allowed repetitions.
 * @example
 * type ZeroOrMore = Repetition<'*'>; // Output: "*"
 * type OneOrMore = Repetition<'+'>; // Output: "+"
 * type ZeroOrOne = Repetition<'?'>; // Output: "?"
 * type ExactlyThree = Repetition<3>; // Output: "{3}"
 * type TwoToFourTimes = Repetition<2, 4>; // Output: "{2,4}"
 * type AtLeastFive = Repetition<5, ''>; // Output: "{5,}"
 * @export
 * @template {number | ''} [Min=''] - The minimum number of repetitions (optional).
 * @template {number | ''} [Max=''] - The maximum number of repetitions (optional).
 */
export type Repetition<
  Min extends number | '' | '*' | '+' | '?' = '',
  Max extends number | '' = ''
> = Min extends '*'
  ? '*' // Matches 0 or more times
  : Min extends '+'
  ? '+' // Matches 1 or more times
  : Min extends '?'
  ? '?' // Matches 0 or 1 time
  : Min extends ''
  ? (Max extends '' ? '' : `{,${Max}}`) // When only Max is set
  : (Max extends '' ? `{${Min},}` : `{${Min},${Max}}`);
