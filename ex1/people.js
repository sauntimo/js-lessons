/****************
 * INTRODUCTION *
 ****************/

//#region Introduction

/*

The aim here is not that you read all of this and immediately understand it -
that's virtually impossible as it's deliberately complex.

Instead; the idea is to demonstrate that by combining a few array methods
together, we can solve increasingly complex problems. We can answer questions
about our data, process it or transform it, in ways which would take
considerable effort to achieve manually, especially as the amount of data
increases.

It will also serve as a reference point. I expect that when you first read this,
much of it will appear totally foreign and incomprehensible. In a couple of
months however, you'll look back on this and it will seems familiar and fairly
logical - and that will show how much you've learned and how far you've come!

Have a go at uncommenting the "console.log"s by each function and see if you can
follow how the functions produces the result. Bonus points if you make a note
of any bits which you can't get your head around. There should be a lot! Don't
worry if there is, we'll go through this together and look at simpler examples
- these ones are deliberately complex, using lots of different concepts at the
same time.

*/

/*************
 * RESOURCES *
 *************/

//#region Resources

/*

arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
note the section one third the way down the page which mentions:
Returning object literals using the expression body syntax does not work as expected.
(params) => { object: literal } // error
To fix this, wrap the object literal in parentheses:
const func = () => ({ foo: 1 });

spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
optional chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Object.entries: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

## array functions
map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
some: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
includes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

*/

/* Note on chaining array functions */

// each of these is a predicate function; it returns true or false, depending
// on if the input matches the condition specified

// % "modulo" operator returns the remainder after dividing a number
// don't worry about this, you don't need to remember it. I've only ever used
// it to work out if something was odd or even like this...
const numberIsEven = (number) => number % 2 === 0;
const numberLessThan100 = (number) => number < 100;
const numberHasA3InIt = (number) => number.toString().includes("3");

const testNumbers = [73, 150, 45, 7, 234, 4, 62, 83, 30, 3, 41, 100, 33, 300];

// example of chaining array methods together
const result = testNumbers
  // we can filter using a predicate function
  .filter(numberIsEven) // each step is returning a new array with the results of the filter - chaining array functions being useful
  // and because filter returns an array, we can chain the result to another filter
  .filter(numberLessThan100)
  // and chain the result to another filter...
  .filter(numberHasA3InIt);

console.log(result);
// should result in
// [30]
// Benji note - this made sense

/********
 * DATA *
 ********/

//#region Data

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

const topPerformerIds = [1, 9, 3, 6, 2];

/*************
 * FUNCTIONS *
 *************/

//#region getEngineers
// get the names of all the engineers
const getEngineers = (people) =>
  people 
  // get people who's department matches engineering
  .filter((person) => person.department === "Engineering")
  // return their names
  .map((person) => person.name);

// Benji note - unsure why uses people, people twice at start, then changes to person afterwards?
// If written like traditional function would it be:

// ********* NEED TO REVISIT SINGLE RULE FUNCTIONS

// function findEngineers(people) {
// return people
// .filter(function(person) {              using person just as another word to help associate (could be anything)
// return person.department === "Engineering"})
// .map(function(person) {
// return person.name})

// UNSURE WHY USING PERSON IN PART 2 OF ABOVE FUNCTION?

//  When going through it again I think I understand

console.log(getEngineers(people));
// should result in
// [ 'Alice', 'Dave', 'Ian', 'Kate' ]

//#region getTopPerformers
// get the names of all the top performers
const getTopPerformers = (people) => // so are you just making a random argument called people?
  people
    // get people who's id was in a separate array
    .filter((person) => topPerformerIds.includes(person.id)) // why do you need to filter before doing the includes function?
    // return their names
    .map((person) => person.name); // mapping pulls the name?

console.log(getTopPerformers(people));
// should result in
// [ 'Alice', 'Bob', 'Charlie', 'Frank', 'Ian' ]


// NEED THIS ONE WALKING THROUGH (below)

//#region addManagerName
// add the name of each person's manager to their person record, if they have a manager
const addManagerName = (people) =>
  // map the array of people
  people.map((person) => ({
    // return an object with all the properties of the person item
    ...person,
    // and a new property for their manager's name
    // find their manager from the list
    managerName:
      // if find() returned a person, get their name - otherwise, return undefined
      people.find((person2) => person2.id === person.managerId)?.name,
  }));

// console.log(addManagerName(people));
// should result in (only showing first 3 entries, there should be 10)
// NOTE that Charlie's manager is undefined because Charlie doesn't have a
// managerId - she's the boss
// [
//   {
//     id: 1,
//     name: 'Alice',
//     age: 32,
//     department: 'Engineering',
//     managerId: 10,
//     managerName: 'Kate'
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     age: 25,
//     department: 'Product',
//     managerId: 7,
//     managerName: 'Greg'
//   },
// {
//   id: 3,
//   name: 'Charlie',
//   age: 43,
//   department: 'Management',
//   managerName: undefined
// },
//   ...
// ]

// lol this one is a step beyond

//#region getYoungestHalf
// get the names and ages of the youngest 50% of the group
const getYoungestHalf = (people) => {
  // calculate how many people in 50%, round down
  const numberToInclude = Math.floor(people.length / 2);

  const ages = people
    // get an array of everyone's ages
    .map((person) => person.age)
    // sort it youngest first
    .sort((a, b) => (a >= b ? 1 : -1))
    // return the first 5 records
    .slice(0, numberToInclude);

  return (
    people
      // get people who's ages are in our list
      .filter((person) => ages.includes(person.age))
      // sort them by age, youngest first
      .sort((a, b) => (a.age >= b.age ? 1 : -1))
      // return their name and age
      .map((person) => ({ name: person.name, age: person.age }))
  );
};

// console.log(getYoungestHalf(people));
// should result in
// [
//   { name: "Ian", age: 24 },
//   { name: "Bob", age: 25 },
//   { name: "Ellie", age: 27 },
//   { name: "Kate", age: 30 },
//   { name: "Alice", age: 32 },
// ];

//#region getManagers
// get all the people managers, and return their names and departments and a list of the names of their direct reports
const getManagers = (people) =>
  people
    // filter the list of people
    .filter((person) =>
      // return only people where someone else has this person as their manager
      people.some((person2) => person2.managerId === person.id)
    )  // this is really clever - will need to walk through to make sure i understand fully
    // map the managers
    .map((manager) => ({
      // return an object directly
      name: manager.name,
      department: manager.department,
      reports: people
        // filter people by people who have this person as their manager
        .filter((person) => person.managerId === manager.id)
        // return their name
        .map((report) => report.name),
    }));

// console.log(getManagers(people));
// should result in
// [
//   {
//     name: "Charlie",
//     department: "Management",
//     reports: ["Frank", "Greg", "Kate"],
//   },
//   { name: "Frank", department: "Marketing", reports: ["Ellie"] },
//   { name: "Greg", department: "Product", reports: ["Bob", "Helen"] },
//   {
//     name: "Kate",
//     department: "Engineering",
//     reports: ["Alice", "Dave", "Ian"],
//   },
// ]

//#region buildReportsTree
// recursively build a tree of reports for a given id
const buildReportsTree = (id) => {
  // get the person matching the provided id
  const thisPerson = people.find((person) => person.id === id);

  // get that person's reports
  const reports = people.filter((person) => person.managerId === thisPerson.id);

  // get basic info from person (object destructuring)
  const { name, department } = thisPerson;

  // if this person doesn't manage anyone, just return their name
  if (reports.length === 0) {
    return name;
  }

  // otherwise, return basic info and call this function recursively for  all their reports
  return {
    name,
    department,
    reports: reports.map((report) => buildReportsTree(report.id)),
  };
};

// Note: JSON.stringify() converts javascript objects into a text representation of them
// console.log(JSON.stringify(buildReportsTree(3), null, 2));
// should result in
// {
//   name: "Charlie",
//   department: "Management",
//   reports: [
//     {
//       name: "Frank",
//       department: "Marketing",
//       reports: ["Ellie"],
//     },
//     {
//       name: "Greg",
//       department: "Product",
//       reports: ["Bob", "Helen"],
//     },
//     {
//       name: "Kate",
//       department: "Engineering",
//       reports: ["Alice", "Dave", "Ian"],
//     },
//   ]
// }

//#region getManagersByAverageAgeOfDept
// get get the manager of each department, sorted by the average age of everyone in the department
const getManagersByAverageAgeOfDept = (people) => {
  // build an object of average dept ages
  const averageDeptAges = people.reduce((previous, current) => {
    // only calculate each dept once
    if (previous[current.department]) {
      return previous;
    }

    // get the ages of everyone in the department
    const deptAges = people
      // get people in the department
      .filter((person) => person.department === current.department)
      // return their ages
      .map((person) => person.age);

    // return an object which contains all the properties of the object returned
    // from the previous iteration, with a new property for the current dept
    return {
      ...previous,
      // sum the ages of the current dept, and divide by the number of people
      [current.department]:
        deptAges.reduce((prev, cur) => prev + cur, 0) / deptAges.length,
    };
  }, {});

  // averageDeptAges should have this value:
  // { Engineering: 31, Product: 36, Management: 43, Marketing: 34 }

  // split the object up in to an array of arrays
  return (
    Object.entries(averageDeptAges)
      // map the arrays of arrays into an array of objects
      .map(([department, averageAge]) => ({ department, averageAge }))
      // sort the array by average age, youngest first
      .sort((a, b) => (a.averageAge >= b.averageAge ? 1 : -1))
      // map the items to include the manager of that department's name
      .map((item) => ({
        ...item,
        manager: people.find(
          (person) =>
            // find people where the department matches the current one
            person.department === item.department &&
            // and at least someone has this person as their manager
            people.some((person2) => person2.managerId === person.id)
        ).name,
      }))
  );
};

// console.log(getManagersByAverageAgeOfDept(people)));
// should return
// [
//   { department: "Engineering", averageAge: 31, manager: "Kate" },
//   { department: "Marketing", averageAge: 34, manager: "Frank" },
//   { department: "Product", averageAge: 36, manager: "Greg" },
//   { department: "Management", averageAge: 43, manager: "Charlie" },
// ];
