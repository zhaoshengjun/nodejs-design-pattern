const userFactory = require("./userFactory");

let alex = userFactory("Alex Banks", 100);
let eve = userFactory("Eve Porecllo", 100, "employee", "this and that");

console.log(alex.toString());
console.log(eve.toString());
