class Customer {
  id: number;
  name: string;
  email: string;
  phone: number;

  constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
    console.log(`New Email: ${this.email}`);
  }
}

const congPham1 = new Customer(
  1,
  "Cong Pham",
  " congpham@gmail.com",
  1234567890,
);
console.log(congPham1);
congPham1.displayInfo();
congPham1.updateEmail("congpham_1234@gmail.com");
