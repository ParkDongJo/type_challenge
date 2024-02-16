unknown 은 어떤 키워드이며, 언제 사용하는것이 적절할까?

![Alt text](../imgs/image.png)

unknown 타입은 any를 제외한 다른 타입에 할당할 수 없다.

```typescript
let varr: unknown;
let booleanType: boolean = varr;
// error boolean 타입에는 unknown 타입을 할당할 수 없어요

let bool: boolean = true;
let unkw: unknown = bool;
// 반대로 unknown 타입에 boolean 타입을 할당하는 건 할 수 있습니다.
```

any 타입은 never를 제외한 모든 타입에 할당하는 것이 가능하다.

```typescript
let anyValue: any;
let hi: boolean = anyValue;

const anytype: any = true;
const hi: string = anytype;
hi.toUpperCase();
```

[참고자료] https://xionwcfm.tistory.com/394
