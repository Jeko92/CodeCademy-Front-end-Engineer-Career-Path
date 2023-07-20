//  Practice JavaScript Syntax: Classes - Challenge Nr.1-Library

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  movieTime() {
    return this.data - this.users * 5 >= 10;
  }
}

//  Practice JavaScript Syntax: Classes - Challenge Nr.2-Balloon Attack
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);
const balloonAttack = (p1, p2) => {
  let winner;
  if (p1.hitsPerMinute > p2.hitsPerMinute) {
    winner = p1.name;
  } else if (p1.hitsPerMinute < p2.hitsPerMinute) {
    winner = p2.name;
  } else {
    winner = "Tie";
  }
  return winner;
};

//  Practice JavaScript Syntax: Classes - Challenge Nr.3-ShiftCipher

class ShiftCipher {
  constructor(shiftCount) {
    this._shiftCount = shiftCount;
    this._alphabet = {
      97: "a",
      98: "b",
      99: "c",
      100: "d",
      101: "e",
      102: "f",
      103: "g",
      104: "h",
      105: "i",
      106: "j",
      107: "k",
      108: "l",
      109: "m",
      110: "n",
      111: "o",
      112: "p",
      113: "q",
      114: "r",
      115: "s",
      116: "t",
      117: "u",
      118: "v",
      119: "w",
      120: "x",
      121: "y",
      122: "z",
    };
  }

  encrypt(str) {
    console.log(str.toLowerCase().split(""));
    return str
      .toLowerCase()
      .split("")
      .map((char, i, arr) => {
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
          if (char.charCodeAt(0) + this._shiftCount > 122) {
            return this._alphabet[char.charCodeAt(0) - 26 + this._shiftCount];
          } else {
            return this._alphabet[char.charCodeAt(0) + this._shiftCount];
          }
        } else {
          return char;
        }
      })
      .join("")
      .toUpperCase();
  }

  decrypt(str) {
    console.log(str.toLowerCase().split(""));
    return str
      .toLowerCase()
      .split("")
      .map((char, i, arr) => {
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
          if (char.charCodeAt(0) - this._shiftCount < 97) {
            return this._alphabet[char.charCodeAt(0) - this._shiftCount + 26];
          } else {
            return this._alphabet[char.charCodeAt(0) - this._shiftCount];
          }
        } else {
          return char;
        }
      })
      .join("");
  }
}

const myCipher = new ShiftCipher(2);
myCipher.encrypt("I love to code!");
console.log(myCipher.encrypt("I love to code!"));
myCipher.decrypt("K <3 OA RWRRA");
console.log(myCipher.decrypt("K <3 OA RWRRA"));
