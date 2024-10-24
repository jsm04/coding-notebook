/* _____________ Your Code Here _____________ */

type MyOmit<T, K extends keyof T> = {
    [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop]
}

/*
  3 - Omit
  -------
  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```
*/
