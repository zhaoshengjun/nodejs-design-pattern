const CatelogItem = require("./catelogItem");
const CatelogGroup = require("./catelogGroup");

let boots = new CatelogItem("Leather boots", 79.99);
let sneakers = new CatelogItem("Kicks", 39.99);
let flipFlops = new CatelogItem("California wook boots", 19.99);

let groupShoes = new CatelogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops
]);

console.log("boots total:", `$${boots.total}`);
console.log("shoes total:", `$${groupShoes.total}`);

boots.print();
sneakers.print();
groupShoes.print();
