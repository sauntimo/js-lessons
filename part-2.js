// functions are reusable bits of code. This style is called an arrow function
const functionOne = () => {
  console.log("this is function one!");
};

// this is a "normal" function using the function keyword
function functionTwo() {
  console.log("this is function two!");
}

// this is how we call functions - note the brackets after the name even when
// they don't have any arguments
functionOne();
functionOne();
functionTwo();
