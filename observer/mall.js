class Mall {
  constructor(name) {
    this.name = name;
    this.sales = [];
  }
  notify(storeName, discount) {
    this.sales.push({ storeName, discount });
  }
}

module.exports = Mall;
