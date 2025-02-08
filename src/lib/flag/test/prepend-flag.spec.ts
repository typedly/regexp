import { PrependFlag } from "../lib";

// Case 1: Adding a flag that is not in the list
type Example1 = PrependFlag<[], 'g'>; // Result: ['g']

type Example2 = PrependFlag<['i'], 'm'>; // Result: ['m', 'i']

type Example3 = PrependFlag<['g', 'i'], 's'>; // Result: ["s", "g", "i"]

// Case 2: Adding a flag that is already present (should return the same list)
type Example4 = PrependFlag<['g', 'i'], 'i'>; // Result: ['g', 'i'] (unchanged)

type Example5 = PrependFlag<['m', 'u', 'y'], 'y'>; // Result: ['m', 'u', 'y'] (unchanged)

// Case 3: Adding multiple flags sequentially
type Example6 = PrependFlag<PrependFlag<['g'], 'i'>, 'm'>; // Result: ['m', 'i', 'g']
