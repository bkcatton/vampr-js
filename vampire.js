class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    for (let items of this.offspring) { 
      items['creator'] = this;
    };
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let checkVal = this.creator;
    let howDeep = 0;
    while (checkVal !== null) {
      checkVal = checkVal.creator;
      howDeep += 1;
    }
    return howDeep;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    let valOne = this.numberOfVampiresFromOriginal;
    let valTwo = vampire.numberOfVampiresFromOriginal;
    if (valOne > valTwo) return false;
    if (valOne < valTwo) return true;
  };

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const jim = new Vampire('jim', 2015, );
const bill = new Vampire('bill', 2021);
let pam = new Vampire("pam", 2017);
let sewa = new Vampire("sewa", 2018);

jim.addOffspring(bill); //adding bill as offspring


jim.addOffspring(pam);
pam.addOffspring(sewa);
console.log(sewa.isMoreSeniorThan(pam));
// console.log(jim.isMoreSeniorThan(sewa));
// console.log(sewa.isMoreSeniorThan(jim));
// console.log(pam.isMoreSeniorThan(jim));
// console.log(jim.isMoreSeniorThan(pam));
console.log(pam.isMoreSeniorThan(sewa));


module.exports = Vampire;

