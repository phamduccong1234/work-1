// 1.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 8));

// 2.
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

console.log(findMin(5, 3, 7));
console.log(findMin(4, 8, 2));

// 3.
function getTopStudents(students, threshold) {
  let topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push({ name: students[i].name, score: students[i].score });
    }
  }
  return topStudents;
}
const students = [
  { name: "Cong", score: 9 },
  { name: "Duc", score: 7 },
  { name: "Hieu", score: 8 },
  { name: "Tuan", score: 6 },
];
console.log(getTopStudents(students, 7));

// 4.
function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years) / 100;
  return total;
}

console.log(calculateInterest(1000, 8, 3));
