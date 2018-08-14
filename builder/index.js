const PersonBuilder = require("./personBuilder");

// Employees
let sue = new PersonBuilder("Sue")
  .makeEmployee()
  .makeManager(60)
  .build();
let bill = new PersonBuilder("Bill")
  .makeEmployee()
  .makePartTime()
  .build();
let phil = new PersonBuilder("Phil").makeEmployee().build();

// Shoppers
let charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["Jean", "Sunglass"])
  .build();

let tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();
console.log(sue.toString());
console.log(charles.toString());
