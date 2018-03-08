const ANCESTRY_DATA = require('./ancestry.js');

const ancestorsArray = JSON.parse(ANCESTRY_DATA);
// compute average age of difference between mothers and children
// when the child was born.

// convert array of nodes to normalized hash for O(1) lookup:
// { name1: node1, name2: node2, ... }

// function averageAgeDifference(ancestorsArray) {
//   ancestryMap = ancestorsArray.reduce((map, ancestor) => {
//     map[ancestor.name] = ancestor;
//     return map;
//   }, {});
//
//   // reduce the ancestry array to an array of mother-child differences.
//   ageDifferences = ancestorsArray.reduce((diffs, ancestor) => {
//     const mother = ancestryMap[ancestor.mother];
//     if (!mother) return diffs;
//
//     return diffs.concat(ancestor.born - mother.born);
//   }, []);
//
//   return ageDifferences.average();
// }

function historicalLifeExpectancy(ancestorsArray) {
  const ancestors = ancestorsArray.map(
    ancestor => new Ancestor(ancestor)
  );

  const centuries = ancestors.reduce((centuries, ancestor) => {
    const century = ancestor.getCentury();

    if (centuries[century])
      centuries[century].concat(ancestor.getAgeAtDeath());
    else
      centuries[century] = [ancestor.getAgeAtDeath()];

    return centuries;
  }, {});

  for (let century in centuries) {
    centuries[century] = centuries[century].average();
  }

  return centuries;
}

// helpers
Array.prototype.average = function () {
  return this.reduce((sum, num) => sum + num) / this.length;
};

class Ancestor {
  constructor(ancestor) {
    const { name, sex, born, died, father, mother } = ancestor;

    this.name = name;
    this.sex = sex;
    this.born = born;
    this.died =  died;
    this.father = father;
    this.mother = mother;
  }

  getCentury() {
    return Math.ceil(this.died / 100);
  }

  getAgeAtDeath() {
    return this.died - this.born;
  }
}
