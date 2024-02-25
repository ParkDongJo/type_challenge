keyof 의 사용사례 정리

## keyof

객체의 속성 이름을 UNION 타입인 key들로 타입을 정의하는데 사용된다.

```typescript
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // "age" | "name"
```

## extends keyof

제네릭 타입 T(임의의 타입)이 객체이고 여기에 포함된 속성 이름을 K로 뽑아서
속성 타입을 조건부를 통해 K로 재정의하여 사용할 때,

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  age: 22,
  name: "Tobias",
};

// name is a property of person
// --> no error
const name = getProperty(person, "name");

// gender is not a property of person
// --> error
const gender = getProperty(person, "gender");
```

## in keyof

먼저 in 은 명시된 속성에 객체명에 존재하면 true 를 반환한다.
근데 여기서, keyof 와 함께 사용했기 때문에, UNION 에서 in 을 통해 속성이 있는지 체크하는 것이다.
[in에 대한 설명]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in")

이 둘을 조합하여 K의 존재가 true 이면 K를 이후에 활용할 수 있다.

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

const person: Optional<Person> = {
  name: "Tobias",
  // notice how I do not have to specify an age,
  // since age's type is now mapped from 'number' to 'number?'
  // and therefore becomes optional
};
```

## keyof typeof

typeof 는 선언된 객체를 객체의 타입으로 사용하기 위해 쓰는 키워드이다.
그래서 keyof 와 함께 활용하면, 위에서 살펴본

keyof T 와 동일한 효과를 낸다.

```typescript
enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// 객체를 타입으로 사용하기 위해선 typeof 와 keyof 파라미터를 사용해야 한다
type Direction = (typeof ODirection)[keyof typeof ODirection];
```

https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean

https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95
