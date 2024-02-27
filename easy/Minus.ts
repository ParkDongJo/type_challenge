type Minus<A extends number, B extends number> = 
  `${A}` extends `-${B}` ? 0 : 1 : 

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Minus<6, 4>, 2>>,
  Expect<Equal<Minus<4, 3>, 1>>,
  Expect<Equal<Minus<3, 4>, -1>>
];
