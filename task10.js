import { composition } from "./math/composition.js";
import { division } from "./math/division.js";
import { multiplication } from "./math/multiplication.js";
import { substraction } from "./math/subtraction.js";
import { one, two, three, four, five } from "./math/numbers.js";

const a = composition(one, four);
const b = division(four, two);
const c = substraction(three, two);
const d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
