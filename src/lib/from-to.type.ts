/**
 * @description
 * @export
 * @template {string | number} From 
 * @template {string | number} To 
 */
export type FromTo<
  From extends string | number = '',
  To extends string | number = ''
> = `${From}${From extends '' ? '' : To extends '' ? '' : '-'}${To}`;
