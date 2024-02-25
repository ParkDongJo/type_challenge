문자열은 배열처럼 ["length"] 로 가지고 올 수 없다.
이때 Add 처럼 [] 배열에 1씩 갯수 만큼 추가 시켜서 ["length"]를 세는 방법으로 해야한다.

먼저 문자열을 배열로 만드는 타입을 정의해보자.

```typescript
type StrToArray<S> = S extends `${infer _}${infer Rest}`
  ? [1, ...StrToArray<Rest>]
  : [];

type strArr = StrToArray<"test">;
// [1, 1, 1, 1]
```

로 만들어 올 수 있다.
이렇게 만든 배열을 바로 ["length"] 로 길이를 셀 수 있다.

```typescript
type LengthOfString<S extends string> = StrToArray<S>["length"];
```
