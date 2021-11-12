const answers = [1, 2, 3, 4, 5];
const answers1 = [
  1, 3, 2, 4, 2, 3, 5, 1, 4, 2, 3, 4, 5, 1, 2, 2, 4, 1, 1, 2, 3,
];

function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score1 = answers.filter((e, i) => {
    return e === arr1[i % arr1.length];
  }).length;
  const score2 = answers.filter((e, i) => {
    return e === arr2[i % arr2.length];
  }).length;
  const score3 = answers.filter((e, i) => {
    return e === arr3[i % arr3.length];
  }).length;
  const max = Math.max(score1, score2, score3);
  const answer = [];
  [score1, score2, score3].map((e, i) => {
    if (e === max) answer.push(i + 1);
  });
  return answer;
}
console.log(solution(answers));
console.log(solution(answers1));

// 다시 풀기 (array를 전부 만들 필요가 없음!)
// function solution(answers) {
//   let score1 = 0;
//   let score2 = 0;
//   let score3 = 0;

//   let array1 = new Array();
//   let array2 = new Array();
//   let array3 = new Array();

//   for (let i = 0; array1.length <= answers.length; i++) {
//     array1[0 + 5 * i] = 1;
//     array1[1 + 5 * i] = 2;
//     array1[2 + 5 * i] = 3;
//     array1[3 + 5 * i] = 4;
//     array1[4 + 5 * i] = 5;
//   }
//   for (let i = 0; array2.length <= answers.length; i++) {
//     array2[0 + 8 * i] = 2;
//     array2[2 + 8 * i] = 2;
//     array2[4 + 8 * i] = 2;
//     array2[6 + 8 * i] = 2;
//     array2[1 + 8 * i] = 1;
//     array2[3 + 8 * i] = 3;
//     array2[5 + 8 * i] = 4;
//     array2[7 + 8 * i] = 5;
//   }
//   for (let i = 0; array3.length <= answers.length; i++) {
//     array3[0 + 10 * i] = 3;
//     array3[1 + 10 * i] = 3;
//     array3[2 + 10 * i] = 1;
//     array3[3 + 10 * i] = 1;
//     array3[4 + 10 * i] = 2;
//     array3[5 + 10 * i] = 2;
//     array3[6 + 10 * i] = 4;
//     array3[7 + 10 * i] = 4;
//     array3[8 + 10 * i] = 5;
//     array3[9 + 10 * i] = 5;
//   }

//   answers.forEach((e, i) => {
//     if (e === array1[i]) {
//       score1 = score1 + 1;
//     }
//     if (e === array2[i]) {
//       score2 = score2 + 1;
//     }
//     if (e === array3[i]) {
//       score3 = score3 + 1;
//     }
//   });
//   const max = Math.max(score1, score2, score3);
//   const answer = [];
//   [score1, score2, score3].map((e, i) => {
//     if (e === max) answer.push(i + 1);
//   });
//   return answer;
// }
// console.log(solution(answers));
// console.log(solution(answers1));
