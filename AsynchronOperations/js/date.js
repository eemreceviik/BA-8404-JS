const getData = async () => {
    let response = await fetch('https://northwind.vercel.app/api/orders');
    let data = await response.json();
    data.forEach((element) => {
        let date = new Date(element.orderDate);
        console.log(date.getMonth());
    });
};

getData();
