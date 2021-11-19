const time = "12:05:45AM";
function timeConversion(time) {
  let returnTime = time;
  const filter = returnTime.substr(8, 2);
  let hours = returnTime.substr(0, 2);
  if (hours === "12") returnTime = returnTime.replace("12", "00");
  if (filter === "AM") {
    return returnTime.replace("AM", "");
  }
  if (filter === "PM") {
    hours = returnTime.substr(0, 2);
    return returnTime.replace("PM", "").replace(hours, Number(hours) + 12);
  }
}
console.log(timeConversion(time));
