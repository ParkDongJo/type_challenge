Add 를 만드는 내용은 아래 링크에 정리해뒀다.
[참고\_링크]("./../../easy/Add.md)

핵심만 간추리자면, 아래와 같이 할 수 있다.

```typescript
type GetArray<T, R extends number[] = []> = R["length"] extends T
  ? R
  : GetArray<T, [...R, 1]>;
```

MinusOne는 어떻게 구현할 수 있을까?

```typescript
type MinusOne<T extends number, RESULT extends number[] = []> = [
  1,
  ...RESULT
]["length"] extends T
  ? RESULT["length"]
  : MinusOne<T, [1, ...RESULT]>;
```

우선은 제네릭 에 대해 유연하게 생각할 필요가 있다.

```typescript
< ...생략... , RESULT extends number[] = []>
```

이렇게 하면 RESULT는

- 넘어오면, 넘어온 값으로
- 넘어오지 않으면, [] 빈배열로

그리고 다음은 핵심적인 부분이다.

length 속성을 활용하는 기법은 동일하다.

하지만 여기서 응용이 필요하다. 1 만큼 빼면 되는 거니,

아래의 조건부에서 T로 넘어온 숫자와 동일하면 반환 하는 것이다.

```typescript
[1, ...RESULT]["length"] extends T ? 성공 : 실패
```

그리고 실패했을 경우

```typescript
MinusOne<T, [1, ...RESULT]>;
```

위와 같이 재귀로 돌면서, 원하는 RESULT가 될 수 있도록 한다.

여기서 좀 더 살펴볼 점은 앞선 조건부로 아래와 같은 무조건 실패하는 조건을 넣었다.

```typescript
0 extends 1
  ? never
  : 실행
```

타입 챌린지에서는 그 이유를 꼬리 호출 때문이라고 설명했다.
https://github.com/type-challenges/type-challenges/issues/18456

하지만.. 왜 이게 꼬리가 호출이 되는지는
[announcing-typescript-4-5-beta]("https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#tailrec-conditional")

해당 문서에서 확인할 수 있다. 하지만....
내용이.. 너무 어렵다..

난! 이 기법에 대해서는 여기까진 파고들지 않는다!
