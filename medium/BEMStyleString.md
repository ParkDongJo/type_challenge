배열의 요소를 빼내는 방법은 아래와 같이 인덱스를 number 로 넘기면 된다.

```typescript
type getElement<T extends string[]> ? T[number];
```

또한 빈배열을 체크하는 방법은 아래와 같이 체크할 수 있다.

```typescript
type IsEmptyArr<T extends string[]> = T extends [] ? true : false;
```
