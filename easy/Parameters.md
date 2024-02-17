타입 정의 시 제네릭으로 넘어온 파라미터를 연산처리를 따로 할 수 있다.

우선 간단한 아래의 내용을 보자.

```typescript
type Params<T extends (arg: any) => any> = T extends (any: infer R) => any
  ? R
  : unknown;
```

위와 같이 정의를 풀이해보면

Params<T>는 T라는 함수 타입이 주어졌을 때, 해당 함수의 매개변수 타입을 R로 추출하여 반환하며,

만약 추출할 수 없는 경우에는 unknown을 반환한다.

```typescript
function test(arg: string): void {}

type cases2 = [Expect<Equal<Params<typeof test>, string>>];
```
