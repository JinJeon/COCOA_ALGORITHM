const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = function (board, moves) {
  let answer = 0;
  const resultArr = [];
  const realMoves = moves.map((e) => e - 1);
  realMoves.forEach((move) => {
    let i = 0;
    while (board[i][move] === 0) {
      if (board[i + 1] === undefined) break;
      i = i + 1;
    }
    if (resultArr[resultArr.length - 1] === board[i][move]) {
      resultArr.pop();
      answer = answer + 2;
    } else if (board[i][move] === 0) {
      return;
    } else {
      resultArr.push(board[i][move]);
    }
    board[i][move] = 0;
  });
  return answer;
};
console.log(solution(board, moves));
// return result 4
