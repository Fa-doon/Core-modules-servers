const fs = require("fs");
const path = require("path");

//CREATE STUDENTS DIRECTORY
// const studentsFolder = path.join(__dirname, "Students");
// fs.mkdir(studentsFolder, (err) => {
//   if (err) {
//     console.log(`An error occured while creating this folder: ${err}`);
//   }
//   console.log("Folder successfully created");
// });

// CREATE user.js to the students directory
const userFile = path.join(__dirname, "Students", "user.js");
const initialContent = "Fadoon";

fs.writeFile(userFile, initialContent, (err) => {
  if (err) {
    console.log(`An error occured: ${err}`);
    return;
  }
  console.log(`Successful!`);
});

// //adding more content to file
const hobbies = "\nTravelling";

fs.appendFile(userFile, hobbies, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Addition successful!");
});

const nationality = "\nNigerian";
fs.appendFile(userFile, nationality, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Addition successful!");
});

//Rename Students directory
const newFolder = path.join(__dirname, "Names");
fs.rename("./Students", newFolder, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`This folder has been renamed successfully`);
});

// rename user.js
fs.rename("./Names/user.js", "./Names/Fadoon_T.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`This file has been renamed successfully`);
});

//reading the Fadoon_T.js file
const renamedFile = path.join(__dirname, "Names", "Fadoon_T.js");
fs.readFile(renamedFile, "utf8", (err) => {
  if (err) {
    console.log(`An error has occured`);
  }
  console.log(`File read successfully!`);
});

//Delete Fadoon_T.js
fs.rm("./Fadoon_T.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been deleted successfully");
});

//Delete the 'Names' directory
fs.rmdir("./Names", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This folder has been deleted successfully");
});
