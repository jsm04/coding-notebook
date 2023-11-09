/* _____________ Your Code Here _____________ */
type MyReturnType<T extends Function> = T extends (...args: any) => infer R
	? R
	: never

/*
  2 - Get Return Type
  -------
  ### Question

  Implement the built-in `ReturnType<T>` generic without using it.

  For example

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```
*/
