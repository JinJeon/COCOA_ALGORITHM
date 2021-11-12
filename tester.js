const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 1, 2, 3, 2, 4, 2, 5];
const array3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
array1.length = 50;
const testArr = new Map();
array1.forEach((e, i) => {
  if (i % 5 === 0) {
    e = 1;
  }
});

// for (let i = 0; i < 50; i++) {
//   array1[0 + 5 * i] = 1;
//   array1[1 + 5 * i] = 2;
//   array1[2 + 5 * i] = 3;
//   array1[3 + 5 * i] = 4;
//   array1[4 + 5 * i] = 5;

//   array2[2 * i] = 2;
//   array2[1 + 8 * i] = 1;
//   array2[3 + 8 * i] = 3;
//   array2[5 + 8 * i] = 4;
//   array2[7 + 8 * i] = 5;

//   array3[0 + 10 * i] = 3;
//   array3[1 + 10 * i] = 3;
//   array3[2 + 10 * i] = 1;
//   array3[3 + 10 * i] = 1;
//   array3[4 + 10 * i] = 2;
//   array3[5 + 10 * i] = 2;
//   array3[6 + 10 * i] = 4;
//   array3[7 + 10 * i] = 4;
//   array3[8 + 10 * i] = 5;
//   array3[9 + 10 * i] = 5;
// }
console.log(array1);
// console.log(array2);
// console.log(array3);
