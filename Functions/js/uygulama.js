// 3. Dışarıdan aldığı 2 metni aralarında boşluk kalacak şekilde birleştirip, ilk harflerini büyülten fonksiyon

const concatTexts = (text1, text2) => {
    let formattedText1 = text1[0].toUpperCase() + text1.slice(1);
    let formattedText2 = text2[0].toUpperCase() + text2.slice(1);
    return formattedText1 + ' ' + formattedText2;
};

// const result = concatTexts('iron', 'maiden');
// console.log(result);

// 4. Dışarıdan 3 sayı alan ve karelerini bir dizi halinde veren fonksiyon

// const setSquarList = (number1, number2, number3) => {
//     let list = [];
//     list.push(number1 ** 2, number2 ** 2, number3 ** 2);
//     return list;
// };

// console.log(setSquarList(1, 2, 3));

// 6. Bir çemberin alanını hesaplayan fonksiyon

// const calculateCircleArea = (radius) => {
//     let pi = 3.14;
//     return pi ** 2 * radius;
// };
// let pi = 3.14;
// const calculateCircleArea = radius => pi ** 2 * radius;

// console.log(calculateCircleArea(2));

let testUsername = 'korhankosece';
let testPassword = '12345';
// const controlCredentials = (x, y) => {
//     if (username === testUsername && password === testPassword) {
//         return 'Giriş Başarılı';
//     } else {
//         return 'Girdiğiniz kullanıcı adı veya şifre hatalı';
//     }
// };

// Sadece return durumlarında bu pattern kullanılabilir.
// let age = 20;
// const controlCredentials = (username, password) => {
//     if (username === testUsername && password === testPassword) {
//         return 'Giriş Başarılı';
//     }

//     if (age > 18) {
//         return 'Yetişkin';
//     }

//     return 'Girdiğiniz kullanıcı adı veya şifre hatalı';
// };

// const result = controlCredentials('korhankosece', '12345');
// console.log(result);

// 13. Dışarıdan bir dizi ve bir sayı alsın. Dizinin o sayınıncı elemanına kadar olan sayıları toplayıp return etsin

const sumNumberwithIndex = (list, index) => {
    if (index >= list.length) {
        return 'Uyarı';
    }

    let sum = 0;
    // 1.yöntem
    // for (let i = 0; i < list.length; i++) {
    //     sum = sum + list[i];
    //     if (i === index) {
    //         return sum;
    //     }
    // }

    // 2.yöntem
    // for (let i = 0; i < index; i++) {
    //     sum = sum + list[i];
    // }
    return sum;
};

// const result = sumNumberwithIndex([1, 2, 3, 4, 5], 2);

const setCalculator = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return 'Wrong operator';
    }
};

const result = setCalculator(7, 7, '%');
console.log(result);


