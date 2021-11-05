const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const getStar = () => {
    let inputValue = "";
    for (i = 1; i < Number(line) + 1; i++) {
      inputValue = inputValue + "*".repeat(i) + "\n";
    }
    return inputValue.slice(0, -1);
  };
  console.log(getStar());
}).on("close", function () {
  process.exit();
});
