// function writeConsole(){
//     console.log('Bu bir fonksiyondur')
// }

// invoke ediliyor
// writeConsole();

// method'lar DOT notation ile bir değerden invoke edilir
// let nameSurname = 'Korhan'
// nameSurname.toUpperCase();

// function getName(){
//     return nameSurname
// }

// function setName() {
//     nameSurname = 'Yavuz'
// }

// let name = getName();
// setName()
// console.log(name, nameSurname)

// HOISTING
// console.log(x)

// var x = 5;
// let x = 5;
// console.log(x);

// var x;

// console.log(x);

// x = 5;
// console.log(x);

// writeConsole()

// Function declaration
// function writeConsole() {
//     console.log('Bu bir fonksiyondur');
// }

// Function Expression
// const writeConsole = function () {
//     console.log('Bu bir fonksiyondur');
// };

// writeConsole()

// Regular Function
// const writeConsole = function () {
//     console.log('Bu bir fonksiyondur');
// };

// Arrow Function
// const writeConsole = () => {
//     console.log('Bu bir fonksiyondur');
// };

// const getName = () => {
//     return 'Korhan'
// }

// implicit return, return kelimesi kullanmadan direkt değer dönme
// const getName = () => 'Korhan'
let age = 35;

// const getName = () => {
//     age = 30;
//     return 'Korhan'
// }

// const getName = () => {
//     if (age > 30) {
//         return 'Yaşlı';
//     } else {
//         return 'Genç';
//     }
// };

// const getName = () => age > 30 ? 'Yaşlı' : 'Genç';

// const getName = () => console.log('Return yok');

// const getName = () => {
//     console.log('Return yok');
// };

// getName();

const setNameSurname = (name, surname = 'soyad', age = 32) => {
    return `Adım ${name} ${surname}. Yaşım: ${age}`;
    // return 'Adım' + ' ' + name + ' ' + surname + ' ' + 'Yaşım:' + age;
};

const nameSurname = setNameSurname('Korhan', 'Kösece');
console.log(nameSurname);
