const fullName: string = "Cong Pham";

// built-in type: string, number, boolean,...
// custom type: tự định nghĩa type của riêng mình

type User = {
    name: string;
    age: number;
    yearOfExperience: number;
}

interface User2 {
    name: string;
    address: string;
    email: string;
}

const user1: User = {
    name: "Cong Pham",
    age: 29,
    yearOfExperience: 5
}

const user2: User2 = {
    name: "Cong Pham",
    address: "Hanoi",
    email: "phamduccong@gmail.com"
}

// Định nghĩa kiểu dữ liệu custom
// ten: Gold
// thuoc tinh: loai vang: string; giaMua: number; giaBan: number;
// Khai bao 2 loai vang bat ki
interface Gold {
    loaiVang: string;
    giaMua: number;
    giaBan: number;
}

const gold1: Gold = {
    loaiVang: "18K",
    giaMua: 500000,
    giaBan: 550000
}

const gold2: Gold = {
    loaiVang: "24K",
    giaMua: 600000,
    giaBan: 660000
}