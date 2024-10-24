// given type
type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true
    :   false

/* _____________ Your Code Here _____________ */

// type GetReadonlyKeys<T extends object, U extends keyof T = keyof T> = U extends any ? Equal<Pick<T, U>, Readonly<Pick<T, U>>> extends true ? U : never : never

type GetReadonlyKeys<T extends object, U extends keyof T = keyof T> =
    U extends any ?
        Equal<Pick<T, U>, Readonly<Pick<T, U>>> extends true ?
            U
        :   never
    :   never

/*
  5 - Get Readonly Keys
  -------
  ### Question

  Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

  For example

  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }

  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```
*/
