const prompt = require("prompt-sync")({ sigint: true });

class Field {
  constructor() {
    this._numOfMoves = 1;
    this._instructions =
      'Find Your Hat Game: \r\nYour goal is to navigate through \x1b[32m Field\x1b[37m so that you avoid \x1b[31m"O"\x1b[37m-s  and find a lost hat-\x1b[42m\x1b[37m"^""\x1b[0m"\r\n(For navigation Please choose one of the following options: r-RIGHT,l-LEFT,u-UP,d-DOWN))\n There are 3 different fields to play: "Enchanted Glade"(Small), "Dragon\'s Embrace"(Medium), "Realm of Titans"(Big) \nGame has 3 difficulty Levels: beginner, intermediate or expert\n';
  }

  static generateField(height, width, difficultyLvl) {
    const hat = "^";
    const hole = "O";
    const fieldCharacter = "░";
    const pathCharacter = "*";
    let percentage =
      difficultyLvl === "beginner"
        ? 20
        : difficultyLvl === "intermediate"
        ? 35
        : 45;

    // Calculate the total number of holes
    const totalHoles = Math.floor((width * height * percentage) / 100);

    // Initialize the 2D array with fieldCharacters
    const field = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => fieldCharacter)
    );

    // Generate random position for the hat and place it in the field
    const { x: hatX, y: hatY } = Field.getRandomUniquePosition(height, width);
    field[hatY][hatX] = hat;

    // Place the pathCharacter at the start (top-left corner)
    field[0][0] = pathCharacter;

    // Generate random positions for holes and place them in the field
    for (let i = 0; i < totalHoles; i++) {
      let x, y;
      do {
        ({ x, y } = Field.getRandomUniquePosition(height, width));
      } while (
        field[y][x] === hole ||
        (x === 0 && y === 0) ||
        (x === hatX && y === hatY)
      ); // Ensure the pathCharacter is not overwritten

      field[y][x] = hole;
    }
    return field;
  }

  static getRandomUniquePosition(height, width) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    return { x, y };
  }

  static getDifficultyInput() {
    while (true) {
      const input = prompt(
        "Please provide difficulty Level you want to play 🎮. (b for'Beginner', I for 'Intermediate' or  e for 'Expert')-"
      )
        .trim()
        .toLowerCase();
      // List of desired inputs
      const difficultyLvls = ["b", "i", "e"];

      // Check if the user input is one of the desired inputs
      if (difficultyLvls.includes(input)) {
        return input;
        break; // Exit the loop when valid input is provided
      } else {
        console.log("Invalid input. Please try again.");
      }
    }
  }

  static getFieldSizeInput() {
    let fieldSizeProvided = false;
    const fieldSizes = ["s", "m", "l"];
    let dimensions = [9, 9]; // Default dimensions

    while (true) {
      const fieldSizeInput = prompt(
        "Please provide which size of field you want to play (s for Small, m for Medium, or l for Large):"
      )
        .trim()
        .toLowerCase();

      // Check if the user input is one of the desired inputs
      // Set the height and width based on the user's choice
      if (fieldSizes.includes(fieldSizeInput)) {
        dimensions =
          fieldSizeInput === "s"
            ? [5, 5]
            : fieldSizeInput === "m"
            ? [9, 9]
            : [13, 13];
        break; // Exit the loop when valid input is provided
      } else {
        console.log("Invalid input. Please try again.");
      }
    }
    return dimensions;
  }

  init() {
    console.log(this._instructions);
    let difficultyLvl = Field.getDifficultyInput();
    let [width, height] = Field.getFieldSizeInput();

    this.field = Field.generateField(width, height, difficultyLvl);
  }

  play() {
    let x = 0;
    let y = 0;

    while (true) {
      console.log(
        this.field.map((fieldPath) => fieldPath.join("")).join("\r\n")
      );
      const direction = prompt(
        "Please choose your direction (d for down, l for left, u for up, r for right):"
      )
        .trim()
        .toLowerCase();

      // Calculate new position based on the chosen direction
      let newX = x;
      let newY = y;
      switch (direction) {
        case "d":
          newY++;
          break;
        case "l":
          newX--;
          break;
        case "u":
          newY--;
          break;
        case "r":
          newX++;
          break;
        default:
          console.log("Invalid direction. Please try again.");
          continue;
      }

      // Check if the new position is outside the field
      if (
        newX < 0 ||
        newY < 0 ||
        newX >= this.field[0].length ||
        newY >= this.field.length
      ) {
        console.log(
          `Game Over in ${this._numOfMoves} moves: You went outside the field!`
        );
        break;
      }

      const newPosition = this.field[newY][newX];

      if (newPosition === "O") {
        console.log(
          `Game Over in ${this._numOfMoves} moves: You landed on a hole!`
        );
        break;
      } else if (newPosition === "^") {
        console.log(
          `Congratulations! You found the hat in ${this._numOfMoves} moves! 🎮 `
        );
        break;
      }

      // Update the current position
      x = newX;
      y = newY;
      this.field[y][x] = "*"; // Mark the path with "*"
      this._numOfMoves++;
    }
  }
}

const myField = new Field();
const myField1 = new Field();
// myField.init(10, 10);
// myField.play();
myField1.init(3, 10);
myField1.play();
