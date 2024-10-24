/* _____________ Your Code Here _____________ */

import { assert } from 'console'

type MyAwaited<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ?
        U extends PromiseLike<any> ?
            MyAwaited<U>
        :   U
    :   never

/*
  189 - Awaited
  -------
  ### Question

  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

  For example: if we have `Promise<ExampleType>` how to get ExampleType?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```
*/
