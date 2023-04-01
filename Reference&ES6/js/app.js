// REFERENCE TYPES VS PRIMITIVES

// primitives
// let age = 24;
// let age2 = age;

// console.log('age', age);
// console.log('age2', age2);

// age = 30;
// console.log('age', age);
// console.log('age2', age2);

// references

// let person2 = 'Korhan';
// let person = {
//     name: 'yiğit',
// };

// person2 = person;

// console.log('person', person, '---', 'person2', person2);

// person.name = 'Korhan';
// console.log('person', person);
// console.log('person2', person2);

// ES6 ÖZELLİKLERİ
// SPREAD

let animes = [
    'Naruto',
    'Bleach',
    'Attack on Titan',
    'One Punch Man',
    'One Piece',
];

// let _animes = ['Hellsing', ...animes];
let _animes = [...animes, 'Hellsing'];
// console.log(_animes);

let person = { name: 'Yavuz', age: 24, gender: 'male' };
// let personClone = { ...person, location: 'Ankara' };

let otherProps = { height: '180', weight: '75' };
let personClone = { ...person, ...otherProps };

// console.log(person, personClone);

// REST
const sumAll = (...numbers) => {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
};

const result = sumAll(2, 3, 5, 7, 6, 122, 123, 12, 2);
// console.log(result);

// DESTRUCTION

const { name, age, gender, height } = person;

console.log(name);
console.log(age);
console.log(gender);
console.log(height);
