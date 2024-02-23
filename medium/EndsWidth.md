배열 또는 문자열을 분해하고 다시 재조합하는데는 infer 키워드를 적극적으로 활용할때,
JavaScript 에서 \_를 사용하여 변수를 무시하는 것과 유사하게 사용할 수 있다.

```typescript
type Str<T extends string, U extends string> = T extends `${infer _}${U}`
  ? U
  : never;
```
