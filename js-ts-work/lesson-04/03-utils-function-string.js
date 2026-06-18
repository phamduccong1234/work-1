let text = "    Hello, World!   ";
console.log(text);
// trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi
console.log(text.trim());
// trimStart(): loại bỏ khoảng trắng ở đầu chuỗi
console.log(text.trimStart());
// trimEnd(): loại bỏ khoảng trắng ở cuối chuỗi
console.log(text.trimEnd());

let str = "Cong Pham";
// toUpperCase(): chuyển đổi chuỗi thành chữ hoa
console.log(str.toUpperCase());
// toLowerCase(): chuyển đổi chuỗi thành chữ thường
console.log(str.toLowerCase());

let text1 = "Hello, World!";
// includes(): kiểm tra xem chuỗi có chứa một chuỗi con hay không
console.log(text1.includes("World"));
console.log(text1.includes("world"));

let text2 = "Hello World JavaScript";
// split(): tách chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân tách
console.log(text2.split(" "));

let email = "phamduccong1234@gmail.com";
console.log(email.split("@"));

let text3 = "Hello, World!";
// replace(): thay thế một phần của chuỗi bằng một chuỗi khác
console.log(text3.replace("World", "Cong"));
