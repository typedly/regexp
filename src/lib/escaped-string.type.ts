/**
 * @description The type to build the regexp escaped characters of
 * 'd', 'D', 'w', 'W', 's', 'S', '+', '?', '^', '$', '(' , ')', '[', ']', '|', '{', '}' 
 * from string.
 * @example
 * For example, using `EscapedFromString<'d+w'>` will produce the literal string `"\\d\\+\\w"`.
 * @export
 * @template {string} Character 
 */
export type EscapedString<
  Character extends string = ''
> = Character extends `${infer First}${infer Rest}`
  ? First extends '*'
    ? `\\*${EscapedString<Rest>}` : First extends 'd'
    ? `\\d${EscapedString<Rest>}` : First extends 'D'
    ? `\\D${EscapedString<Rest>}` : First extends 'w'
    ? `\\w${EscapedString<Rest>}` : First extends 'W'
    ? `\\W${EscapedString<Rest>}` : First extends 's'
    ? `\\s${EscapedString<Rest>}` : First extends 'S'
    ? `\\S${EscapedString<Rest>}` : First extends '+'
    ? `\\+${EscapedString<Rest>}` : First extends '?'
    ? `\\?${EscapedString<Rest>}` : First extends '^'
    ? `\\^${EscapedString<Rest>}` : First extends '$'
    ? `\\$${EscapedString<Rest>}` : First extends '('
    ? `\\(${EscapedString<Rest>}` : First extends ')'
    ? `\\)${EscapedString<Rest>}` : First extends '['
    ? `\\[${EscapedString<Rest>}` : First extends ']'
    ? `\\]${EscapedString<Rest>}` : First extends '|'
    ? `\\|${EscapedString<Rest>}` : First extends '{'
    ? `\\{${EscapedString<Rest>}` : First extends '}'
    ? `\\}${EscapedString<Rest>}` : First
  : '';
