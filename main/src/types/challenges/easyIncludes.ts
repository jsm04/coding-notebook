/* _____________ Your Code Here _____________ */

type Includes<T extends readonly any[], U> = {
	[P in T[number]]: true;
}[U] extends true
	? true
	: false;

/*
  898 - Includes
  -------
  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
*/
