function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    // console.log(`Dien tich hinh chu nhat là (${dai}*${rong}) = ${dienTich}`);
    return dienTich;
}

console.log(tinhDienTich(5, 10));
console.log(tinhDienTich(7, 3));

function kiemTraChanLe(number) {
    if (number % 2 === 0) {
        return "Chan";
    } 
    if (number % 2 !== 0) {
        return "Le";
    }
}

console.log(kiemTraChanLe(5));
console.log(kiemTraChanLe(6));
console.log(kiemTraChanLe(7));