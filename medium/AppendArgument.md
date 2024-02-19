함수와 데이터를 파라미터로 받아서, 함수에 파라미터로 받은 데이터를 파라미터로 추가해주는 함수 타입을 정의해보자

일단 여기서도 계속 활용되는 건 infer 키워드이다. 아래를 보자.

```typescript
type Func<Fn, A> = Fn extends (...args: infer R) => infer T

```

두 군데에 infer 이 사용되었다. infer 는 제네릭 타입으로 받는 걸 저장해두는 형태로 사용되는데, Fn 을 두개의 infer 로 두었다 이렇게 되면, 아래와 같이 해석이 가능하다.

Fn 으로 아래의 함수를 넘겼을 시

```typescript
type Case = (a: number, b: string) => number;
type func = Func<Case, boolean>;
```

infer R 은 (a: number, b: string) 이 두 파라미터를 저장하게 되고,
infer T 는 => number; 반환타입을 저장하게 된다.

즉 여기서 배울점은 infer 이라는 키워드는 꼭! 1개의 타입만 저장하는것이 아니라, 제네릭 타입을 통해서 저장해둘 수 있는 타입을 여러개 둘 수 있다는 것이다.

이제 조건부로 완성을 해보면 아래와 같다.

```typescript
  ? (...args: [...R, A]) => T
  : never;
```

infer로 저장해둔 타입들과 파라미터로 받은 A 타입을 적절하게 배치해주면 되는 것이다.
