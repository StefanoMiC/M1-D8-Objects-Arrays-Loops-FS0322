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
