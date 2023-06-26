const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 7;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 8;
      break;
    case "Friday":
      return 10;
      break;
    case "Saturday":
      return 9;
      break;
    case "Sunday":
      return 8;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  actualSleepHours === idealSleepHours
    ? console.log("You've got perfect amount of sleep!🎉")
    : actualSleepHours > idealSleepHours
    ? console.log(
        `You\'ve sleeped more than needed. You slept ${
          actualSleepHours - idealSleepHours
        } hours more`
      )
    : console.log(
        `You should get some rest. You have ${
          idealSleepHours - actualSleepHours
        } hours of sleep debt 🥱`
      );
};

calculateSleepDebt();
