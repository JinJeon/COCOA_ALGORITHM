const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  inputValue = line.split(" ").reduce((a, b) => Number(a) + Number(b));
  console.log(inputValue);
}).on("close", function () {
  process.exit();
});
