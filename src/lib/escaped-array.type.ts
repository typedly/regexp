// Type.
import { EscapedString } from "./escaped-string.type";
/**
 * @description
 * @export
 * @template {string[]} Characters 
 * type Test1 = EscapedArray<['d+', '*', 'W']>;
 * // Expected: ["\\d\\+", "\\*", "\\W"]
 * // const test1: Test1 = ["\\d\\+", "\\*", "\\W"];
 */
export type EscapedArray<Characters extends string[]> = {
  [Index in keyof Characters]: EscapedString<Characters[Index]>;
};

