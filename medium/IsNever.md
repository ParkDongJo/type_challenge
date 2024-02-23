never 에 대해 좀 더 깊게 알 수 있는 예제이다.

```typescript
type IsNever<T> = T extends never ? true : false;
```

이렇게 하면
IsNever<never> 가 true 가 될거 같지만

```typescript
IsNever<never>; // TS error
```

TS 오류가 뜬다. 이유는 해당 Issue 에서 살펴볼수 있다.
[이슈링크](https://github.com/type-challenges/type-challenges/issues/614)

가볍게 축약해보면, never는 아래와 같이 사용했을시

```typescript
type t = never | "a" | "b";
```

'a' | 'b' 로만 남든다고 한다. 그래서 우회하는 방법으로 [], {} 배열이나 튜플로 감싸서 표현을 하는 것이다.
