import { RemoveFlag } from "../lib";

type Example1 = RemoveFlag<["m", "i", "g"], 'g'>; // ["m", "i"]
type Example2 = RemoveFlag<["m", "i", "g"], 'm'>; // ["i", "g"]
type Example3 = RemoveFlag<["m", "i", "g"], 'i'>; // ["m", "g"]
