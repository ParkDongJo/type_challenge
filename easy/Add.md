Add.ts 에 있는 Add 타입을 활용해서 Reduce 를 만들어보자.

Reduce 는 일단 배열을 인자로 받는다.

```typescript
  type Reduce<T extends number[]>
```

조건부에 의해 반환타입을 정해보자

T에 의해 H와, Rest 로 나뉘어 질 수 있는지 체크한다.

- 나뉘어 질수 있으면 -> A
- 나뉘어 질수 없으면 -> B

여기서 H와 Rest 는 T를 통해 할당될 수 있다.

```typescript
T extends [
  infer H,
  ...infer Rest extends number[]
]
? A
: B

```

즉 A 에 Add를 넣어줄 수 있다.

```typescript
 ? Add<H, Reduce<Rest>>
```

이때 눈여겨 볼 점은 Add 의 두번째 인자로 Reduce 를 넘겨주는데,

Add<A, B> 의 A, B는 number 타입만 가능하다. B에 들어가는 Reduce를 넘겨주면, 재귀적인 연산을 통해서 아래와 같이 내부적으로 될것이다.

```typescript
 ? Add<H, Add<H2, Add<H3, Add<H4, 0>>>>
```

후우.. 증말.. 타입스크립트 쉽지 않네 ㅋㅋ
