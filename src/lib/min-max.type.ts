/**
 * @description
 * @example
 * type ExactlyThree = MinMax<3>; // Output: "{3}"
 * type TwoToFourTimes = MinMax<2, 4>; // Output: "{2,4}"
 * type AtLeastFive = MinMax<5, ''>; // Output: "{5,}"
 * type MaxFive = MinMax<'', 5>; // Output: "{0,5}"
 * @export
 * @template {number | string | ''} [Min=''] - The minimum number (optional).
 * @template {number | ''} [Max=''] - The maximum number (optional).
 */
export type MinMax<
  Min extends string | number | '' = '',
  Max extends number | '' = ''
> = Min extends ''
  ? (Max extends '' ? '' : `{0,${Max}}`)
  : (Max extends '' ? `{${Min},}` : `{${Min},${Max}}`);

