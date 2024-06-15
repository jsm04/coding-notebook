const { log } = console

/*
 you only learn in the present time
 theres nothing outside percived now
*/

const filter = (predicate, xs) => xs.filter(predicate)
const is = (type) => (x) => Object(x) instanceof type

log(filter(is(Number), [0, '1', 2, null])) // [0, 2]

class Monad<T> {
      constructor(private x: T) {}

      static log(x) {
            return x instanceof Function ? log(x)! : x
      }

      filter(predicate, xs) {
            return xs.filter(predicate)
      }

      is(type) {
            return (x) => Object(x) instanceof type
      }
}
