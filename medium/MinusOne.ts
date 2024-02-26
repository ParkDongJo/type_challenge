/* _____________ Your Code Here _____________ */
// type GetArray<T, R extends number[] = []> = R["length"] extends T
//   ? R
//   : GetArray<T, [...R, 1]>;

// type MinusOne<T extends number> = [...GetArray<T>] extends [
//   infer _,
//   ...infer Rest extends number[]
// ]
//   ? Rest["length"]
//   : -1;

type MinusOne<T extends number, RESULT extends number[] = []> = 0 extends 1
  ? never
  : [1, ...RESULT]["length"] extends T
  ? RESULT["length"]
  : MinusOne<T, [1, ...RESULT]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];
