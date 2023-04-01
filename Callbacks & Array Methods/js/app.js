// const logValue = (value) => {
//     console.log(value);
// };

const setValue = (callbackFunction) => {
    let value = 10;
    let result = callbackFunction(value);
    return result;
};

// setValue(logValue);
// setValue(function (value) {
//     console.log(value);
// });

// console.log(
//     setValue(function (value) {
//         return value ** 2;
//     })
// );

let metalBands = [
    'Iron Maiden',
    'Gojira',
    'Avenged Sevenfold',
    'Rammstein',
    'Pantera',
    'Sepultra',
    'Black Label Soceity',
];

// foreach
// metalBands.forEach((deger, i) => {
//     console.log(i, deger);
// });

// map
// const result = metalBands.map((value, index) => {
//     // console.log(index, value);
//     return '*' + value;
// });

// filter
// const result = metalBands.filter((value, index) => {
//     return value.includes('e');
// });

// every
// const result = metalBands.every((value, index) => {
//     return value.includes('e');
// });

// some
// const result = metalBands.some((value, index) => {
//     return value.includes('ğ');
// });

// find
// const result = metalBands.find((value) => {
//     return value.includes('o');
// });

// findLast
// const result = metalBands.findLast((value) => {
//     return value.includes('p');
// });

// findIndex
// const result = metalBands.findIndex((value) => {
//     return value.includes('f');
// });

// sort
const numbers = [1, 87, 54, 42, 99, 2, 103, 114, -5, -12, 0];
// const result = metalBands.sort();
// const result = numbers.sort((number1, number2) => {
//     console.log('number1', number1);
//     console.log('number2', number2);
//     console.log('cons', number1 - number2);
//     return number2 - number1;
// });

// console.log(metalBands);
// reduce

const getSum = (total, number) => {
    return total + number;
};

const result = numbers.reduce(getSum, 0);
// const result = numbers.reduce((total, number) => {
//     return total + number;
// }, 0);

// console.log(numbers);
console.log(result);
