const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  console.log(input);
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
}).on("close", function () {
  process.exit();
});

/*
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
*/
