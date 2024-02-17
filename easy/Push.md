마치 자바스크립트 구조분해로 타입을 새로 정의 할 수 있다. 아래와 같이

```typescript
type Push<T extends unknown[], U> = [...T, U];
```
