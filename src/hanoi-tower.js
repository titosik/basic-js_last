const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  throw new CustomError('Not implemented');
  const turnsPerSecond = turnsSpeed / 3600;
  const turns = (2 ** disksNumber) - 1;
  const seconds = turns / turnsPerSecond;

  return {
    turns,
    seconds
  };
};