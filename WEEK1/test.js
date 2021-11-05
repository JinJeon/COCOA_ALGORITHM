let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf-8").toString().split("\n");

const inputArr = input.map((val) => val.split("")); // 문자를 하나씩 쪼갬
const getScore = (arr) => {
  let score = 0;
  for (i = 0; i < arr.length; i++) {
    const route = (i) => {
      if (arr[i] === "O") {
        score += 1;
        route(i + 1);
      }
      return;
    };
    route(i);
    // ** 반복 줄이기 **
    // if (arr[i] === "O") {
    //   score += 1;
    //   if (arr[i + 1] === "O") {
    //     score += 1;
    //     if (arr[i + 2] === "O") {
    //       score += 1;
    //       if (arr[i + 3] === "O") {
    //         score += 1;
    //       }
    //     }
    //   }
    // }
  }
  return score;
};
const scoreArr = inputArr.map(getScore);
scoreArr.splice(0, 1);
console.log(scoreArr.join("\n"));
