/**
 * Given an array of integers, should find the smallest integer
 * @param {Array} arr array of integers to search on
 */
function fun_findSmallestInt(arr) {
  return arr.reduce((a, b) => (a < b ? a : b));
}

class SmallestIntegerFinder {
  constructor(zahlen) {
    this.zahlen = zahlen;
  }
  findSmallestInt(args) {
    return args.reduce((a, b) => (a < b ? a : b));
  }
  findBiggesttInt() {
    return this.zahlen.reduce((a, b) => (a < b ? b : a));
  }
}

let arr = [1, 2, 3, 4, 5, 6, -5];

console.log(fun_findSmallestInt(arr));

const p = new SmallestIntegerFinder();
console.log(p.findSmallestInt(arr));

const q = new SmallestIntegerFinder([1, 2, 3]);
console.log(q.findBiggesttInt());
