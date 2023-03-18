// 1. 1 den 100 e kadar olan tek sayıları console' da göster
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// 8. 1 ile 100 arasında 7 ye bölünebilen sayılarla bir liste oluştur
// let list = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 7 === 0) {
//         list.push(i);
//     }
// }
// console.log(list)

// *9. 5 elemanlı bir dizideki pozitif elemanların ortalamasını bulan program (dizi negatif eleman içermesi zorunludur)
// let numbers = [15, 12, 88, -50, -20, 0, 16, -1, 123];
// let avgSum = 0;
// let sayac = 0;

// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     if (item > 0) {
//         avgSum = avgSum + item;
//         sayac++;
//     }
// }

// let result = avgSum / sayac;
// console.log(sayac);
// console.log('ÇIKTI', avgSum);
// console.log('SONUC', avgSum / sayac);
// console.log('SONUC', result);

//  10. 5 elemanlı bir dizideki en küçük elemanı ve bu elemanın adresini (index no) bulan program. (şuana kadar öğrendiğimiz bilgi birikimi ile yapılacak, farklı methodlar kullanılmayacak)
// let numbers = [15, 12, 88, -50, -20, 0, 16, -1, 123, -800 , 75];

// let enKucuk = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (enKucuk > numbers[i]) {
//         enKucuk = numbers[i]
//     }
// }
// console.log(enKucuk)
// console.log(numbers.indexOf(enKucuk))

// 12. Boş dizi tanımla. Bir değişken oluştur. Eğer değişkendeki “ç,ğ,ö,ü” harflerinden herhangi biri geçiyorsa diziye elemanı eklemesin ve uyarı versin.

// let list = [];
// let nameSurname = 'Korhan Kösece';

// if (
//     nameSurname.includes('ç') &&
//     nameSurname.includes('ğ') &&
//     nameSurname.includes('ö') &&
//     nameSurname.includes('ü')
// ) {
//     console.log('UYARI');
// } else {
//     list.push(nameSurname);
// }

// **13.Al bu takatukaları takatukacıya takatukalatmaya götür.Takatukacı takatukaları takatukalamam derse takatukacıdan takatukaları takatukalatmadan al da gel.

// let deyim =
//     'Al bu takatukaları takatukacıya takatukalatmaya götür.Takatukacı takatukaları takatukalamam derse takatukacıdan takatukaları takatukalatmadan al da gel.';

// let result = deyim.toLowerCase().split('takatuka').length;
// console.log(result - 1);

// ***14. Mini Sayısal loto uygulaması. 6 tane rastgele sayılardan oluşan bir liste oluştur. Bir değişken tanımla. eğer ki dizide seçtiğin sayı varsa kazandınız yoksa kaybettiniz yazacak. (Aynı rastgele sayı denk gelebilir.)

// let list = [];

// let i = 0;
// let tahmin = 5;

// while (i < 6) {
//     let random = Math.floor(Math.random() * 100) + 1;
//     list.push(random);
//     i++;
// }

// console.log(list);

// if (list.includes(tahmin)) {
//     console.log('Kazandınız')
// } else {
//     console.log('kaybettiniz')
// }
