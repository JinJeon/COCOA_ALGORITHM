function solution(a, b) {
  const monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekArr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const totalDay =
    a - 1 === 0
      ? b - 1
      : monthArr.filter((e, i) => i < a - 1).reduce((pre, post) => pre + post) +
        b -
        1;
  const answer = weekArr[totalDay % 7];
  return answer;
}
