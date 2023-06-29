// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDna(anotherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        arr[idx] === anotherOrg[idx] ? acc++ : acc;
      }, 0);
      const percentOfDNAshared = (
        (similarities / this.dna.length) *
        100
      ).toFixed(2);
      console.log(
        `${this.specimanNum} and ${otherOrg.specimanNum} have ${percentOfDNAshared}% DNA in common.`
      );
    },
    willLikelySurvive() {
      return (
        this.dna.filter((dnaBase) => dnaBase === "C" || dnaBase === "G")
          .length /
          this.dna.length >=
        0.6
      );
    },
  };
};

const willSurvive = [];
let counter = 30;

for (let i = 0; i < counter; i++) {
  let newSpecimen = pAequorFactory(i, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    willSurvive.push(newSpecimen);
  }
}

console.log(willSurvive);
