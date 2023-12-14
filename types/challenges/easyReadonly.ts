/* _____________ Your Code Here _____________ */
type MyReadonly<T> = { readonly [Keys in keyof T]: T[Keys] }

/*
  7 - Readonly
  -------
  ### Question

  Implement the built-in `Readonly<T>` generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  ```
*/
