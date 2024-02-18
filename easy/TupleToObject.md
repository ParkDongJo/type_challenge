튜플을 오브젝트 형태로 변환하는 문제이다.

오브젝트 형태를 타입으로 정의하면 아래와 같다.

```typescript
  {
    [V: number | string]: V;
  }
```

넘어오는 제네릭 타입으로 시작해서 오브젝트 형태를 만든다.

```typescript
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
```
