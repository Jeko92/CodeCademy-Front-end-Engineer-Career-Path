// Objects
const fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel",
};

// Accessing Properties
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

//  Dot(.) Notation
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

// Bracket Notation
let spaceship1 = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";
// const isActive = spaceship["Active Mission"];
const isActive = spaceship[propName];
console.log(isActive);

// Property Assignment
let spaceship2 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

spaceship2.color = "glorious gold";
spaceship2.numEngines = 7;
delete spaceship2["Secret Mission"];

// Methods
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

// Nested Objects
let spaceship3 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
const capFave = spaceship3.crew.captain["favorite foods"][0];
spaceship3.passengers = [
  {
    name: "Stalker",
    age: 35,
    country: "Germany",
  },
  {
    name: "George",
    age: 45,
    country: "USA",
  },
];

const firstPassenger = spaceship3.passengers[0];

// Pass By Reference
let spaceship4 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

const greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

const remotelyDisable = (obj) => (obj.disabled = true);

greenEnergy(spaceship4);
remotelyDisable(spaceship4);
console.log(spaceship4);

// Looping Through Objects
let spaceship5 = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let crewMember in spaceship5.crew) {
  console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`);
}

for (let crewMember in spaceship5.crew) {
  console.log(
    `${spaceship5.crew[crewMember].name}: ${spaceship5.crew[crewMember].degree}`
  );
}
