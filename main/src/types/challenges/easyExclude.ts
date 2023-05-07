/* _____________ Your Code Here _____________ */
type MyExclude<T, U> = T extends U ? never : T;

/*
  43 - Exclude
  -------
  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
*/
