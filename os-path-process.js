const path = require("path");
const os = require("os");
const process = require("process");

//print current working dir
const cwd = path.resolve();
console.log(`Current directory: ${cwd}`);

//print seperator
const pathSeperator = path.sep;
console.log(pathSeperator);

//print the extension name
const extName = path.extname(
  "C:UsersUSERDesktopProjectsAlt-modules-serveros-path-process.js"
);
console.log(`The extension for this file is ${extName}`);

//print the process ID
const processId = process.pid;
console.log(`The process id is: ${processId}`);

// print the user info
const userInfo = os.userInfo();
console.log(userInfo);

//print the os Platform
const osPlatform = os.platform();
console.log(`The platform of this OS is: ${osPlatform}`);
