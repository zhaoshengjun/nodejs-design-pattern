const Shopper = require("./Shopper");
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require("./inventoryItem");

let alex = new Shopper("Alex", 10000);

let walkman = new InventoryItem("Walkman", 29.99);
let necklace = new InventoryItem("Necklace", 9.99);

let goldNecklace = new GoldenInventoryItem(necklace);
let diamondGoldNecklace = new DiamondInventoryItem(goldNecklace);
let diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(diamondGoldNecklace);
alex.purchase(diamondWalkman);
alex.printStatus();
