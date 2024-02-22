/* _____________ Your Code Here _____________ */

type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

// 내가 응용해서 푼 코드
// 하지만 이 코드는 option로 넘겨주는 타입이 Chainable이 아니니 그다음 option, get을 계속 사용할 수 없다.
// type Chainable<T = {}> = {
//   option: <K extends string, V>(
//     key: K,
//     value: V
//   ) => {
//     [P in keyof T | K]: P extends keyof T ? T[P] : V;
//   };
//   get(): T;
// };

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from "@type-challenges/utils";

declare const a: Chainable;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

const result2 = a
  .option("name", "another name")
  .option("name", "last name")
  .get();

const result3 = a.option("name", "another name").option("name", 123).get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

type Expected3 = {
  name: number;
};
