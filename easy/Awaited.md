## 조건부 타입

typescript는 extends 키워드와 삼항연산자를 이용하여, 조건부 타입을 선언할 수 있다.

```typescript
type Age<T> = T extends string ? string : unknown;
let age: Age<string>; //age는 string 타입
let age2: Age<number>; //age는 unknown 타입
```

## infer 키워드

단 위의 조건은 string 에 국한되어 있는데, 입력받은 타입으로 추론을 할 수 있도록 할때 사용한다.
좀 더 쉽게 설명하면, infer 키워드를 통해 입력받은 T를 R 변수에 담아둔다.

```typescript
type Person<T> = T extends infer R ? R : unknown;
type 새타입 = Person<string>; // 새타입은 string 타입입니다
```

사용처는 아래와 같다

- 제네릭 타입을 뽑아내서 타입으로 선언할 때

```typescript
type Person<T> = T extends infer R ? R : unknown;
```

- array 안에 있는 타입을 추출할때

```typescript
type ArrType<T> = T extends (infer R)[] ? R : unknown;
```

- 함수의 return 타입이 어떤 타입인지 추출할 때

```typescript
type ReturnType<T> = T extends () => infer R ? R : unknown;
```

[참고자료]

- https://arc.net/l/quote/xkdjtkmh
- https://arc.net/l/quote/gwvwkizr
