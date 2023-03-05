// let email = "korhankosece@mail.com"
let email = 'korhanKosece@mail.com';

// string concatanation
// let firstName = 'Dave';
// let lastName = 'Grohl';
// let middleName = 'John';

// let fullName = firstName + ' ' + lastName;

// string ile number birleşirse sonuç string olarak çıkacaktır
// fullName = firstName + 1 + 2
// fullName =  1 + 2 + firstName

// console.log(fullName);

// bracket notation INDEX
// console.log(fullName[0]);
// console.log(fullName[10]);

// DOT notation
// console.log(fullName.length)

// string methods

// let result = email.toUpperCase();
// let result = email.toLowerCase();
// let result = email.toLocaleLowerCase('en-US');
// let result = email.toLocaleUpperCase('en-US');
// let result = email.slice(0, 5);
// let result = email.slice(5, 9);

// let result = email.substr(1);
// let result = email.substr(1, 2);

// let result = email.substring(5, 2);
// let result = email.slice(5, 2);

// let result = email.replace('m', '*')
// let result = email.replaceAll('m', '*')

// let result = email.indexOf('o');
// let result = email.lastIndexOf('o');
// let result2 = email[19];

// let result = email.split('o');
// let result = email.includes('@');
// let result = email.includes('p');

let result = email.trim();

console.log('ilk hali', email);
console.log(result);


// template strings

let firstName = 'Dave';
let lastName = 'Grohl';
let middleName = 'John';

// let fullName = firstName + ' ' + 'bu arkadaşın ismi çok uzun'+ ' ' + middleName + ' ' + lastName;

let fullName = `${firstName} bu arkadaşın ismi çok uzun ${middleName} ${lastName}`;


// console.log(fullName)