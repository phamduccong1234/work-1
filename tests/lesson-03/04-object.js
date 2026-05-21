// 1.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);

// 2.
const person = {
  name: "Cong",
  address: {
    street: "Cau Giay",
    city: "Hanoi",
    country: "Vietnam",
  },
};
console.log(person.address.street);

//3.
const student = {
  name: "Cong",
  grades: {
    math: 8.5,
    english: 9.0,
  },
};
console.log(student["grades"]["math"]);

//4.
const settings = {
  volume: 50,
  brightness: 70,
};
settings.volume = 68;
console.log(settings);

//5.
const bike = {
  brand: "Thống Nhất",
  type: "Kid Bike",
};
bike.color = "Black";
console.log(bike);

//6.
const employee = {
  name: "Cong",
  age: 28,
};
delete employee.age;
console.log(employee);

//7.
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
