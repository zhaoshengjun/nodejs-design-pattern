const Store = require("./store");
const Shopper = require("./shopper");
const Mall = require("./mall");

let catsAndThings = new Store("Cats & Things");
let insAndOuts = new Store("Ins and Outs");
let alex = new Shopper("Alex");
let eve = new Shopper("Eve");
let sharon = new Shopper("Sharon");
let mike = new Shopper("Mike");
let valleyMall = new Mall();
catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
