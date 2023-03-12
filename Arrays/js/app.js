// let series = ['True Detective', 'Mr.Robot', 'Sons of Anarchy'];

// console.log(series);
// console.log(typeof series);

// console.log(series[1]);
// console.log(series[3]); undefined döner çünkü daha eleman tanımlanmadı

// series[1] = 'Game of Thrones';

// console.log(series);

// let ages = [18, 24, 32, 56, 78, true, [1, 2]];

// ages[2] = 'Selam';

// JS TYPE SAFE BİR DİL DEĞİL. DEĞİŞKEN TİPİ DEĞİŞEBİLİYOR
// let age = 12;
// age = 'selam'

// console.log(ages);

// console.log(series.length);

// array methodları
// mutation yok!!!
// let email = 'korhanKosece@mail.com';
// let result = email.toUpperCase();

// console.log(email)
// console.log(result)

// mutation var
// let result = series.push('Spartacus'),
// let result = series.pop();
// let result = series.unshift('Spartacus');
// let result = series.shift();

// let result = series.splice(0, 2);
// let result = series.splice(0, 1, 'Spartacus');
// let result = series.splice(0, 2, 'Spartacus');
// console.log(series);
// console.log(result);

// let _result = result.splice(0, 1, 'Vikings');
// console.log(result)
// console.log(_result)

// let result = series.indexOf('Mr.Robot');
// let result = series.lastIndexOf('Mr.Robot');

// let series2 = ['Vikings', 'Sherlock'];
// // let result = series.concat(series2);
// let result = series2.concat(series)

// let result = series.includes('Mr.Robot');

// let result = series.reverse();

// let _result = result.split(',');
// let result = series.join('|');

// let result = series.slice(1);
// let result = series.slice(1, 2);
// let result = series.slice(-1);
// let result = series.slice(-2);

// console.log(series);
// console.log(result);

// for (let i = 10; i < 0; i = i - 2) {
//     console.log(i)
// }

let series = ['True Detective', 'Mr.Robot', 'Sons of Anarchy', 'Vikings'];

// for (let i = 0; i < series.length; i++) {
//     console.log(series[i])
// }

let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

let isActive = true;
let isDisabled = true;

while (isActive) {
    console.log('döngü çalıştı');
    if (isDisabled) {
        // break;
        isActive = false;
    }
}

for (let i = 0; i < series.length; i++) {
    // if (i == 2) {
    //     break;
    // }

    if (i < 2) {
        console.log(series[i]);
    }
}

// break çok fazla kullanılması tavsiye edilmiyor
