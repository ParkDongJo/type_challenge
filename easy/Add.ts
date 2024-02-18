/* _____________ Your Code Here _____________ */

type GetArray<T, R extends number[] = []> = R["length"] extends T
  ? R
  : GetArray<T, [...R, 1]>;

type Add<A, B> = B extends number
  ? [...GetArray<A>, ...GetArray<B>]["length"]
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<GetArray<4>, [1, 1, 1, 1]>>,
  Expect<Equal<Add<3, 4>, 7>>
];
