const Logger = require("./logger");
let logger = new Logger().getInstance();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in hand.`);
  }
}

module.exports = Shopper;
