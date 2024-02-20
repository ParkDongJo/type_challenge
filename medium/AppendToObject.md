Object를 타입스크립트로 정의하는 방식은 아래와 같다.

```typescript
type Object<T extends { [key: string]: unknown }> = T;
```

여기서 문제는 Object에 새로운 key, value 를 추가하는 문제이다.
이때,

key -> U
value -> V

로 받는 형태이다.

```typescript
type Object<T extends { [key: string]: unknown }, U, V> = {
  ...T,
  [U]: K,
};
```

위와 같이 하면 Object 는 분해할당이 typescript 에서는 안된다.

```typescript
type Object<T extends { [key: string]: unknown }, U extends keyof any, V> = {
  [K in keyof T]: T[K];
};
```

이렇게 하면 가능하다. 이제 여기서 U, K 가 문제인데, 아래와 같이 할 수 있다.

```typescript
{
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
}
```

즉 조건부를 통해 적절한 value 를 리턴해줄 수 있다.
여기서 배울건

| <-- Intersection 타입을 통해

T의 key 와 U가 함께 사용 가능한 타입임을 명시해줄수 있다.

그리고 아래의 조건부도 가능한것이다.

```typescript
K extends keyof T ? T[K] : V;
```

앞으로 keyof 키워드를 잘 사용해보자
