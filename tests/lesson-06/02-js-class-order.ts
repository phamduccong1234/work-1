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
