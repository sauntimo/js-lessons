
// VARIABLES
// Variables, we give the variable a name and that represents some data
// let name = 'Mosh';
// console.log(name);

// Name for variables can't be a reserved keyword like IF, VAR, LET etc
// Should be meaningful name
// Can't start variable name with a number (1name)
// Can't contain space or hyphen
// variables are case sensitive, write in camelcase
// each variable on a new line

// let firstName = 'Ben'
// let lastName = 'Staples'
// console.log(firstName)


//CONSTANTS
// If we don't want value of a variable to be changeable, like in example below, then you set up a constant
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate) will equal 1

// const interestRate = 0.3
// interestRate = 1
// console.log(interestRate) this return an error as interest rate can't change as a const


// PRIMITIVE TYPES
// What kind of values can we assign to a variable?
// 2 categories of types, primitives "value" types and reference types
//  strong, numbers , boolean, undefined and null

// let name = 'Ben'; // string literal
// let age = 30; // number literal
// let isApproved = true; // boolean literal, can either be true or false, 
// // use in situation when we want some logic, i.e. if order is approved then it needs to be shipped
// let firstName = undefined; // or can leave this as let firstName
// let lastName = null; // use when we want to clear the value of a variable


// DYNAMIC TYPING
// can clear console with crtl + l 
//  section talking about typeof operater in console/terminal


// We have primitive types (discussed above) and Reference Types, these are object, array, function


// OBJECTS
// when dealing with multiple related variables, we can put them inside an object
// between the curly brackets we add one or more "key: value" pairs
// keys are the properties of the object, then after that we set the value of this property
// so below the name and age are the keys, and values are the data
// let person = {
//     name: 'Benji',
//     age: 32
// };
// // console.log(person)

// // two ways to access these properties:
// // Dot Notation, which also allows you to chage the value - this should be default choice
// person.name = 'John'
// console.log(person.name)

// // Other way is Bracket Notation, you pass in a string that determines the name of the target property
// person['name'] = 'Mary'
// // you can also use bracket notation if you don't know the key for the object until run time
// // Which means you can set a variable that is selected by the user, then reference it later
// let selection = 'name'
// person[selection] = 'Mary'


// ARRAYS
// Use an array to store a list of objects/elements
// let selectedColours = ['red', 'blue'];
// each element in the array has an index; 0, 1, 2 etc this determine position of element in that array
// use index of element it to access it from an array
// console.log(selectedColours[0])
// you can expand the length of an array and add elemenets because it is dynamic
// selectedColours[2] = 'green' // as items 0 and 1 are red and blue
// also they type of objects we have in an array is dynamic, meaning we can combine string and numbers for example
// selectedColours[3] = '4'
// so the objects in an array and the size of the array are dynamic
// technically an array is an object, so it has sets of key: value pairs that we can access using dot notation
// we can also access properties of this array
// console.log(selectedColours.length) // returns 4
// An array is a data structure that we use to represent a list of items


// FUNCTIONS
// a set of statements that performs a task ot calculates a value
// create function by using function, then give it a name such as greet (adding brackets afterwards), then add curly braces
// inside the curly braces is where you write the body of the function to definte some logic in our application
// in example below, logic for this function is to display a message on the console.

// This function is Performing a Task
// function greet() {
//     console.log('hello world');
// }

// greet();

// our functions can have inputs, and this changes how function behaves
// we can add a variable in to the greet function. This variable is referenced as a parameter
// so this greet function has one parameter called name, and it's only meaningful inside of this function
// meaning we can work with it inside of fucntion, but won't be accessible outside of function

// function greet(name) {
//     console.log('Hello ' + name)
// }

// when calling the greet function, we need to pass in a value for the name variable/parameter
// so we can pass john here. This is referred to as an argument, so john is an argument to the greet function
// and name is a parameter of the greet function
// an argument is the value of supply for that parameter

// greet('John')

// we can reuse the function with a different input

// greet('Mary')

// now we have two messages on the console log
// a function can have multiple parameters, and we can seperate them using a comma

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName)
// }

// greet('John', 'Smith')


// TYPES OF FUNCTIONS

// A function that calculates a value
// function square(number) {
//     number * number;
// }
// however, we need to return this value that is being calculated to whoever is calling the function
// for this we use the return keyword

// function square(number) {
//     return number * number;
// }

// square(2); // this returns a value, we can use that to initialize a variable
// so we set a variable like below

// let maths = square(2)
// console.log(maths)

// in this example we don't necessarily have to declare a separate value if all we want to do is display value on console
// we can exclue variable declaration from above and simply put the below

// console.log(square(2))

// using a console log is also calling a function (you can tell with parenthesis - brackets)


// OPERATORS____________________________________________________________________
// Use operators along with variables to create experessions. With expressions we can implement logic and algorithms

// ARITHMATIC OPERATORS
// let x = 10;
// let y = 3;

// console.log(x + y) // this is an expression, it produces a value
// console.log(x - y)
// console.log(x / y)
// console.log(x % y) //(remainder of division)
// console.log(x ** y) // x to the power of y

// Increment (++)
// console.log(++x); // x incremented by 1 first
// console.log(x++) // tells x to increment by 1 so then need to run another console log to see change
// console.log(x)

// Decrement (--)
// console.log(--x)


// ASSIGNMENT OPERATORS
// let x = 10

// x += 5 // this is an addition assignment operator, it is adding 5 to x and making x = 15
// console.log(x)

// x *= 3 // this is a multipler assignment operator, multiplying x by 3
// console.log(x)

//  COMPARISON OPERATORS
// x = 1
// console.log( x > 0) // result of expression is a boolean, its true or false
// console.log(x >= 1) // greater than or equal to
// // <, <=

// Strict equality (have same type and value)
// console.log(x === 1) // x is equal to 1
// console.log(x !== 1) // x is not equal to 1

// console.log('1' === 1) // will return false because it is a string vs a number

//  Loose equality operator (if value is equal)
// console.log(1 == 1) //same value and type so is correct
// console.log('1' == 1) //same value but not type but still returns true
// console.log(true == 1) //converts 1 to boolean which is true, so console log returns true


// TERNARY OPERATOR
// IF a customer has more than 100 points, they are a 'gold' customer, otherwise they are a 'silver' customer

// let points = 90
// let type = points > 100 ? 'gold' : 'silver' //ternary or conditional operator

// console.log(type)


// Logical Operators
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
//console.log(true && true) //returns true, if one of them false, then returns false

// let highIncome = true
// let goodCreditScore = true
// let eligibleForLoan = highIncome && goodCreditScore
// console.log(eligibleForLoan)

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let eFL = highIncome || goodCreditScore
// console.log(eFL) // returns true if just one of them is true

// Logical NOT (!)
// let highIncome = false
// let goodCreditScore = false
// let eligibleForLoan = highIncome || goodCreditScore
// console.log('Eligible', eligibleForLoan)

// let applicationRefused = !eligibleForLoan //the not operator will give us the opposite of what we feed it
// console.log('Application Refused', applicationRefused) // so what this logic does is says application refused is always the opposite of eligible for loan
// because eligible is false, then application refused = true


// Logical Operators with non-booleans and using OR operator
// the result of a logic expression is not necessarily true or false, depends on value of operance we have
// if there is a value in the operand that is not true or false, js will try to interpret it as truthy or falsy

// Falsy (false) can appear as:
// undefined
// null
// 0
// false
// ''
// NaN (not a number)
// if you use any of these values in logic expression, they will be treated as falsy

// Anything that is not Falsy it is Truthy

// Short-circuiting with the OR logical operator
// If there is a list of values seperated by OR (||) then it will stop and return the first value truthy value it finds
// false || 1 || 2
// Will return 1

// let userColour = 'red'
// let defaultColour = 'blue'
// let currentColour = userColour || defaultColour

// console.log(currentColour)
//Returns Red

// IF 
// let userColour = undefined
// let defaultColour = 'blue'
// let currentColour = userColour || defaultColour

// console.log(currentColour)
//Returns Blue

// Operators Precedence
// let x = (2 + 3) * 4
// console.log(x)
// it will do the multiplication first as that has higher precedence, then it will add other value
// so you can use parenthesis to determine how these operators are applied

// Swapping variables
// let a = 'red'
// let b = 'blue'
// console.log(a)
// console.log(b)

// Returns blue, red
// To swap them, set a 3rd variable of c, then replace them

// let c = a
// a = b
// b = c
// console.log(a)
// console.log(b)

