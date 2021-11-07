const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const change = (input) => {
    if (typeof input === "string") {
      return input.charCodeAt(0);
    } else if (typeof input === "number") {
      return String.fromCharCode(input);
    }
  };
  console.log(change(line));
}).on("close", function () {
  process.exit();
});
