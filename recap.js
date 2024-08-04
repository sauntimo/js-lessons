// define a string

const stringTest = "Tim";

// define  a number

const numberTest = 1;

// define an array

// square brackets for arrays, curly ones for objects

const arrayTest = ["apple", "banana", "orange"];

// define an object
// javascript is case sensitive, so if I want to use capitals then wrap the objects properties in quotations

const objectTest = {
  Name: "Tim",
  Age: 30,
  Game: "Borderlands",
};

// define a boolean
// this is true/false without capitals as its its own primitive data type
const booleanTest = true;

// FUNCTIONS
// define a function
// - make it print "hello world"
// - call it from the "run" function

// the brackets after a function name is to accept arguments
// example below has no arguments so needs nothing in brackets
// curly braces afterwards are code blocks so it can highlight what the code is outside the function

// this function does not return a value, so when I call it in the run, I don't need to set it against a variable to return a value
function testFunction() {
  console.log("Hello World");
}
// empty brackets because there are no arguments, then curly braces for code block
const testFunctionTwo = () => {
  console.log("Hello World 2");
};

// two different versions of the same function listed above, one using the "function" keyword, and the other using arrow functions

// define a function
// - it should accept one argument, name - an argument is something that when you run the function,
// you pass an argument(value for the argument) into the function where it can be used
// - it should print a greeting which includes the name it was given

const greetFunction = (name) => {
  console.log("Hello " + name);

  // template string, interpolating the value of name into a string
  console.log(`Hello again, ${name}`);
};

// define a function
// - it should accept two arguments
// - if they are both numbers it should add them and return the result
// - if one of them isn't a number it should print an error

// HINT - use typeof operator to identify if value is a number or a string or something else
// remember curly braces are used for code block when you want to write some code
const add = (value1, value2) => {
  const value1Check = typeof value1;
  const value2Check = typeof value2;

  if (value1Check === "number" && value2Check === "number") {
    return value1 + value2;
  } else {
    console.log("Error, one of the arguments is not a number");
  }
};

// define a function
// - it should accept one argument, an array of numbers
// - it should return an array of numbers where each number is the square of the input

// once written a function, the return keyword needs to live outside of the loop,
// this is because when a loop hits return, it will end the function
//so put the return outside of the loop, unless you want to return a value before the loop finishes (i.e. if looking for something particular)
const squaring = (inputArray) => {
  // inputArray is the argument/array of values the function will be fed
  const returnArray = []; // setting somewhere for the the calculated values to be stored from each loop, it starts empty hence the []

  for (input of inputArray) {
    // the looping mechanism
    returnArray.push(input * input); //.push adds something new to the end of the array defined above, it doesn't overwrite it
  }

  return returnArray; // outside the loop we are returning the result of all calculations in one array
};

const square = (number) => {
  return number * number;
};

// this is how tim would write the same function above but more concise
const squaring2 = (inputArray) => {
  // define function same as above
  return inputArray.map((item) => item * item);

  // this is EXACTLY the same as the line above, but a "long form" version with {} and return
  // return inputArray.map((item) => {
  //   return item * item;
  // });

  // immediately returning result of something, using map function (available eon any array)
  // map functions accepts a function as an argument (so it knows that the function is just another data type), it builds a new array based on the return value of a function you give it
  // mapping is looping, so instead of having to do a for each
  // map takes function you give it and calls it with each value from the array
  // technically its a function within a function because mapping itself is a function
  // you can name each value in the array anything, in this example it is called item
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
};

// this demostrates the above with 2 ways of doing the same shorthand of not needing to write return
const addLong = (a, b) => {
  return a + b;
};

// this is exactly the same as addLong, but the "{}" and the "return" are omitted; it's a shorthand version
const addShort = (a, b) => a + b; // this is a normal function

const minusShort = (a, b) => a - b; // this is a normal function

const doMath = (a, b, operation) => operation(a, b); // this takes two numbers and another function called operation
// because functions can take arguments that are other functions
// doMath(1,2, addShort) - we are running the function doMath, feeding in values 1 and 2, then saying do function within it of addShort

// don't worry about this!!
const countToTenRecursively = (number, array) => {
  console.log(`I'm on number ${number}`);
  array.push(number);

  if (number >= 10) {
    return array;
  }
  return countToTenRecursively(number + 1, array);
};

// you can set default values for arguments
// which only get used if no value was provided
const sayHello = (name = "tim") => console.log(`Hello, ${name}`);
// in run you would console.log(sayHello("Benji")); this would return benji
// if you ran console.log(sayHello()); this would return tim

const taskTemplate = [1, 2, 3, 4, 5];
const existingTasks1 = [2, 3, 4];

const arrayDifference = (inputArray1, inputArray2) =>
  inputArray1.filter((item) => !inputArray2.includes(item));

// this is the same but long form version of shorthand above
const arrayDifference2 = (inputArray1, inputArray2) => {
  // Array.filter() is similar to Array.map() - it's looping over everything in the array
  // you have to give .filter a function to work through, and the function you give it must return true or false
  // this is called a "predicate function" - where it returns true or false

  // .filter builds a new array with items where the result of the function you've fed it (in this case .includes and a return) is true
  return inputArray1.filter((item) => {
    // Array.includes() returns true if the array it's called on, contains the values it's called _with_
    // inputArray 2 is the array is called on (or from), its a method on that array it has context of that array
    // item is the argument (data) that you are giving .includes
    // the .includes method will return true or false based on if item is in the array
    // putting an ! will flip the true or false, I want this to show false results
    return !inputArray2.includes(item);
  });
};

// this is what you would console log - console.log(arrayDifference(taskTemplate, existingTasks));
// if you wanted to call the function you would define variable and call the function

class Record {
  data = {};

  constructor(name, id) {
    this.data.name = name;
    this.data.id = id;
  }

  getCellValue(name) {
    return this.data[name];
  }
}

const tasks = [
  { id: 1, name: "name_1" },
  { id: 2, name: "name_2" },
  { id: 3, name: "name_3" },
  { id: 4, name: "name_4" },
  { id: 5, name: "name_5" },
];

const existingTasks = [
  { id: 23, name: "name_1" },
  { id: 24, name: "name_2" },
];

const taskRecords = tasks.map((task) => new Record(task.name, task.id));
const existingTaskRecords = existingTasks.map(
  (task) => new Record(task.name, task.id)
);

const arrayDifference3 = (taskArray, existingTaskArray) => {
  const existingTaskNames = existingTaskArray.map((task) =>
    task.getCellValue("name")
  );

  return taskArray.filter(
    (task) => !existingTaskNames.includes(task.getCellValue("name"))
  );
};

const run = () => {
  // console.log("running");
  // testFunction();
  // testFunctionTwo();
  // greetFunction("Tim");
  // let calculation = add(1, "2");
  // console.log(calculation);

  // console.log(squaring([1, 2, 3]));
  // console.log(squaring2([1, 2, 3]));

  // console.log(doMath(1, 4, addShort));
  // console.log(doMath(7, 4, minusShort));

  // const recursiveResult = countToTenRecursively(1, []);
  // console.log(recursiveResult);

  // console.log(sayHello("Benji"));

  // console.log(arrayDifference(taskTemplate, existingTasks1));

  console.log(arrayDifference3(taskRecords, existingTaskRecords));
};

run();
