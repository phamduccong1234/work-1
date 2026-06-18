// Function expression
// 1.
const name = function hello(name) {
  return `Hello ${name}`;
};
console.log(name("Cong"));
// 2.
const value = function totalValua(price, quantity, discount) {
  return price * quantity - discount;
};
console.log(value(13, 25, 5));

// Lambda function (Arrow function)
// 1.
const name1 = (name) => {
  return `Hello ${name}`;
};
console.log(name1("Cong"));
// 2.
const value1 = (price, quantity, discount) => {
  return price * quantity - discount;
};
console.log(value1(13, 25, 5));

// 3. Arrow function with implicit return
const name2 = (name) => `Hello ${name}`;
console.log(name2("Cong"));
const value2 = (price, quantity, discount) => price * quantity - discount;
console.log(value2(13, 25, 5));
