const arr = [1, 2, 3, 4, 5];
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const arr3 = arr2.flat();
// console.log(arr3);

// node flatten.js - runs console log

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const arr4 = [[[1, 2, 3], [4, 5, 6], 7], 8];
const arr5 = arr4.flat(Infinity);
// console.log(arr5);

// map practice

// named the function itself double then given it an input called inputarr so it knows to expect some data
// if left the () blank after naming the function, the function wouldn't expect any input - might do something rather then take something and process it
// within map function need to have a callBackFunction which takes an argument and does something with it - called it value
// two levels of function, the double function then the function inside of .map
// call back function is what you want to do, map function is how you process each one in order
// mapping is having an array of things and processing them somehow and returning an array of the items once transformed
// map function iterates through the array (like a "for each function") but map does it well

const arrdoubled1 = arr.map((value) => value * 2);
const arrdoubled2 = arr2.map((value) => value * 2);
const arrdoubled3 = arr3.map((value) => value * 2);
const arrdoubled4 = doubleArray(arr4);

function doubleArray(inputarr) {
  return inputarr.map((value) => {
    return value * 2;
  });
}

const test = doubleArray([1, 2, 3]);

// function doubleNumber(number){
//   return number * 2;
// }

const doubleNumber = (value) => {
  return value * 2;
};

function doubleArray2(inputarr) {
  return inputarr.map();
}

// example from make

// example of using map
const data = [
  {
    variantId: 1,
    name: "x",
  },
  {
    variantId: 2,
    name: "y",
  },
];
const variantIds = data.map((value) => value.variantId);
// output [1, 2]

// different ways of achieving the same thing - not as easy, readable or elegant as map
const variantId1 = data[0].variantId;
const variantId2 = data[1].variantId;
const variantIds2 = [variantId1, variantId2];

const variantIds3 = [];
for (let i = 0; i < data.length; i++) {
  const variantId = data[i].variantId;
  variantIds3.push(variantId);
}

console.log(variantIds);
console.log(variantIds2);
console.log(variantIds3);

const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .filter((num) => num > 10);
