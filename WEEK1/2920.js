const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const numberArr = line.split(" ");
  // console.log(numberArr);
  const isAscend = () => {
    const Arr = numberArr.map((val, index) => {
      return Number(numberArr[index]) < Number(numberArr[index + 1]); // false 한 개 = ascend
    });
    return Arr.filter((e) => e === false).length === 1
      ? "ascending"
      : isDescend();
  };
  const isDescend = () => {
    const Arr = numberArr.map((val, index) => {
      return Number(numberArr[index]) > Number(numberArr[index + 1]); // false 한 개 = descend
    });
    return Arr.filter((e) => e === false).length === 1 ? "descending" : "mixed";
  };
  console.log(isAscend());
}).on("close", function () {
  process.exit();
});
