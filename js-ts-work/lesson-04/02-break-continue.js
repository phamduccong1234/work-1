// break: thoát khỏi vòng lặp hiện tại
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

// Áp dụng break để tìm số chẵn đầu tiên trong mảng
const arr = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
let firstEven = null;
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (num % 2 === 0) {
    firstEven = num;
    break;
  }
  console.log(num + " không phải là số chẵn cần tìm");
}
console.log(`${firstEven} là số chẵn cần tìm`);

// continue: bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục với lần lặp tiếp theo
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Áp dụng continue để in ra các số nhỏ hơn 15 trong mảng
const arr2 = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
for (let i = 0; i < arr2.length; i++) {
  const num = arr2[i];
  if (num < 15) {
    continue;
  }
  console.log(num);
}

// if...else: điều kiện
const score = 85;
if (score >= 70) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// if...else if...else: nhiều điều kiện
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Great");
} else if (score >= 70) {
  console.log("Pass");
} else if (score >= 60) {
  console.log("Average");
} else {
  console.log("Fail");
}

// Ternary Operator (Toán tử điều kiện): biểu thức điều kiện ? giá trị nếu đúng : giá trị nếu sai
const age = 28;
let ageStatus = age >= 18 ? "nguoi lon" : "tre em";
console.log(ageStatus);

// for...in: lặp qua các thuộc tính của một đối tượng
const person = {
  name: "Cong",
  age: 28,
  city: "Hanoi",
};
for (let personInfo in person) {
  console.log(personInfo);
}

// foreach: lặp qua các phần tử của một mảng
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (value) {
  console.log(value);
});
