for (let i = 0; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

const arr = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
let firstEven = null;
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
    console.log(num + " không phải là số chẵn cần tìm");
}
console.log(`${firstEven} là số chẵn cần tìm`);

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

const arr2 = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];
    if (num < 15) {
        continue;
    }
    console.log(num);
}

const score = 85;
if (score >= 70) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80){
    console.log("Great");
} else if (score >= 70) {
    console.log("Pass");
} else if (score >= 60) {
    console.log("Average");
} else {
    console.log("Fail");
}