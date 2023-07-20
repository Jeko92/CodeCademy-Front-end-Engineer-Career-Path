# Challenge Nr.1

You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

Use the following Network class to track how much total data and how many users each network has:

```javascript
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}
```

The properties of the `Network` class are:

- **data:** Total units of data supplied by the network
- **users:** Total numbers of users currently on the network
  Each user on average deducts 5 units from the network’s total `data`. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method `movieTime()` to the `Network` class that returns `true` if there is enough data available to watch a movie, `false` if there isn’t.

Example:

```js
const library = new Network(50, 9);
library.movieTime(); // returns false
```

<hr>

# Challenge Nr.2

A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

```js
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
```

Write a game function `balloonAttack` that takes two `Player` instances, calculates the balloons left for each player after 10 minutes (using the `hitsPerMinute` property) and returns the name of the winner. If the result is a tie, return the string `'Tie'`.

You can test your `balloonAttack` function by creating two instances of the `Player` class to use as arguments for your function like below:

```js
const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

balloonAttack(p1, p2);
```

Feel free to use the `status()` method to output each player’s balloon count at any given time.

<hr>

# Challenge Nr.2

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string `'hello'` to `'ifmmp'`.

Create a class `ShiftCipher` that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

- **encrypt:** takes a plain text string and returns a capitalized string with each letter shifted forward in - the alphabet based on the set shift value.
- **decrypt:** takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
- In both methods, any character outside the alphabet should remain the same.
- But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

Example:

```js
const cipher = new ShiftCipher(2);
cipher.encrypt("I love to code!"); // returns 'K NQXG VQ EQFG!'
cipher.decrypt("K <3 OA RWRRA"); // returns 'i <3 my puppy'
```

Feel free to reference the [Unicode Table]([Unicode Table](https://en.wikipedia.org/wiki/List_of_Unicode_characters)) as well as the [JavaScript String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) including: `toUpperCase()`, `toLowerCase()`, `charCodeAt()` and `fromCharCode()`
