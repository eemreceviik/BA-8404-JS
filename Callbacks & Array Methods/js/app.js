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

console.log(metalBands);
console.log(result);
