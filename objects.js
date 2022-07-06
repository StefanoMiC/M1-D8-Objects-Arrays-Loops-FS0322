console.log("\n--------------------CREATING AN OBJECT----------------");

//KEY-VALUE pairs
let student = {
  firstName: "Gordon", // This is a STRING property
  lastName: "Freeman",
  age: 38, // This is a NUMBER property
  batchName: "FS0322",
  hasWebcam: true, // This is a BOOLEAN property
  "discord name": "@gordon38",
}; // This way of defining the content of an Object is very similar to a JSON format ( JavaScript Object Notation )

console.log(student);

console.log("\n--------------------READING OBJECT PROPERTIES----------------");
// DOT NOTATION to access object's properties
let fullName = student.firstName + " " + student.lastName;

console.log("Full name of the student is: " + fullName);

console.log("\n--------------------CHANGING OBJECT PROPERTIES----------------");
console.log("BEFORE", student.hasWebcam);
student.hasWebcam = false;
console.log("AFTER", student.hasWebcam);

// student.age = student.age + 1;
// student.age += 1;
student.age++;

console.log("\n--------------------ADDING PROPERTIES TO AN OBJECT----------------");
student.location = "Italy";
student.propertyToRemove = null;

student.hasDrivingLicense = false;

console.log("\n--------------------REMOVING PROPERTIES TO AN OBJECT----------------");
console.log(student);

delete student.propertyToRemove;
console.log(student);

console.log("\n--------------------ALTERNATIVE WAY TO ACCESS PROPERTIES OF AN OBJECT----------------");
// THIS IS A SLIGHTLY MORE COMPLEX ALTERNATIVE, BUT MORE POWERFUL
// It's not something you will be using a lot in the beginning, but it will come very much in handy in the future

let discordName = student["discord name"];

console.log(discordName);

let stringToLookUp = "batchName";

console.log("DYNAMICLY ACCESSED PROPERTY", student.stringToLookUp); // student.stringToLookUp // THIS WILL LOOK FOR A PROPERTY CALLED stringToLookUp
console.log("DYNAMICLY ACCESSED PROPERTY", student[stringToLookUp]); // student["batchName"] //  THIS WILL LOOK FOR A PROPERTY CALLED "batchName" (value of stringToLookUp)

student.age = 15;
let propertyName = student.age >= 18 ? "hasDrivingLicense" : "hasScooterLicense";
console.log("propertyName", propertyName);

console.log(student);
student[propertyName] = true; // student["hasDrivingLicense"], student["hasScooterLicense"]
console.log(student);

let initialStr = "first";
let endStr = "Name";

console.log("First name -> computed value:", student[initialStr + endStr]); // student["first" + "Name"] => student["firstName"]

console.log("\n--------------------USING AN OBJECT AS A DICTIONARY----------------");
// THIS IS A SLIGHTLY MORE COMPLEX ALTERNATIVE, BUT MORE POWERFUL
// It's not something you will be using a lot in the beginning, but it will come very much in handy in the future

let fruitDictionary = {
  apple: "loved by Snow White, scares doctors away",
  banana: "long yellow fruit, loved by monkeys",
  coconut: "hard round fruit spotted on tropical islands",
};

let fruitThatTheUSerWantsToKnowAbout = "banana";

let definition = fruitDictionary[fruitThatTheUSerWantsToKnowAbout];

if (definition !== undefined) {
  console.log(`Definition for ${fruitThatTheUSerWantsToKnowAbout}: ${definition}`);
} else {
  console.log(`Definition for ${fruitThatTheUSerWantsToKnowAbout} is unavailable, please try another fruit`);
}

console.log("\n--------------------NESTING OBJECTS INSIDE OF OBJECTS----------------");

delete student.location;

student.address = {
  street: "Boulevard of Broken Dreams, 21",
  city: "Dublin",
  country: "Ireland",
};

console.log(student);
console.log(`${student.firstName} is from ${student.address.country}`);
console.log(`${student["firstName"]} is from ${student["address"]["country"]}`);

student2 = student; // This way, we are just copying the LINK/reference/pointer/address of the initial student object
// BOTH variables (student and student2) will SHARE the same EXACT object
// by changing ANY property, BOTH variables will be affected because they refer to the same entity (object)

student2.firstName = "Morgan";
console.log("STUDENT 1:", student);
console.log("STUDENT 2:", student2);

console.log("\n--------------------ACTUALLY CLONING AN OBJECTS----------------");

// let student3 = {};
// Object.assign(student3, student, { batchName: "unknown", planet: "Mars" });

let student3 = Object.assign({}, student, { batchName: "unknown", planet: "Mars" });

// With the two lines above, we actually CREATED A NEW OBJECT, which is a SHALLOW COPY
// we've COPIED EVERY SINGLE PROPERTY NAME AND VALUE from the old object to the new one, BUT only for the first level
// we now have TWO DIFFERENT main objects, so chaning the first level values on one of them
// will NOT affect the other

// the nested object will need to be CLONED as well

student3.firstName = "John";
student3.lastName = "Doe";

student3.address = {};
Object.assign(student3.address, student.address);

student3.address.country = "Italy";

console.log(`After changing the name, student3 is ${student3.firstName} ${student3.lastName}`);
console.log(student3);
console.log(`After changing the name, student2 is ${student2.firstName} ${student2.lastName}`);
console.log(student2);
console.log(`After changing the name, student1 is ${student.firstName} ${student.lastName}`);
console.log(student);

console.log(student === student2);
