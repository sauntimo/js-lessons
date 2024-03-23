// this function has two arguments - numbers, which it will add up
const add = (a, b) => {
  return a + b;
};

const result = add(3, 4);

console.log("The result is:", result);

// However, javascript isn't "strongly typed", so it doesn't know or mind that
// much about what kind of arguments you give it, and it will do it's best with whatever it gets

const result2 = add("hello", "world");

console.log(result2);

// this works because js uses + to add numbers *and* to concatenate (join) strings

const test1 = "3";
const test2 = "15";

console.log(add(test1, test2));
