class Order {
  orderId: number;
  customerName: string;
  items: Product[];
  totalAmount: number;

  constructor(
    orderId: number,
    customerName: string,
    items: Product[],
    totalAmount: number,
  ) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }

  addItem(item: Product): void {
    this.items.push(item);
  }

  calculateTotal(): void {
    this.totalAmount = this.items.reduce(
      (total, item) => total + item.price * item.amount * (1 - item.discount),
      0,
    );
    // let total = 0;
    // for (const item of this.items) {
    //   total += item.price * item.amount * (1 - item.discount);
    // }
    // this.totalAmount = total;
  }
}

class Product {
  name: string;
  price: number;
  amount: number;
  discount: number;

  constructor(name: string, price: number, amount: number, discount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.discount = discount;
  }
}

const noodle = new Product("Noodle", 10, 2, 0.1);
const rice = new Product("Rice", 20, 1, 0.2);
const order = new Order(1, "Cong Pham", [noodle, rice], 0);
order.addItem(new Product("Bread", 5, 3, 0.05));
order.addItem(new Product("Milk", 15, 1, 0.15));
order.calculateTotal();
console.log(order);
