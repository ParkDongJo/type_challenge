### union 타입

#### 리터럴 타입에서

Union은 합집합이다. | 로 구분하는데 OR 연산자라고 보면 된다. 아래와 같이 사용한다.

```ts
type Marvel = "IronMan" | "Hulk";
type Dc = "BatMan" | "SuperMan";
```

#### 객체 타입에서

타입스크립트 관점에서는 `introduce()` 함수를 호출하는 시점에 `Person` 타입이 올지 `Developer` 타입이 올지 알 수가 없기 때문에 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 된다.

```typescript
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```
