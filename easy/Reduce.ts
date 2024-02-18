/* _____________ Your Code Here _____________ */

type GetArray<T, R extends number[] = []> = R["length"] extends T
  ? R
  : GetArray<T, [...R, 1]>;

type Add<A, B> = B extends number
  ? [...GetArray<A>, ...GetArray<B>]["length"]
  : never;

type Reduce<T extends number[]> = T extends [
  infer H,
  ...infer Rest extends number[]
]
  ? H extends number
    ? Add<H, Reduce<Rest>>
    : never
  : 0;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Reduce<[1, 2, 3]>, 6>>,
  Expect<Equal<Reduce<[2, 3, 4]>, 9>>,
  Expect<Equal<Reduce<[0]>, 0>>,
  Expect<Equal<Reduce<[]>, 0>>
];
