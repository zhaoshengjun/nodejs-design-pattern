const Store = require("./store");
const inventory = require("./inventory");

let skiShop = new Store("Steep and Deep", inventory);
let searchItem = "ski poles";
let results = skiShop.find(searchItem);

console.log(results);
