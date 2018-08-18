const Shopper = require("./Shopper");
const InventoryItem = require("./inventoryItem");

let alex = new Shopper("Alex", 100);

let walkman = new InventoryItem("Walkman", 29.99);
let necklace = new InventoryItem("Necklace", 9.99);

alex.purchase(necklace);
alex.purchase(walkman);
alex.printStatus();
