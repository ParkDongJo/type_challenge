typescript 에는 Uppercase 라는 타입이 있다. 대문자로 변환하는 타입이다.
[참고자료](https://www.geeksforgeeks.org/typescript-uppercase-template-literal-type/)

```typescript
type T = "test";
type geek = Uppercase<T>;

// TEST
```

그리고 마찬가지로 infer 키워드를 통해서 string도 array처럼 분할하여 정의할 수 있다.
하지만 여기서 string은 array 와 차이가 있다.

array 는 아래와 같이 분해가 ... 분해할당 연산으로 정의해준다.

```typescript
type Array<T extends number[]> = T extends [
  infer First,
  ...infer Rest extends number[]
]
```

하지만 string은 아래와 같이 그냥 나눠주면 된다.

```typescript
type String<T extends string> = S extends `${infer First}${infer Rest}`

```

다만 여기서도 살펴볼 것이 있다. 만약 2번째 인자도 뽑겠다고 한다면 어떻게 하면 될까?

```typescript
type String<T extends string> = S extends `${infer First}${infer Second}${infer Rest}`

```

위와 같이 하면

First 에는 string[0] 가 저장되고
Second 에는 string[1] 가 저장된다
Rest 는 ...string[] 이 저장될 것이다.
