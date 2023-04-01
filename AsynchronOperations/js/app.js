// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('YAZDIR');
// }, 2000);

// console.log(3);
// console.log(4);

// XMLHTTP yöntemi

const getCategories = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request);
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            // console.log('Error!');
            callback('Error!', undefined);
        }
    });

    request.open('GET', 'https://northwind.vercel.app/api/categories');
    request.send();
};

getCategories((err, data) => {
    if (err !== undefined) {
        console.log(err);   
    } else {
        console.log(data);
    }
});
