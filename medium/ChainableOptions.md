typescript 로 type을 정의하는 것만으로도 객체의 쓰임새를 정할 수 있다.

```typescript
type Object<T = {}> = {
  option: (key: string, value: unknow) => T;
  get(): T;
};
```

이렇게 정의하는 것만으로도

```typescript
declare const a: Object;

const newObj = a.option("foo", 123).get();
// {}
```

위와 같이 사용이 가능하다. 단 연산 코드 없이 타입정의만으로 가능하려면, chain 으로 엮여 있어야 한다.
함수마다 매번 리턴을 해줘야한다.

이때 중요한 점이 있다.

객체 전체에 사용가능한 제네릭 타입을 미리 정의해놓는게 필요하다.

```typescript
type Object<T = {}> = {};
```

그리고 이렇게 정의해놓은 객체 타입은 아래와 같이 declare 키워드로 선언할 수 있다.

```typescript
declare const o: Object;
```

그리해서, 최종적으로 아래와 같이 기존에 배운 지식을 활용하여 만들어 봤지만,

```typescript
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => {
    [P in keyof T | K]: P extends keyof T ? T[P] : V;
  };
  get(): T;
};
```

위의 option로 넘겨주는 타입이 Chainable이 아니니 그다음 option, get을 계속 호출할 수 없다.
option() 은 다음과 같이 개선한다.

```typescript
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  ...
};


```

위와 같이 Chainable 을 다시 return 하는 식으로 정의한다.
기존의 key 값이 있을 시, value를 변경하는 사항을 고려해서

- T에서는 K를 제외시키고
- K,V 를 갖는 새로운 객체를

함께 묶는다. 이런 정의가 바로 아래와 같은 정의이다.

```typescript
Chainable<Omit<T, K> & Record<K, V>>;
```
