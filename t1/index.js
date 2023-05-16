const _ = require("lodash");

const filterEvenNumbers = (numbers) => {
  return _.filter(numbers, (num) => num % 2 === 0);
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = filterEvenNumbers(numbersArray);

const calculateAverage = (numbers) => {
  const sum = _.sum(numbers);
  const average = sum / numbers.length;
  return average;
};

const average = calculateAverage(numbersArray);

const getUniqueValue = (array) => {
  return _.uniq(array);
};

const valuesArray = [1, 2, 3, 4, 4, 5, 5, 6, 6];
const uniqueValues = getUniqueValue(valuesArray);

console.log(uniqueValues,"unique values");
console.log(average, "average");
console.log(filteredNumbers, "filtered array");
