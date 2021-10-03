const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth - 1;
    if (hasNestedArray(arr)){
      const newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
    }
    return depth;
  }
};