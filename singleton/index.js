const logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./store");

logger.log("Starting app...");

let alex = new Shopper("alex", 500);
let ski_shop = new Store("Steeep and Deep Supplies", [
  { item: "Downhill Skies", qty: 5, price: 750 },
  { item: "Knit Hat", qty: 20, price: 5 }
]);

logger.log(`Finishing config...`);

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`${log.message}`));
