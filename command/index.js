const { createInterface } = require("readline");
let rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("create <fileName> <text> | exit");
rl.prompt();

rl.on("line", input => {
  let [commandText, ...reamining] = input.split(" ");
  let [fileName, ...fileText] = reamining;
  let text = fileText.join(" ");

  switch (commandText) {
    case "exit":
      console.log("TODO: exit");
      break;
    case "create":
      console.log(`TODO: create file ${fileName}`);
      console.log("file contents:", text);
      break;
    default:
      console.log(`${commandText} command not found!`);
  }
});

rl.prompt();
