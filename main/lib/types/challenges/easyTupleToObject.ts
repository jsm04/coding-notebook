/* _____________ Your Code Here _____________ */
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
	[P in T[number]]: P
}

/*
  11 - Tuple to Object
  -------
  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
*/
