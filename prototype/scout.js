const Shopper = require("./shopper");

let scout = new Shopper("Alex Banks");
scout.addItemToList("camping knife");
scout.addItemToList("tent");
scout.addItemToList("backpack");
scout.addItemToList("map");

module.exports = scout;
