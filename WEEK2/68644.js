const numbers = [2, 1, 3, 4, 1];
const numbers2 = [5, 0, 2, 7];
function solution(numbers) {
  let answer = [];
  numbers.forEach((element, index, array) => {
    for (let i = 1; index + i < array.length; i++)
      answer.push(element + array[index + i]);
  });
  answer = Array.from(new Set(answer)).sort((a, b) => a - b);
  return answer;
}
console.log(solution(numbers));
console.log(solution(numbers2));
