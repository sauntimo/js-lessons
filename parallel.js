const existingSizes = ["small", "medium", "large"];
// variantPosition 1, 2, 3

const assignedSizes = [
  "extra-small",
  "small",
  "medium",
  "large",
  "extra-large",
];
// variantPosition 1,2,3,4,5

function getNewSizes() {
  return assignedSizes.filter((size) => !existingSizes.includes(size));
}

const run = async () => {
  console.log(database);

  const endResult = assignedSizes.map((size, index) => {
    return { size: size, variantPosition: index + 1 };
  });

  const updatePromises = existingSizes.map((existingSize) => {
    const update = endResult.find((item) => item.size === existingSize);
    return updateDatabase(update);
  });

  const newSizes = getNewSizes();

  const newItemPromises = newSizes.map((newSize) => {
    const createItem = endResult.find((item) => item.size === newSize);
    return updateDatabase(createItem);
  });

  await Promise.all([...updatePromises, ...newItemPromises]);

  console.log(database);
};

let database = [
  { size: "small", variantPosition: 1 },
  { size: "medium", variantPosition: 2 },
  { size: "large", variantPosition: 3 },
];

const updateDatabase = async (update) => {
  await sleep(1000);

  const itemToUpdateIndex = database.findIndex(
    (item) => item.size === update.size
  );

  if (itemToUpdateIndex > -1) {
    database[itemToUpdateIndex].variantPosition = update.variantPosition;
  } else {
    database.push(update);
  }

  database = database.sort((a, b) =>
    a.variantPosition > b.variantPosition ? 1 : -1
  );
};

run();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// const makeRequest = async (id) => {
//   console.log(`getting record ${id}`);
//   await sleep(2000);
//   return id * 2;
// };

// const runSeries = async () => {
//   const results = [];

//   for (const id of values) {
//     const result = await makeRequest(id);
//     results.push(result);
//   }

//   console.log(results);
// };

// const runParallel = async () => {
//   const promises = values.map((id) => makeRequest(id));
//   const results = await Promise.all(promises);
//   console.log(results);
// };

// runSeries();

// runParallel();

// function run() {
//   console.log(values.map((value) => value * 2));
// }

// run();
