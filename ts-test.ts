const typedAdd = (a: number, b: number): number => {
  return a + b;
}

const sum = typedAdd(3, 4);

console.log(sum)

const fail = typedAdd("car", "tree")

interface Car {
  doors: number,
  color: string
}

const myCar: Car = {
  doors: 5,
  color: "red"
}