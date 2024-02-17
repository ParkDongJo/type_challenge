# Lookup Type

이름을 통해 어떤 타입의 프로퍼티에 접근할 수 있게 해줍니다. 이 동작은 객체에서 키를 이용하여 값을 얻어오는 과정과 비슷합니다.

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
}
type K1 = keyof Person; // "name" | "age" | "location"
```

# Mapped Type

타입의 각 프로퍼티들을 새로운 타입으로 변환해 줄 수 있다.

맵드 타입은 위에서 살펴본 자바스크립트의 map 함수를 타입에 적용했다고 보면 된다. 이를 위해서는 아래와 같은 형태의 문법을 사용해야 한다.

```typescript
{ [ P in K ] : T }
{ [ P in K ]? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ]? : T }
```

유니온 K를 받아와 K의 각 원소를 순회하며 K로만 구성된 키를 가지도록 하는 새로운 타입을 만들어 줘보자

```typescript
type Pick<T, UNION> = {
  [KEY in UNION]: T[KEY];
};
```

위와 같이 하면 아래와 같이 사용 가능해진다.

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
}

type JUST_PERSON = Pick<Person, "name" | "age">;
```

다만 UNION에 대한 타입 명시가 더 되어야하는데, 아래와 같이 T의 key 중에 하나라는걸 명시해준다.

```typescript
type Pick<T, UNION extends keyof T>
```
