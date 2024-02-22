# Omit

유형에서 모든 속성을 선택한 다음 키를 제거하여 유형을 구성한다. **Pick** 반대다.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```
