const { createInterface } = require("readline");
const conductor = require("./conductor");
const { ExitCommand, CreateCommand } = require("./commands");
let rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("create <fileName> <text> | history | undo | redo | exit");
rl.prompt();

rl.on("line", input => {
  let [commandText, ...reamining] = input.split(" ");
  let [fileName, ...fileText] = reamining;
  let text = fileText.join(" ");

  switch (commandText) {
    case "exit":
      conductor.run(new ExitCommand());
      break;
    case "history":
      conductor.printHistory();
      break;
    case "undo":
      conductor.undo();
      break;
    case "redo":
      conductor.redo();
      break;
    case "create":
      conductor.run(new CreateCommand(fileName, text));
      break;
    default:
      console.log(`${commandText} command not found!`);
  }
});

rl.prompt();
