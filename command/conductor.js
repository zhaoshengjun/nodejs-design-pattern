class Conductor {
  constructor() {
    this.history = [];
    this.undone = [];
  }
  run(command) {
    console.log(`Executing command: ${command.name}`);
    this.history.push(command);
    this.printHistory();
    command.execute();
  }

  printHistory() {
    this.history.forEach(cmd => console.log(cmd.name));
  }

  undo() {
    let command = this.history.pop();
    console.log(`undo ${command.name}`);
    command.undo();
    this.undone.push(command);
  }

  redo() {
    let command = this.undone.pop();
    console.log(`redo ${command.name}`);
    command.execute();
    this.history.push(command);
  }
}

module.exports = new Conductor();
