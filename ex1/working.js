// import { people } from "./people";

const people = [
  { id: 1, name: "Alice", age: 32, department: "Engineering", managerId: 10 },
  { id: 2, name: "Bob", age: 25, department: "Product", managerId: 7 },
  { id: 3, name: "Charlie", age: 43, department: "Management" },
  { id: 4, name: "Dave", age: 38, department: "Engineering", managerId: 10 },
  { id: 5, name: "Ellie", age: 27, department: "Marketing", managerId: 6 },
  { id: 6, name: "Frank", age: 41, department: "Marketing", managerId: 3 },
  { id: 7, name: "Greg", age: 50, department: "Product", managerId: 3 },
  { id: 8, name: "Helen", age: 33, department: "Product", managerId: 7 },
  { id: 9, name: "Ian", age: 24, department: "Engineering", managerId: 10 },
  { id: 10, name: "Kate", age: 30, department: "Engineering", managerId: 3 },
];

// get the names of all the engineers
const getEngineers = (people) =>
  people
    // get people who's department matches engineering
    .filter((person) => person.department === "Engineering")
    // return their names
    .map((person) => person.name);

// first step is pass data into the function using "peopleData"
// second step is writing a function to take an argument to filter that data using "person"
// the third step is writing a function to take an argument to map the filtered data with the name of the person "personObject"
function findEngineers2(peopleData) {
  return (
    peopleData // 10 people in list
      .filter(function (person) {
        return person.department === "Engineering"; // having to set another argument to do the actual filtering
        // alice --> true
        // bob --> false
      })
      // return from .filter is [alice, dave, ian, kate]
      .map(function (personObject) {
        return personObject.name;
      })
  );
}

findEngineers2(people);

// standard function definition, note that using the word "function" doesn't stop this being a variable
// it's just a variable that contains a function, function is a data type
// more traditional may be referred to as long form
function test1(number) {
  return number + 1;
}

// arrow function version
// similarly, this is setting a variable just like using the word function to set it instead
const test2 = (number) => {
  return number + 1;
};

// arrow function shorthand
// we can drop the curly braces and "return" keyword as we only have one expression or instruction
// if we needed two, we couldn't
const test3 = (number) => number + 1;

// retuning an object from a function

function buildCar() {
  // not passing in an argument because we are defining car within the function, don't care about stuff from outside the function
  return {
    colour: "red",
    wheels: 4,
  };
}

// arrow function version, defining a variable that happens to be a function, takes no arguments and returns an object
const buildCar2 = () => {
  return { colour: "red", wheels: 4 };
};

// here, in order to return an object from an arrow function we can't just use curly braces {} because
// then the computer thinks it's a "code block", not an "object" so it gets confused.
// to solve this, we can wrap the object in round braces ()
// the curly braces are what makes it an object with keys and values.
const buildCar3 = () => ({ colour: "red", wheels: 4 });

const car = buildCar();

// console.log(car);

// array of cars
const cars = [
  { color: "red", doors: 3 },
  { color: "blue", doors: 5 },
  { color: "black", doors: 10 },
];

// this map does nothing, you get out exactly what you put in
const cars2 = cars.map((car) => car);

//this is exactly the same as the above
// the ... is the "spread" operator
// it adds all the properties from one object, into another
const cars3 = cars.map((car) => ({ ...car }));

const a = { name: "Tim" };
const b = { age: 36 };

const c = { ...a, ...b };
// console.log(c);

// ********* REDUCE FUNCTION **************

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const add1 = (input) => {
  let total = 0;
  input.forEach((item) => (total = total + item));
  return total;
};

const add2 = (input) => {
  return input[0] + input[1] + input[2];
};

console.log(add1(numbers));

const sum = (input) => {
  const total = input.reduce((previous, current) => {
    // console.log({ previous, current });

    return previous + current;
  }, 0);

  return total;
};

const result = sum(numbers);

// console.log(result);

const animals = [
  { name: "mittens", type: "cat" },
  { name: "rover", type: "dog" },
  { name: "whiskers", type: "fish" },
];

const animalObject = animals.reduce((previous, current) => {
  return {
    ...previous,
    // square brackets are if you want to use a variable as the key in a new object
    // it's making the key dynamic so it can reference the current name in the loop
    [current.name]: current.type,
  };
  //empty object is starting value - this is the value of "previous" arg, the first time the function runs
}, {});

const animalObject2 = animals.reduce((previous, current) => {
  const returnObject = previous;
  returnObject[current.name] = current.type;

  return returnObject;
  //empty object is starting value - this is the value of "previous" arg, the first time the function runs
}, {});

console.log(animalObject2);
// { mittens: 'cat', rover: 'dog', whiskers: 'fish' }

const cat = { name: "boots", age: 2 };

// these are the same - they are just ways to access properties on an object
// cat.name;

// cat["name"]

// const propertyIAmInterestedIn = "name"

// cat[propertyIAmInterestedIn]
