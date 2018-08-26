const logger = require("./logger");

logger.log("Hello world");
logger.log("Hi world");
logger.log("Yo world");

logger.changeStrategy("toFile");
logger.log("Hello world");
logger.log("Hi world");
logger.log("Yo world");
