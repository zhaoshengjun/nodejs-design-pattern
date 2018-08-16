const path = require("path");
let FSProxy = require("./fsProxy");

const fs = new FSProxy(require("fs"));

let txtFile = path.join(__dirname, "readme.txt");
let mdFile = path.join(__dirname, "readme.md");

let result = (err, contents) => {
  if (err) {
    console.log("\x07");
    console.error(err);
    process.exit(0);
  }
  console.log("reading file ...");
  console.log(contents);
};

fs.readFile(mdFile, "UTF-8", result);
