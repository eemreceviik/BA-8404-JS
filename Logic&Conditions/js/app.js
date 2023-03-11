// Booleans

// console.log(true, false, 'true', 'false');
// console.log(typeof true, typeof false, typeof 'true');

//truthy
let isActive = true;

//falsy
isActive = false;

// comparison operators
let age = 30;

// console.log(age == 30)
// console.log(age == 25)
// console.log(age != 30)
// console.log(age != 25)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age >= 30)
// console.log(age <= 30)

let _name = 'korhan'

// console.log(_name == 'korhan')
// console.log(_name == 'Korhan')
// console.log(_name != 'Korhan')
// console.log(_name > 'Ipek')
// console.log(_name > 'Korhan')
// console.log(_name > 'Agah')

// loose comparision (farklı tipler eşit olabilir)
// console.log(age == 30)
// console.log(age == '30');
// console.log(age != 30);
// console.log(age != '30');

// strict comparison (farklı tipler eşit olamaz!!!!)
console.log(age === 30);
console.log(age === '30')
// console.log(age !== 30 );
// console.log(age !== '30');

// statement vs expression
// expression yapılan işlem sonucunda bir değer dönüyor ise bu expressiondır.
// statement yapılan işleme denir. Daha geneldir
// !her expression aslında bir statemanttır. ama tersi geçerli değil!!!!

// let age = 80;
let company = '';

// console.log(age > 70);

// truthy değer; sayılarda 0 harici tüm sayılar true olarak görünür
// falsy değer; 0
// truthy değer; stringlerde boş string harici '' tüm textler true olarak görünür
// falsy değer; ''

// if (age > 70) {
//     console.log('YAŞLI');
// }

// if (age < 70) {
//     console.log('GENÇ');
// }

// nested if
// if (age > 70) {
//     console.log('YAŞLI');

//     if (age > 90) {
//         console.log('ÇOK YAŞLI');
//     }
// } else {
//     console.log('Genç')
// }

const password = 's!fre12345';

// if (password.length >= 10) {
//     console.log('şifreniz çok güçlü');
// } else if (password.length >= 8) {
//     console.log('şifre yeterli karaktere sahip');
// } else {
//     console.log('şifreniz en az 8 karakter içermelidir');
// }

// logical operators (&& => ve anlamına gelir , || => veya anlamına geliyor)

// console.log(password.length >= 8 || password.includes('!'))
// if (password.length >= 10 && password.includes('!')) {
//     console.log('şifreniz çok güçlü');
// } else if(password.length >= 8 || password.includes('!') && password.length > 5 ){
//     console.log('şifre yeterince güçlü');
// } else{
//     console.log('şifre yeterince güçlü değil!');
// }

// logical NOT

// if (!true) {
//     console.log('selam')
// }

// console.log(password.includes('s'));
// if (!password.includes('s')) {
//     console.log('s harfini içermiyor!!!')
// }

// switch & case statement
// const grade = 'P';

// if (grade === 'A') {
//     console.log('Çok iyi');
// } else if (grade === 'B') {
//     console.log('İyi');
// } else if (grade === 'C') {
//     console.log('Orta');
// } else if (grade === 'D') {
//     console.log('Kötü');
// } else if (grade === 'F') {
//     console.log('Çok kötü');
// } else {
//     console.log('Geçersiz harf notu');
// }

// switch (grade) {
//     case 'A':
//         console.log('Çok iyi');
//         break;
//     case 'B':
//         console.log('İyi');
//         break;
//     case 'C':
//         console.log('Orta');
//         break;
//     case 'D':
//         console.log('Kötü');
//         break;
//     case 'F':
//         console.log('Çok Kötü');
//         break;
//     default:
//         console.log('Geçersiz harf notu')
// }

// ternary operators

// let grade = 40;

// if (grade >= 50) {
//     console.log('Geçti')
// } else {
//     console.log('Kaldı')
// }

// grade >= 50 ? console.log('Geçti') : console.log('Kaldı');
