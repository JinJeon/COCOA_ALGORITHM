const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const totalDay = monthArr
  .filter((e, i) => i < 5)
  .reduce((pre, post) => pre + post);
console.log(totalDay);
