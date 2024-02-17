/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...unknown: infer R
) => unknown
  ? R
  : unknown;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: "A" }): void {}
function baz(): void {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

type Params<T extends (arg: any) => any> = T extends (
  unknown: infer R
) => unknown
  ? R
  : unknown;

function test(arg: string): void {}
function test2(arg: number): void {}

type cases2 = [
  Expect<Equal<Params<typeof test>, string>>,
  Expect<Equal<Params<typeof test2>, number>>
];
