import { MultiLetterRange } from "../lib/multi-letter-range.type";

const multiRange: MultiLetterRange<[['a', 'z', 1, 2], ['A', 'Z', 2, 5]]> = '[a-z]{1,2}[A-Z]{2,5}';
