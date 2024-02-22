# Record

속성 키가 Keys이고 속성 값이 Type인 객체 유형을 생성한다.
이 유틸리티는 한 타입의 프로퍼티를 다른 타입에 매핑하는 데 사용할 수 있다.

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

type Cat = Record<CatName, CatInfo>;
```
