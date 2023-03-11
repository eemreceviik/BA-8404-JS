// Soru 1

// let company = " Bilge Adam ";

// // console.log(company.trim())
// // console.log(company.replace(' ',''))
// console.log(company.replaceAll(' ',''))

// let formattedCompany = company.replaceAll(' ','');
// console.log(formattedCompany.toUpperCase())

// // Soru 4
// let company = "Bilge  Adam";

// console.log(company.replace('  ', ' '));

// Soru 5
// let company = "Bilge Adam";

// // console.log('***' + company + '***')
// console.log(`***${company}***`)

// Soru 6

// let company = "Bilge Adam Bilişim Teknojileri"
// let lastIndex = company.lastIndexOf(' ');
// let result = company.slice(0, lastIndex);
// let result2 = company.slice(lastIndex);
// result2 = result2.toUpperCase();

// // console.log(result)
// // console.log(result2)
// console.log(result + result2);

// Soru 7

let company = 'bilge adam bilişim';
// console.log(company[1])

// let companyWordList = company.split(' ');
// console.log(companyWordList);

// let firstWord = companyWordList[0];
let firstWord = company.slice(0, 5);
let result1 = firstWord.charAt(0).toUpperCase();
result1 = result1 + firstWord.slice(1);
console.log(result1);

// let secondWord = companyWordList[1];
let secondWord = company.slice(6, 10);
let result2 = secondWord.charAt(0).toUpperCase();
result2 = result2 + secondWord.slice(1);
console.log(result2);

// let thirdWord = companyWordList[2];
let thirdWord = company.slice(11, 18);
let result3 = thirdWord.charAt(0).toUpperCase();
result3 = result3 + thirdWord.slice(1);
console.log(result3);

console.log(`${result1} ${result2} ${result3}`);
