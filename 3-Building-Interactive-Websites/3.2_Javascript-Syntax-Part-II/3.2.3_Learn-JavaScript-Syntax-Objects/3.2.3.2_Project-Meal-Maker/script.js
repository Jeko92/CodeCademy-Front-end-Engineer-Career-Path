const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._meal !== "" && this._price >= 0) {
      return `Today\'s Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

// menu._meal = "Pizza";
// menu._price = 15;
// console.log(menu);
menu.meal = "Khachapuri";
menu.price = 14;
console.log(menu);
console.log(menu.todaysSpecial);
