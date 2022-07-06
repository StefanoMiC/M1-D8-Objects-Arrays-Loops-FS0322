console.log("\n-------------ARRAYS---------------");

// Arrays are COLLECTIONS of elements (numbers, booleans, strings, objects)

let arrayOfAnimals = ["Dog", "Cat", "Mouse", "Rabbit", "Duck", "Bird", "Goldfish"];

console.log(arrayOfAnimals);

let arrayOfMultiplesOf5 = [5, 10, 15, 20, 25, 30];
console.log(arrayOfMultiplesOf5);

let arrayOfBooleans = [true, false, true, true, false];
console.log(arrayOfBooleans);

let arrayOfOrders = [
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
];
console.log(arrayOfOrders);

// Even if this is allowed, PLEASE AVOID MIXING DIFFERENT DATA TYPES inside of a single array
let mixedArray = [54, "Gorilla", -1982, false, {}];

console.log("\n-------------LENGTH OF AN ARRAY---------------");
console.log(`Our array has ${arrayOfAnimals.length} animals`);

console.log("\n-------------ACCESSING THE CONTENT OF AN ARRAY---------------");

let smallNumbers = [5, 7, 9, 1, 3, 4, 0, 32]; // Zero-based indexing
//        index:    0  1  2  3  4  5  6

console.log(`The third element of the array is: ${smallNumbers[2]}`);
let lastIndexOfSmallNumbers = smallNumbers.length - 1;
console.log(`The last element of the array is: ${smallNumbers[lastIndexOfSmallNumbers]}`);
console.log("The QUANTITY of the second order is: ", arrayOfOrders[1].quantity);

console.log("\n-------------CONCATENATING ARRAYS---------------");
let union = arrayOfMultiplesOf5.concat(smallNumbers);
console.log(union);

console.log("\n-------------PUSH A NEW ITEM AT THE END OF THE ARRAY---------------");

union.push(111);
console.log("PUSH", union);

console.log("\n-------------REMOVE THE LAST ITEM FROM AN ARRAY---------------");

smallNumbers.pop();
console.log(smallNumbers);

console.log("\n-------------ADD AN ITEM IN THE FOURT POSITION OF THE ARRAY---------------");
// We wanted to add the number 6 in the fourth position of the collection (index: 3)
// we didn't want to remove any element from it so the delete count is: 0
smallNumbers.splice(3, 0, 6); // index, deleteCount, newItemToInsert
console.log(smallNumbers);

console.log("\n-------------REMOVING AN ITEM FROM AN ARRAY---------------");

let removedItems = smallNumbers.splice(4, 3);
console.log(smallNumbers);

console.log(removedItems[1]);

console.log("\n-------------GETTING THE INDEX OF AN ELEMENT IN AN ARRAY---------------");
console.log(smallNumbers.indexOf(9));

let indexOfRabbit = arrayOfAnimals.indexOf("Rabbit");
console.log("The index of 'Rabbit' is: " + indexOfRabbit);

let copyOfAnimalsArr = arrayOfAnimals.slice();
copyOfAnimalsArr.splice(indexOfRabbit, 1); // we've removed Rabbit from the collection

console.log("ORIGINAL ARRAY", arrayOfAnimals);
console.log("COPIED ARRAY", copyOfAnimalsArr);

console.log("\n-------------GETTING A SUBSET OF AN ARRAY---------------");

console.log(copyOfAnimalsArr.slice(1, 3)); // this method doesn't mutate the original which remains intact, it returns a COPY of the original

console.log("\n-------------NESTED ARRAYS---------------");

let nestedArray = [
  [1, 2, 3, 4],
  [1, 5, 1, 2],
  [10, [9], 5, 4],
];

console.log(nestedArray[2][1][0]);

console.log("Hello Epicoders!".split());

console.log("Banana".toLowerCase() === "banana".toLowerCase());
console.log(smallNumbers[0].toString());

console.log("HELLO EPICODERS!".split("").indexOf(" "));
