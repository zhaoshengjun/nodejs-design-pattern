class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
  }

  find(itemName) {
    let mapArray = [];
    for (let prop in this.inventory) {
      console.log(prop);
      mapArray = [...mapArray, ...this.inventory[prop]];
    }
    let index = mapArray.map(item => item.name).indexOf(itemName);
    return mapArray[index];
  }
}

module.exports = Store;
