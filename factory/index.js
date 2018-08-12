const Shopper = require("./shopper");
const Employee = require("./employee");

let alex = new Shopper("Alex Banks", 100);
let eve = new Employee("Eve Porecllo", 100, "this and that");

console.log(alex.toString());
console.log(eve.toString());
