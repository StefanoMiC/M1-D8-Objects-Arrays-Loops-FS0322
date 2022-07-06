console.log("\n-------------------MANUAL REPETITIONS-----------------");

console.log("NUMBER 1");
console.log("NUMBER 2");
console.log("NUMBER 3");
console.log("NUMBER 4");

// for (let index = 0; index < 100; index++) {
//   console.log("\nNumber " + (index + 1));
// }
let arrayOfAnimals = ["Dog", "Cat", "Mouse", "Rabbit", "Duck", "Bird", "Goldfish"];

// console.log(arrayOfAnimals[0])
// console.log(arrayOfAnimals[1])
// console.log(arrayOfAnimals[2])

for (let index = 0; index < arrayOfAnimals.length; index++) {
  console.log("--" + arrayOfAnimals[index]);
}

let arrayOfOrders = [
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
];

let total = 0;

for (let i = 0; i < arrayOfOrders.length; i++) {
  let order = arrayOfOrders[i];
  console.log("ORDER" + (i + 1), order.quantity);

  total += order.quantity;
}

console.log("TOTAL", total);
