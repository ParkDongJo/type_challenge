/* _____________ Your Code Here _____________ */

// type MyOmit<T, K extends string | number | symbol> = Pick<T, Exclude<keyof T, K>>

// type MyOmit<T, K extends keyof T> = {
//     [key in Exclude<keyof T, K>]: T[key]
// }

type MyOmit<T, K extends keyof T> = {
    [
        key in keyof T as key extends K
            ? never
            : key
    ] : T[key]
}



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}