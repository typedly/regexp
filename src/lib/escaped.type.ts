/**
 * @description The type to build the regexp escaped characters of
 * 'd', 'D', 'w', 'W', 's', 'S', '+', '?', '^', '$', '(' , ')', '[', ']', '|', '{', '}'
 * @example
 * For example, using `Escaped<'d+w'>` will produce the literal string `"\\d\\+\\w"`.
 * @export
 * @template {string} Character 
 */
export type Escaped<
  Character extends string = ''
> = Character extends `${infer First}${infer Rest}`
  ? First extends '*'
    ? `\\*${Escaped<Rest>}`
    : First extends 'd'
    ? `\\d${Escaped<Rest>}`
    : First extends 'D'
    ? `\\D${Escaped<Rest>}`
    : First extends 'w'
    ? `\\w${Escaped<Rest>}`
    : First extends 'W'
    ? `\\W${Escaped<Rest>}`
    : First extends 's'
    ? `\\s${Escaped<Rest>}`
    : First extends 'S'
    ? `\\S${Escaped<Rest>}`
    : First extends '+'
    ? `\\+${Escaped<Rest>}`
    : First extends '?'
    ? `\\?${Escaped<Rest>}`
    : First extends '^'
    ? `\\^${Escaped<Rest>}`
    : First extends '$'
    ? `\\$${Escaped<Rest>}`
    : First extends '('
    ? `\\(${Escaped<Rest>}`
    : First extends ')'
    ? `\\)${Escaped<Rest>}`
    : First extends '['
    ? `\\[${Escaped<Rest>}`
    : First extends ']'
    ? `\\]${Escaped<Rest>}`
    : First extends '|'
    ? `\\|${Escaped<Rest>}`
    : First extends '{'
    ? `\\{${Escaped<Rest>}`
    : First extends '}'
    ? `\\}${Escaped<Rest>}`
    : never
  : '';
