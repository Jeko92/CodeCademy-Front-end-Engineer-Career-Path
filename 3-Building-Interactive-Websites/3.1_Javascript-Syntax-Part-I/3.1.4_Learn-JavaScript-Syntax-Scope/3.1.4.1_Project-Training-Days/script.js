// The scope of `random` is too loose
// const random = Math.floor(Math.random() * 3);
const userName = "Nala";

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (evnt) => {
  let days;
  if (evnt === "Marathon") {
    // let days = 50;
    days = 50;
  } else if (evnt === "Triathlon") {
    // let days = 100;
    days = 100;
  } else if (evnt === "Pentathlon") {
    // let days = 200;
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const logEvent = (name, evnt) => {
  // const name = "Nala";
  console.log(`${name}'s event is: ${evnt}`);
};

const logTime = (name, days) => {
  // const name = "Nala";
  console.log(`${name}'s time to train is: ${days} days`);
};

const evnt = getRandEvent();
const days = getTrainingDays(evnt);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

// logEvent(event);
logEvent(userName, evnt);
// logTime(days);
logTime(userName, days);
