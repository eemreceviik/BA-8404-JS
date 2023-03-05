// numbers

// dynamic type
let age = 30;
// age = 'Yaş'
// age = null
// age = undefined

// let isLogged = true;
// isLogged = 'asdas';

// console.log(isLogged);

// age = age + 3;
// age = age - 3;
// age = age * 2;
// age = age / 2;
// age = age ** 2;

// console.log(age + 3);
// console.log(age);

// let result = 5 * (10 - 3) ** 2 / 7;

// console.log(result);

// let number = 7;
// let result = number % 2;
// console.log(result)

// age = age + 1;
// age++

// age = age - 1;
// age--

// age = age + 3;
// age += 10;
// age -= 10;

// NaN Tip
// age = age * 'selam';
// console.log(age)
// console.log(typeof age)

// Sayı basamak yuvarlama
// let result = 5 / 3;

// console.log(result);
// console.log(typeof result);
// console.log(result.toFixed(3));
// console.log(typeof result.toFixed(3));
// console.log(+result.toFixed(3))
// console.log(typeof +result.toFixed(3))

// console.log(result);
// console.log(Math.ceil(result));
// console.log(typeof result);
// console.log(Math.floor(result));
// console.log(typeof result);

// Rastgele sayı oluşturma
// console.log(Math.floor(Math.random() * 10) + 1);

let randomNumber = Math.random();
console.log('Sayı üretildi', randomNumber);
randomNumber = randomNumber * 10;
console.log('Yuvarlamadan önce', randomNumber);
randomNumber = Math.floor(randomNumber);
console.log('Yuvarlamadan sonra', randomNumber);

let number1 = 3;
let number2 = 14;

let min = 4;
let max = 8;

let result = ((max - min + 1) * (max + min)) / 2;
console.log(result);

let circleRadius = 3;
let pi = 3.14;

let circlePerimeter = 2 * pi * circleRadius;
let circleArea = pi * circleRadius ** 2;
console.log(circlePerimeter);
console.log(circleArea);
