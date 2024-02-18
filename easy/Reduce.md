아래의 코드를 해석해보면,

```typescript
type GetArray<T, R extends number[] = []> = R["length"] extends T
  ? R
  : GetArray<T, [...R, 1]>;
```

T와 R을 받는데, 그 이후 조건부가

- R의 길이가
  - T의 값과 같다면 R을 반환
  - T의 값과 같지 않으면 재귀호출하여 T와 같아 질때까지 반복한다.

예를 들어 아래와 같이 사용했다면,

```typescript
type arr = GetArray<3>;
// [1, 1, 1]
```

결과가 될 때까지 재귀적으로 동작한다. 이렇게 만들고 어떻게 활용할 수 있을까?

아래의 Add 연산 타입을 보자

```typescript
type Add<A, B> = B extends number
  ? [...GetArray<A>, ...GetArray<B>]["length"]
  : never;
```

위 Add 함수를 아래와 같이 넘겼을 시

```typescript
type MyAdd = Add<3, 4>;
// [...[1, 1, 1], ...[1, 1, 1, 1]]
// [1, 1, 1, 1, 1, 1, 1, 1]['length'] --> 7
```

길이를 통해, 숫자의 합을 알 수 있다.

이걸 최종적으로 어디서는 활용해볼 수 있다.

Re
