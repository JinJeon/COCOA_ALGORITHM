const kangaroo = function (x1, v1, x2, v2) {
  let result = "NO";
  let i = 0;
  if (v1 <= v2) return result;
  while (x1 + v1 * i < x2 + v2 * i) {
    i = i + 1;
    if (x1 + v1 * i === x2 + v2 * i) {
      result = "YES";
    }
  }
  return result;
};
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 4, 4, 2));
console.log(kangaroo(2564, 5393, 5121, 2836));
