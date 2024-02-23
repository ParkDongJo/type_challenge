배열 또는 문자열을 분해하고 다시 재조합하는데는 infer 키워드를 적극적으로 활용하면 좋다.
이때 Conditional Type(조건부 타입)을 함께 활용한다.

```typescript
type Str<S, C> = S extends `${infer L}${infer R}` ? `${L}${R}` : "";
```

조건을 만족을 했을 시 원하는 재조합을 할 수 있다.

```typescript
`-${L}${DropChar<R, C>}`;
```

위와 같이 재조합을 할 수 있다.
