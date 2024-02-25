/* _____________ Your Code Here _____________ */

type StrToArray<S> = S extends `${infer _}${infer Rest}`
  ? [1, ...StrToArray<Rest>]
  : [];
type LengthOfString<S extends string> = StrToArray<S>["length"];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
