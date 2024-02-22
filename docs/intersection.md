### Intersection 타입

#### 리터럴 타입에서

교집합이다. & 를 사용하고 AND 연산자라고 보면 된다. 아래와 같이 사용된다.

```ts
type FavoriteSport = "swimming" | "football";
type BallSport = "football" | "baseball";

type FavoriteBallSport = FavoriteSport & BallSport; // 'football'

type FavoriteSport = "swimming" | "ski";
type BallSport = "football" | "baseball";

type FavoriteBallSport = FavoriteSport & BallSport; // never
```

#### 객체 타입에서

인터섹션 타입(Intersection Type)은 여러 타입을 모두 만족하는 하나의 타입을 의미한다.

```typescript
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;
```

```
{
  name: string;
  age: number;
  skill: string;
}
```
