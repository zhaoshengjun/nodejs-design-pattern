class Conductor {
  constructor() {
    this.history = [];
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
}

module.exports = new Conductor();
