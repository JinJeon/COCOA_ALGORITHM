const grades = [65, 23, 64, 44, 53, 86, 90];
function gradingStudents(grades) {
  const remakeSrore = function (score) {
    if (score < 37 || score === 100) return score;
    const lastNumber = String(score).split("")[1];
    console.log(lastNumber);
    if (["3", "4"].includes(lastNumber)) {
      console.log(Math.ceil(score / 10) * 10);
      return Math.ceil(score / 10) * 10 - 5;
    }
    if (["8", "9"].includes(lastNumber)) {
      return Math.ceil(score / 10) * 10;
    }
    return score;
  };
  return grades.map(remakeSrore);
}
console.log(gradingStudents(grades));
