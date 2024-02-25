배열의 인덱스를 통해 배열의 요소를 뽑는 타입을 만들때, 아래와 같이 인덱스를 활용하면 된다.

```typescript
type Array<T extends unknown[]> = T[0];
type Array<T extends unknown[]> = T[1];
type Array<T extends unknown[]> = T[2];
```

그러면 배열의 마지막 요소를 뽑는데는 마지막 인덱스에 대한 표현을 어떻게 하면 될까?

```typescript
type Array<T extends unknown[]> = T[T["length"] - 1]

```

이렇게 하면 될것 같지만, typescript에서는 - + 이런 연산이 불가능하다.
그래서 아래와 같이 unknown 값을 배열에 넣고 length 를 넣어준다.

```typescript
type Last<T extends unknown[]> = [unknown, ...T][T["length"]];
```
