<<<<<<< HEAD
// Practice from Andrew Mead's Udemy course The Modern JS Bootcamp (2018)

let calculateGrade = function(score, totalScore) {
  let grade = "";
  let percent = (score / totalScore) * 100;

  if (percent > 89) {
    grade = "A";
  } else if (percent > 79 && percent < 90) {
    grade = "B";
  } else if (percent > 69 && percent < 80) {
    grade = "C";
  } else if (percent > 59 && percent < 70) {
    grade = "D";
  } else {
    grade = "F";
  }

  return `You got a ${grade} (${percent}%)!`  // string literal
}


let result = calculateGrade(17.5, 20);
console.log(result);
=======
// Practice from Andrew Mead's Udemy course The Modern JS Bootcamp (2018)

let calculateGrade = function(score, totalScore) {
  let grade = "";
  let percent = (score / totalScore) * 100;

  if (percent > 89) {
    grade = "A";
  } else if (percent > 79 && percent < 90) {
    grade = "B";
  } else if (percent > 69 && percent < 80) {
    grade = "C";
  } else if (percent > 59 && percent < 70) {
    grade = "D";
  } else {
    grade = "F";
  }

  return `You got a ${grade} (${percent}%)!`  // string literal
}


let result = calculateGrade(17.5, 20);
console.log(result);
>>>>>>> 5a6e743c11f530c75aa1d9993bceed67e6201aa9
