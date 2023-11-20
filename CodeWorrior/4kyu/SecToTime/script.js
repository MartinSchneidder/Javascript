/**
 * Gets seconds, gives years, days, hours, minutes and seconds
 * @param {number} seconds
 */
function formatDuration(seconds) {
  if (seconds == 0) {
    return "now";
  }

  let time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: seconds,
  };
  //years and Rest
  time.years = Math.floor(time.seconds / (60 * 60 * 24 * 365));
  time.seconds = time.seconds % (60 * 60 * 24 * 365);
  //days and Rest
  time.days = Math.floor(time.seconds / (60 * 60 * 24));
  time.seconds = time.seconds % (60 * 60 * 24);
  //hours and Rest
  time.hours = Math.floor(time.seconds / (60 * 60));
  time.seconds = time.seconds % (60 * 60);
  //minutes and Rest
  time.minutes = Math.floor(time.seconds / 60);
  time.seconds = time.seconds % 60;

  //output
  let output = "";
  if (time.years) {
    output += time.years + " year";

    if (time.years > 1) {
      output += "s, ";
    } else output += ", ";
  }

  if (time.days) {
    output += time.days + " day";

    if (time.days > 1) {
      output += "s, ";
    } else output += ", ";
  }

  if (time.hours) {
    output += time.hours + " hour";

    if (time.hours > 1) {
      output += "s, ";
    } else output += ", ";
  }

  if (time.minutes) {
    output += time.minutes + " minute";

    if (time.minutes > 1) {
      output += "s, ";
    } else output += ", ";
  }

  if (time.seconds) {
    output += time.seconds + " second";

    if (time.seconds > 1) {
      output += "s";
    }
  }

  //Specialcases
  //LastCHAR == comma -> delete comma
  if (output.lastIndexOf(",") == output.length - 2) {
    output = output.slice(0, output.lastIndexOf(","));
  }

  //no comma -> return output
  if (output.indexOf(",") < 0) {
    return output;
  }

  //Last comma -> "and"
  output =
    output.slice(0, output.lastIndexOf(",")) +
    " and" +
    output.slice(output.lastIndexOf(",") + 1);

  return output;
}

console.log(formatDuration(132030240));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3662));

// let sec = 30758400;
// console.log("Jahr in sec: ", sec / 60 / 60 / 24 / 356);
// console.log("Tag in sec: ", sec / 60 / 60 / 24);
// console.log("Stunde in sec: ", sec / 60 / 60);
// console.log("Minute in sec: ", sec / 60);
// console.log("Sekunden: ", 60 * 60 * 24 * 356);
