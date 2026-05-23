// 1.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 2.
for (let i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`Phép tính: ${i} x ${j} = ${i * j}`);
  }
}

// 3.
let oddArray = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    oddArray.push(i);
  }
}
console.log(oddArray);

// 4.
for (let i = 1; i <= 10; i++) {
  console.log(`Số thứ tự ${i}: Tên là user${i} - user${i}@example.com`);
}

// 5.
const revenue = [
  { month: 1, total: 50 },
  { month: 2, total: 100 },
  { month: 3, total: 150 },
  { month: 4, total: 200 },
  { month: 5, total: 250 },
  { month: 6, total: 300 },
  { month: 7, total: 350 },
  { month: 8, total: 400 },
  { month: 9, total: 450 },
  { month: 10, total: 500 },
  { month: 11, total: 550 },
  { month: 12, total: 600 },
];
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
  totalRevenue += revenue[i].total;
}
console.log(totalRevenue);
