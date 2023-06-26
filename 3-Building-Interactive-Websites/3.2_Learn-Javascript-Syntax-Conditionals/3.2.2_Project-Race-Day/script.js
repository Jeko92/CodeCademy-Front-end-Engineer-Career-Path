let raceNumber = Math.floor(Math.random() * 1000);
// const registeredeEarly = false;
const registeredeEarly = true;
// const age = 30;
// const age = 17;
// const age = 23;
const age = 18;

if (registeredeEarly && age > 18) {
  console.log(
    `Your are ssigned a number: ${raceNumber} and you are going to run at: 9:30 am`
  );
} else if (!registeredeEarly && age > 18) {
  console.log(
    `Your are ssigned a number: ${raceNumber} and you are going to run at: 11:00 am`
  );
} else if (age < 18) {
  console.log(
    `Your are ssigned a number: ${raceNumber} and you are going to run at: 12:30 pm`
  );
} else {
  console.log(`Please go to the registration desk!`);
}
