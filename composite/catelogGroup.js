class CatelogGroup {
  constructor(name, list) {
    this.name = name;
    this.list = list;
  }

  get total() {
    return this.list.reduce((total, nextItem) => (total += nextItem.total), 0);
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.list.forEach(item => item.print());
  }
}

module.exports = CatelogGroup;
