let hour = 10;

if (hour < 12) {
    console.log('Chào buổi sáng!');
}

if (hour < 18) {
    console.log('Chào buổi chiều!');
}

if (hour >= 12 && hour < 18) {
    console.log('Chào buổi chiều!');
} else if (hour >= 18) {
    console.log('Chào buổi tối!');
} else {
    console.log('Chào buổi sáng!');
}