const height = 177;
const actualHeight = height % 100;
const bestWeight = actualHeight * 9 / 10;
const maxWeight = actualHeight;
const minWeight = actualHeight * 8 / 10;
console.log("Cân nặng lý tưởng của bạn là: " + bestWeight + " kg," + " Cân nặng tối đa của bạn là: " + maxWeight + " kg," + " Cân nặng tối thiểu của bạn là: " + minWeight + " kg");