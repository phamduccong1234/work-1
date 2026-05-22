// Scope (Phạm vi truy cập biến)
// 1. Block Scope (Phạm vi khối) - var ko có block scope, let và const có block scope
if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const có block scope";
}
console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

// 2. Function Scope (Phạm vi hàm) - var, let và const đều có function scope
function myFunction() {
    var functionScopedVar = "var Chỉ có thể truy cập trong hàm này";
    let functionScopedLet = "let Chỉ có thể truy cập trong hàm này";
    const functionScopedConst = "const Chỉ có thể truy cập trong hàm này";

    console.log(functionScopedVar);
    console.log(functionScopedLet);
    console.log(functionScopedConst);
}
// console.log(functionScopedVar);
// console.log(functionScopedLet);
// console.log(functionScopedConst);
myFunction();

// 3. Global Scope (Phạm vi toàn cục) - var, let và const đều có global scope nếu được khai báo ở ngoài hàm
var globalVar = "var là biến toàn cục";
let globalLet = "let là biến toàn cục";
const globalConst = "const là biến toàn cục";

function displayGlobalFunction() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

displayGlobalFunction();