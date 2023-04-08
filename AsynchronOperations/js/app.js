// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('YAZDIR');
// }, 2000);

// console.log(3);
// console.log(4);

// XMLHTTP yöntemi

// const getCategories = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request);
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request);
//             // console.log(request.responseText);
//             const data = JSON.parse(request.responseText);
//             // const stringData = JSON.stringify(data);
//             // console.log(stringData);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             // console.log('Error!');
//             callback('Error!', undefined);
//         }
//     });

//     request.open('GET', 'https://northwind.vercel.app/api/categories');
//     request.send();
// };

// getCategories((err, data) => {
//     if (err !== undefined) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const getData = (url, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request);
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request);
//             // console.log(request.responseText);
//             const data = JSON.parse(request.responseText);
//             // const stringData = JSON.stringify(data);
//             // console.log(stringData);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             // console.log('Error!');
//             callback('Error!', undefined);
//         }
//     });

//     request.open('GET', url);
//     request.send();
// };

// getData('https://northwind.vercel.app/api/products', (err, data) => {
//     console.log(data);
//     let categoryId = data[0].categoryId;
//     let supplierId = data[0].supplierId;
//     getData(
//         `https://northwind.vercel.app/api/categories/${categoryId}`,
//         (err, data) => {
//             console.log(data);
//             getData(
//                 `https://northwind.vercel.app/api/suppliers/${supplierId}`,
//                 (err, data) => {
//                     console.log(data);
//                 }
//             );
//         }
//     );
// });

// PROMISE

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         reject('Error!');
//     });
// };

// getSomething().then(
//     (data) => {
//         console.log(data);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// getSomething()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve({ category: 'food' });
//     } else {
//         reject('ERROR !');
//     }
// });

// const myPromise2 = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         setTimeout(() => {
//             resolve({ name: 'Korhan', surname: 'Kosece' });
//         }, 2000);
//     } else {
//         reject('ERROR 2!');
//     }
// });

// console.log(myPromise);

// myPromise2
//     .then((data) => {
//         console.log('Başarılı: ', data);
//     })
//     .catch((err) => {
//         console.log('Error: ', err);
//     })
//     .finally(() => {
//         console.log('işlem bitti');
//     });

// Promise.all([myPromise, myPromise2])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Promise.race([myPromise2, myPromise])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('Error!!');
//             }
//         });

//         request.open('GET', url);
//         request.send();
//     });
// };

// getData('https://northwind.vercel.app/api/categories')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// getData('https://northwind.vercel.app/api/products')
//     .then((data) => {
//         console.log(data);
//         return getData('https://northwind.vercel.app/api/categories');
//     })
//     .then((data) => {
//         console.log(data);
//         return getData('https://northwind.vercel.app/api/suppliers');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// fetch('https://northwind.vercel.app/api/products')
//     .then((response) => {
//         if (response.status === 404) {
//             throw Error('HATA');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));

// POST
const addCategory = (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch('https://northwind.vercel.app/api/categories', options)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

// addCategory({
//     name: 'Fast Food',
//     description: 'Tasty but unhealty',
// });

// DELETE

const deleteCategory = (id) => {
    const configuration = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(`https://northwind.vercel.app/api/categories/${id}`, configuration)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

// deleteCategory(9)

// async & await

const getCategories = async () => {
    let response = await fetch('https://northwind.vercel.app/api/categories');
    let data = await response.json();
    console.log(data);
    console.log(2);
};

// getCategories();
// console.log(1);

const getProductsWithCategories = async () => {
    let response = await fetch('https://northwind.vercel.app/api/products');
    let data = await response.json();
    console.log(data);
    let categoryId = data[0].categoryId;

    let categoryResponse = await fetch(
        `https://northwind.vercel.app/api/categories/${categoryId}`
    );
    let categoryData = await categoryResponse.json();
    console.log(categoryData);
};

await getProductsWithCategories()

