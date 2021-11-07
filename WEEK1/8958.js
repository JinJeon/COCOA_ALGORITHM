const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  const inputArr = input.map((val) => val.split(""));
  console.log(inputArr); // 문자를 하나씩 쪼갬
  const getScore = (arr) => {
    let score = 0;
    arr.forEach((element, index) => {
      const scoreIs = (i) => {
        if (arr[i] === "O") {
          score += 1;
          scoreIs(i + 1);
        }
      };
      scoreIs(index);
    });
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
