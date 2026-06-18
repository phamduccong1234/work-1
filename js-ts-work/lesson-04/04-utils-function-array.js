let arr = [1, 2, 3, 4, 5];
// push(): thêm phần tử vào cuối mảng
arr.push(6);
console.log(arr);
// unshift(): thêm phần tử vào đầu mảng
arr.unshift(0);
console.log(arr);
// splice(): thêm phần tử vào vị trí bất kỳ trong mảng
arr.splice(2, 0, 1.5);
console.log(arr);

// pop(): xóa phần tử cuối cùng của mảng
arr.pop();
console.log(arr);
// shift(): xóa phần tử đầu tiên của mảng
arr.shift();
console.log(arr);
// splice(): xóa phần tử ở vị trí bất kỳ trong mảng
arr.splice(2, 2);
console.log(arr);
let numbers = [5, 12, 8, 130, 45];
// find(): tìm phần tử trong mảng
let first = numbers.find((num) => num > 45);
console.log(first);
// filter(): lọc phần tử trong mảng
let all = numbers.filter((num) => num > 10);
console.log(all);

// map(): tạo một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng
const numbers2 = [1, 2, 3, 4, 5];
let doubled = numbers2.map((num) => num * 2);
console.log(doubled);

// sort(): sắp xếp phần tử trong mảng
let numbers3 = [40, 100, 1, 5, 25, 10];
numbers3.sort((a, b) => a - b);
console.log(numbers3);
numbers3.sort((a, b) => b - a);
console.log(numbers3);
