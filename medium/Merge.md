여기서 알아야 할 것이 두가지가 있다.
첫째 조건부를 통해 가공된 Object를 반환할 수 있다.

```typescript
type Merge<F, S> = {
  [K in keyof F | keyof S]: F[K] | S[K];
};
```

이렇게 하면 될거 같지만, 안된다.

이유는 아래와 같다.

K는 유니온 타입

```typescript
keyof F | keyof S
```

의 키이기 때문에 F[K] 이렇게 F의 K로 직접적으로 넣을 수가 없다.

```typescript
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
};
```

위와 같이 조건부를 넣어서 K를 넣는건 훨씬 나은 방법이다.

하지만 이것도 부족한 점이 있다.

F[K] 에 아래와 같은 에러가 뜬다.

**'K' 형식을 인덱스 형식 'F'에 사용할 수 없습니다.**

이미 K는

```typescript
K extends keyof S
```

이 조건부를 통해서 이미 S 일때만 사용할 수 있는 타입이 되어 버렸다.

그래서 아래와 같이 조건부를 더 넣어줘야하는 것이다.

```typescript
type Merge<F extends Object, S extends Object> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};
```

그리고 한가지 더 짚고 넘어가야할 점은

- keyof
- in keyof

의 차이점을 명확히 아는 것이다.
