//RandomCases.js
class Case {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const cases = [
  new Case("Case1", Math.floor(Math.random() * 10) + 1),
  new Case("Case2", Math.floor(Math.random() * 10) + 1),
  new Case("Case3", Math.floor(Math.random() * 10) + 1),
  new Case("Case4", Math.floor(Math.random() * 10) + 1),
  new Case("Case5", Math.floor(Math.random() * 10) + 1),
  new Case("Case6", Math.floor(Math.random() * 10) + 1),
  new Case("Case7", Math.floor(Math.random() * 10) + 1),
  new Case("Case8", Math.floor(Math.random() * 10) + 1),
  new Case("Case9", Math.floor(Math.random() * 10) + 1),
  new Case("Case10", Math.floor(Math.random() * 10) + 1),
  new Case("Case11", Math.floor(Math.random() * 10) + 1),
  new Case("Case12", Math.floor(Math.random() * 10) + 1),

];

module.exports = cases;
