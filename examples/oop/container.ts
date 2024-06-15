// Simple TypeScript playground example

interface Person {
      name: string
      age: number
      greet: () => void
}

class Student implements Person {
      name: string
      age: number
      grade: number

      constructor(name: string, age: number, grade: number) {
            this.name = name
            this.age = age
            this.grade = grade
      }

      greet() {
            console.log(
                  `Hello, my name is ${this.name} and I am ${this.age} years old.`
            )
      }

      study() {
            console.log(`${this.name} is studying.`)
      }
}

class Teacher implements Person {
      name: string
      age: number
      subject: string

      constructor(name: string, age: number, subject: string) {
            this.name = name
            this.age = age
            this.subject = subject
      }

      greet() {
            console.log(
                  `Hello, my name is ${this.name} and I teach ${this.subject}.`
            )
      }

      teach() {
            console.log(`${this.name} is teaching ${this.subject}.`)
      }
}

function main() {
      const students: Student[] = [
            new Student('Alice', 20, 3),
            new Student('Bob', 22, 4),
            new Student('Charlie', 19, 2),
      ]

      const teachers: Teacher[] = [
            new Teacher('Mr. Smith', 40, 'Math'),
            new Teacher('Ms. Johnson', 35, 'Science'),
      ]

      students.forEach((student) => {
            student.greet()
            student.study()
      })

      teachers.forEach((teacher) => {
            teacher.greet()
            teacher.teach()
      })
}

// Additional utility functions
function getAverageAge(persons: Person[]): number {
      const totalAge = persons.reduce((sum, person) => sum + person.age, 0)
      return totalAge / persons.length
}

function printPeopleInfo(persons: Person[]) {
      persons.forEach((person) => {
            person.greet()
      })
}

// Example of a union type function
function printPersonInfo(person: Person | Student | Teacher) {
      person.greet()
      if (person instanceof Student) {
            person.study()
      } else if (person instanceof Teacher) {
            person.teach()
      }
}

// Execute the main function
main()

// Additional playground code
const randomPerson: Person = {
      name: 'Random',
      age: 30,
      greet: function () {
            console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`)
      },
}

randomPerson.greet()

const mixedArray: (Person | Student | Teacher)[] = [
      ...students,
      ...teachers,
      randomPerson,
]

printPeopleInfo(mixedArray)
console.log(`Average age: ${getAverageAge(mixedArray)}`)

mixedArray.forEach(printPersonInfo)
