const numbers = [1, 2, 3, 4, 5];

console.log("numbers:", numbers);

const words = ["these", "are", "some", "words"];

console.log("words:", words);

console.log("there are " + words.length + " words");

words.push("and");
words.push("some");
words.push("more");

console.log("words:", words);

console.log("the 4th word is:", words[3]);

const test = new String("hello");
const result = "hello".concat("world");

console.log(result);

const sayHelloName = (name) => {
  return `hello ${name}`;
};

// above we have defined a function and its stored in a variable called sayHelloName
// below is setting a new variable and calling that function
// function is run, gets the name, then it returns the string which gets set as 2nd variable

const greetBenji = sayHelloName("benji");

console.log(greetBenji);

// section complete

// set of numbers, use function to filter them
const numbers2 = [1, 5, 27, 99, 103, 45];

// const filterFunction = (value, index, array) => {
//   return value > 20;
// };

const filtered = numbers2.filter((value) => {
  return value > 20;
});

const addPercent = numbers2.map((value) => {
  return value * 1.1;
});

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res3 = numbers3
  .filter((value) => value % 2 !== 0)
  .map((value) => value * value)
  .reduce((prev, cur) => {
    console.log({ prev, cur });

    return prev + cur;
  }, 0);

console.log(res3);

// practice using methods map, filter and reduce
