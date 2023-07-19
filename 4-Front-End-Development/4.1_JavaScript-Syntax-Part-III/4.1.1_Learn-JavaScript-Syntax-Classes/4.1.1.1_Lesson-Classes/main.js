// 1/12-Introduction to Classes
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog("Halley");
console.log(halley.name);

console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);

// 2/12-Constructor
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
}

// 3/12-Instance
/* class Surgeon {
  constructor() {
    this.name = name;
    this.department = department;
  }
}

const sugeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics"); */

// 4/12-Methods
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

//  5/12-Method Calls
console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

// 6/12 -Inheritance I --See inheritance-diagram.svg

// 7/12 -Inheritance II
/* class HospitalEmployee {
  constructor(name, insurance) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Doctor extends HospitalEmployee {
  constructor(name) {}
}

class Nurse extends HospitalEmployee {
  constructor(certifications) {
    this._certifications = certifications;
  }

  addCertification(certification) {
    this._certifications.push(certification);
  }
} */

// 8/12 -Inheritance III
class HospitalEmployee {
  constructor(name, insurance) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }

  // 11/12 - Static Methods
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Doctor extends HospitalEmployee {
  constructor(name) {}
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  // 10/12 -Inheritance V
  get certifications() {
    return this._certifications;
  }

  addCertification(certification) {
    this._certifications.push(certification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

// 9/12 -Inheritance IV
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

// 10/12 -Inheritance V
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

// 11/12 - Static Methods

// 12/12 - Review: Classes
/*
-Classes are templates for objects.
-Javascript calls a constructor method when we create a new instance of a class.
-Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
-We use the extends keyword to create a subclass.
-The super keyword calls the constructor() of a parent class.
-Static methods are called on the class, but not on instances of the class. 
*/
