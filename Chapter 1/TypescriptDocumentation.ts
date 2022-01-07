function isPalindrome(word: string): boolean {
  const lowerCaseWord = word.toLowerCase()
  const reversedWord = lowerCaseWord.split('').reverse().join('')
  return lowerCaseWord === reversedWord }

//console.log(isPalindrome('Level')) // true 
//console.log(isPalindrome('Anna')) // true 
//console.log(isPalindrome('Carlos')) // false 
//console.log(isPalindrome(101)) // TS Error 
//console.log(isPalindrome(true)) // TS Error 
//console.log(isPalindrome(false)) // TS Error


type User = { 
  username: string;
  email: string;
  name: string;
  age: number;
  website: string;
  active: boolean
}
const user: User = {
username: 'czantany',
email: 'carlos@milkzoft.com', 
name: 'Carlos Santana',
age: 33,
website: 'http://www.js.education', 
active: true
}

// Let's suppose you will insert this data using Sequelize... 
//models.User.create({ ...user }}

type TUser = { 
  username: string;
  email: string;
  name: string;
  age?: number;
  website: string;
  active: boolean
}

// If you need optional nodes, you can always put a ? next to the name of the node

//You can name type as you want, but a good practice to follow is to add a prefix of T, so, for example, the User type will become TUser. In this way, you can quickly recognize that it is type and you don't get confused thinking it is a class or a React component.

interface IUser { 
  username: string;
  email: string;
  name: string;
  age?: number;
  website: string;
  active: boolean
}

//You can name an interface as you want, but a good practice to follow is to add a prefix of I, so, for example, the User interface will become IUser. In this way, you can quickly recognize that it is an interface and you don't get confused thinking it is a class or a React component.

//Extending

//An interface or type can also be extended, but again the syntax will differ, as shown in the following code block:
// Extending an interface 

interface IWork {
  company: string;
  position: string 
}

interface IPerson extends IWork { 
  name: string;
  age: number
}

// Extending a type 
type TWork = {
  company: string
  position: string 
}

type TPerson = TWork & {
  name: string
  age: number 
}


// Extending an interface into a type 
interface IWork {
  company: string
  position: string 
}

type TPerson2 = IWork & { 
  name: string
  age: number
}

// Implementing

// A class can implement an interface or type alias in the same exact way. But it cannot implement (or extend) a type alias that names a union type, for example:
  
// // Implementing an interface 
// interface IWork2 {
//   company: string
//   position: string }

// class Person implements IWork2 { 
//   name: 'Carlos'
//   age: 33
// }

// // Implementing a type 
// type TWork = {
//   company: string
//   position: string 
//}

// class Person2 implements TWork { 
//   name: 'Cristina'
//   age: 32
// }
// // You can't implement a union type
// type TWork2 = { company: string; position: string } | { name: string; age:number }

// class Person3 implements TWork2 { company: 'Google'
// position: 'Senior Software Engineer'
// }

// Declaration merging
// Unlike a type, an interface can be defined multiple times and will be treated as a single interface (all declarations will be merged), as shown in the following code block:

interface IUser { 
  username: string 
  email: string 
  name: string 
  age?: number 
  website: string 
  active: boolean
}

interface IUser { 
  country: string
}
const user3: IUser = { 
  username: 'czantany',
  email: 'carlos@milkzoft.com',
  name: 'Carlos Santana',
  country: 'Mexico',
  age: 33,
  website: 'http://www.js.education', 
  active: true
}