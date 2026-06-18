// const congPham = {
//     name: "Cong Pham",
//     role: "student"
// };

// const duyAnh = {
//     name: "Duy Anh",
//     role: "student"
// };

// const thaoNguyen = {
//     name: "Thao Nguyen",
//     role: "student"
// };

// Class Student
// Class la 1 khuon mau de tao ra nhieu doi tuong cung loai
// PascalCase: ten moi tu duoc viet hoa, khong co dau cach
class Student {
  // thuoc tinh (properties)
  name;
  role;

  // constructor (phuong thuc khoi tao)
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // phuong thuc (methods)
  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  sayMyRole() {
    console.log(`My role is ${this.role}`);
  }

  saySomething(message) {
    console.log(`Say something: ${message}`);
  }
}

// tao doi tuong (instance) tu class
const congPham = new Student("Cong Pham", "student");
const duyAnh = new Student("Duy Anh", "student");
const thaoNguyen = new Student("Thao Nguyen", "student");
console.log(congPham);
console.log(duyAnh.name, duyAnh.role);
congPham.sayMyName();
congPham.sayMyRole();
congPham.saySomething("Hello World!");
