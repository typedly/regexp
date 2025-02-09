/**
 * @description
 * @export
 * @template {string | number} [From=''] 
 * @template {string | number} [To=''] 
 * @template {boolean} [Negated=false] 
 * @template {string} [Delimiter='-'] 
 */
export type FromTo<
  From extends string | number = '',
  To extends string | number = '',
  Negated extends boolean = false,
  Delimiter extends string = '-'
> = `${Negated extends true ? '^' : ''}${From}${From extends '' ? '' : To extends '' ? '' : Delimiter}${To}`;
