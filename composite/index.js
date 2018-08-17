const CatelogItem = require("./catelogItem");

let boots = new CatelogItem("Leather boots", 79.99);
let sneakers = new CatelogItem("Kicks", 39.99);
let flipFlops = new CatelogItem("California wook boots", 19.99);

console.log("boots total:", `$${boots.total}`);

boots.print();
sneakers.print();
