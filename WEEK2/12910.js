const dividing = function (arr, divisor) {
  arr = arr.sort((a, b) => a - b);
  let returnArr = arr.filter((e) => e % divisor === 0);
  if (returnArr.length === 0) returnArr = [-1];
  return returnArr;
};
console.log(dividing([5, 9, 7, 10], 5));
console.log(dividing([2, 36, 1, 3], 1));
console.log(dividing([3, 2, 6], 10));
