// console.log(1);
// console.log('Korhan');
// console.log("Korhan");

// alert('Selam ben bir modalım.');

// !!değişken isimlendirmeleri anlamlı olmalı ve işlevini net bir şekilde göstermeli
// var x = 'asdasd' !!

// camelcase naming convention değişken ve fonksiyonlarda kullanılır
var nameSurname = 'Korhan Kösece';
// console.log(nameSurname);

// nameSurname = 'Axl Rose';
// console.log(nameSurname);

// JS kebap case kullanılamaz
// var name-surname;

// pascalcase naming convention class isimlendirmede kullanılır
// class NameSurname;

// snake case naming convention js de çok kullanılmaz
// var total_count = 4;

// screaming snake case naming convention SABİT DEĞİŞKENLERDE kullanılır
// var TOTAL_COUNT = 4;

var age = 24;
var weight = 82.4123123123;
// console.log(age);
// console.log(weight);

var isActive = true;
isActive = false;
// console.log(isActive)
isActive = 'true';
age = '24';

// console.log(typeof age)
// console.log(typeof isActive)

// var brand;
// var brand = undefined;
// brand = '';

var brand = null;

// console.log(brand)
// console.log(typeof brand)

// ES6 ile let ve const değişken tanımları eklendi
// !!var değişkeni global scopeda oluşur ve heryerden ulaşılıp müdahale edilebilir
// !! aynı scope içinde isimlendirmeler aynı olamaz!

// let brand;
// const brand;

if (true) {
    // var band = 'Megadeth';
    const band = 'Megadeth';
    // band = 'Audio Slave';
    console.log('1.scope', band);
    if (true) {
        const band = 'Dream Theatre';
        // band = 'Dream Theatre';
        console.log('2.scope', band);
    }
}

console.log('global scope', band);
