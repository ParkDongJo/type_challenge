# Omit 과 Exclude의 차이점

면접에서 Omit과 Exclude 에 대한 차이점을 질문 받은 적이 있다.
그당시만 해도 Exclude 를 사용해본적이 없었다.

그래서 Pick 과 Omit 에 대한 사용법을 대신 이야기 했는데, 이번에 확실히 정리해보자

우선 직관적인 공식을 세워보면 아래와 같다

```
Exclude <- Union(유니언) 타입에서 특정 타입을 제거
Pick <- Interface(객체) 타입에서 특정 타입만 남겨놓음
Omit <- Interface(객체) 타입에서 특정 타입을 제거
```

Omit은 Pick 과 Exclude 의 조합을 통해 구현할 수 있다.

```typescript
Pick<T, Exclude<keyof T, 'a' | 'b'>>

```

위와 같이 interface 는 keyof 를 통해 key 들을 Union 타입으로 변경할 수 있다.
그래서 아래와 같은 조합으로 Omit을 완성할 수 있다.

```typescript

type Omit<T, K extends string | number | symbol> = Pick<T, Exclude<keyof T, K>> 

```