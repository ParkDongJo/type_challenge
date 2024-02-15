T, U를 제네릭으로 받아서 스프레드 연산자로 합칠수 있다.

```typescript
type Concat<T, U> = [...T, ...U];
```

하지만 이렇게 되면, **"A rest element type must be an array type."** 타입 에러가 뜬다.
이를 위해서, 아래와 같이 넘어오는 제네릭이 배열 타입이라고 알려준다.

```typescript
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

하지만 이 경우 아래 케이스에 대해서는, **'readonly [1]' 형식이 'unknown[]' 제약 조건을 만족하지 않습니다. 'readonly [1]' 형식은 'readonly'이며 변경 가능한 형식 'unknown[]'에 할당할 수 없습니다** 에러가 뜬다.

```typescript
const tuple = [1] as const;
Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
```

tuple 타입을 const 로 선언했기 때문에, 이는 암묵적으로 readolny 이다. 그래서 제네릭 타입 T, U 를 readonly로 선언해준다.
아래와 같이 Tupple 을 따로 readonly로 지정해주고, extends 로 상속시켜준다.

```typescript
type Tuple = readonly unknown[];
type Concat<T extends unknown[], U extends Tuple> = [...T, ...U];
```
