let listOfCookies = [
  {
    key: "zelalem",
    val: "belyaneh",
  },

  {
    key: "nahom",
    val: "nigussie",
  },
];
class Cookies {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  static getAllCookies() {
    return listOfCookies;
  }

  static addCookies(ree) {
    return listOfCookies.push(ree);
  }
}

module.exports = Cookies;
