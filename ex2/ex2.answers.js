/**
 * Returns an array where the odd numbers are removed
 * @param {number[]} inputArray
 */
const removeOddNumbers = (inputArray) => {
  return inputArray.filter((value) => value % 2 === 0);
};

/**
 * Returns an array where the even numbers are removed
 * @param {number[]} inputArray
 */
const removeEvenNumbers = (inputArray) => {
  return inputArray.filter((value) => value % 2 !== 0);
};

/**
 * Returns an array where one level of nested arrays are flattened
 * @param {any[]} inputArray
 */
const flattenArraysOnce = (inputArray) => {
  return inputArray.flat();
};

/**
 * Returns an array where all nested arrays are flattened
 * @param {any[]} inputArray
 */
const flattenArraysTotally = (inputArray) => {
  return inputArray.flat(Infinity);
};

/**
 * Returns a new array where all the numbers in the original are squared
 * @param {number[]} inputArray
 */
const squareNumbers = (inputArray) => {
  return inputArray.map((value) => value ** 2);
};

/**
 * Returns an array with odd numbers removed and the
 * remaining even numbers squared
 * @param {number[]} inputArray
 */
const squareEvenNumbers = (inputArray) => {
  const evens = removeOddNumbers(inputArray);
  return squareNumbers(evens);
};

module.exports = {
  removeOddNumbers,
  removeEvenNumbers,
  flattenArraysOnce,
  flattenArraysTotally,
  squareNumbers,
  squareEvenNumbers,
};
