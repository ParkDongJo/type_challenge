T가 유니온일 때 T extends U와 같은 구조를 사용하면, Typescript는 유니온 T를 순회하면서 각 원소들을 주어진 조건을 확인한다.
즉 예를들어서 아래와 같이 제네릭으로 유니온타입을 넘겼을 시

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;
```

a, b, c 유니온 타입을 순회하면서, U제네릭으로 들어온, a 와 조건을 비교하게끔 작성할 수 있다. 아래와 같이

```typescript
type MyExclude<T, U> = T extends U ? never : T;
```
