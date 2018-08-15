// this will use fs as localStorage

const { writeFile, existsSync, readFileSync, unlink } = require("fs");
class localStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("loading items from localStorage.json");
      let txt = readFileSync("localStorage.json");
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }
  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    console.log(this.items);
    writeFile("localStorage.json", JSON.stringify(this.items), error => {
      if (error) console.error(error.message);
    });
  }

  clear() {
    this.items = {};
    unlink("localStorage.json", () => console.log("localStroage file removed"));
  }
}

module.exports = new localStorage();
