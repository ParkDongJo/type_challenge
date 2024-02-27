Omit 을 만드는 간단한 방법은 아래 링크에 이미 정리를 해놨다.
[omit 설명]("../docs/omit_exclude.md")

여기 문서에서는 typescript 에서 제공되는 Pick, Exclude 를 사용하지 않고 Omit을 만들 방법을 정리해보자

여기서 알아야 할 점은 만약 key 가 never 로 할당되면 객체 내에서 컴파일 시 무시가 된다는 점이다.
아래와 같을 때 말이다.

```typescript
{
    [never]: T[P]
}
```

위와 같은 상황은 무조건 **{ key: value }** 로 무시된다.

또한 객체(T) 안에 K가 포함되어 있는지에 대한 조건부를 아래와 같이 작성할 수 있다.

```typescript
key in keyof T as key extends K 
    ? never
    : key
```

여기서 눈여겨 볼 점은 바로 **as** 키워드의 활용이다.
매핑된 타입의 AS 절을 사용하여 매핑된 타입의 키를 다시 매핑할 수 있다고 한다.
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

왜 이렇게 할까?

위의 구문의 목적은 조건부 활용이다!

모든 키를 순회하는 과정에서 필요하지 않은 키에 대해서는 필터링을 하고 싶기 때문이다.
그러기 위해서는 

T의 모든 프로퍼티를 매핑하면서 
- 프로퍼티가 K 유니온에 속할 경우 -> 키의 타입이 never를 반환
- 프로퍼티가 K 유니온에 속하지 않을 경우 -> key 를 그대로 반환

  이를 위해 “as” 문법을 사용한 키 리매핑을 할 수 있다.

위 문법은 바로 **as**를 통해 **키 리맵핑** 기법이다.
