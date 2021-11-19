// https://www.hackerrank.com/challenges/compare-the-triplets/problem
const a = [34, 23, 31];
const b = [23, 42, 31];

function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;
  const comparing = function (element, index) {
    if (element === b[index]) return;
    if (element > b[index]) return (scoreA = scoreA + 1);
    if (element < b[index]) return (scoreB = scoreB + 1);
  };
  a.forEach(comparing);
  return [scoreA, scoreB];
}
console.log(compareTriplets(a, b));
