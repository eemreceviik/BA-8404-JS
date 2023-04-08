const getOrders = async () => {
    // fetch('https://northwind.vercel.app/api/orders')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });

    const response = await fetch('https://northwind.vercel.app/api/orders');
    const data = await response.json();
    return data;
};

// Country USA olan kaç siparişim var?
const getUSAOrders = async () => {
    let orders = await getOrders();
    let filteredOrdersLength = orders.filter((order) => {
        return order.shipAddress.c === 'a';
    }).length;

    console.log(filteredOrdersLength);
};

// getUSAOrders();

// Shipname ve city yanyana yazdır. İkisi de büyük harfle yazılacak
const getShipnamesAndCity = async () => {
    let orders = await getOrders();
    orders.forEach((order) => {
        console.log(
            `Shipname: ${order.shipName} - City: ${order.shipAddress.city}`
        );
    });
};

// getShipnamesAndCity();

// CustomerID si SPLIR olan müşterimin toplam kazandırdığı para
const getSPLIRTotalPrice = async () => {
    let orders = await getOrders();

    let totalAmount = 0;
    orders.forEach((order) => {
        if (order.customerId === 'SPLIR') {
            let detailAmount = 0;
            order.details.forEach((detail) => {
                detailAmount =
                    detailAmount + detail.unitPrice * detail.quantity;
            });
            totalAmount = totalAmount + detailAmount;
        }
    });

    console.log(totalAmount);
};

// getSPLIRTotalPrice();

// 1996 yılı mart ayında kaç siparişim var ?

const getOrdersWithDate = async () => {
    let orders = await getOrders();
    let filteredValuesLength = orders.filter((order) => {
        const date = new Date(order.orderDate);
        return date.getFullYear() === 1996 && date.getMonth() === 2;
    }).length;

    console.log(filteredValuesLength);
    // Timestamp milisaniye cinsinde tarih
    console.log(Date.now());
};

// getOrdersWithDate();

// Geciken siparişlerimde siparişteki ürün fiyatının yüzde 10 u kadar zarar ediyorum. Her siparişte ne kadar zarar ettiğimi console a yazdır. ( Ürün fiyatı 100 den büyükse yüzde 5 i kadar zarar ediyorum )
const getLateOrders = async () => {
    let orders = await getOrders();
    let lateOrders = orders.filter((order) => {
        const convertedShippedDate = new Date(order.shippedDate);
        const convertedRequiredDate = new Date(order.requiredDate);

        return convertedShippedDate > convertedRequiredDate;
    });

    console.log(lateOrders);

    let lateOrderAmountList = [];

    lateOrders.forEach((order) => {
        let lateOrder = { orderId: order.id, lossAmount: 0 };
        order.details.forEach((detail) => {
            const { unitPrice } = detail;
            if (unitPrice > 100) {
                lateOrder.lossAmount += unitPrice * 0.05;
            } else {
                lateOrder.lossAmount += unitPrice * 0.1;
            }
        });

        lateOrderAmountList.push(lateOrder);
    });

    console.log(lateOrderAmountList);
};

// getLateOrders();

// BANA EN ÇOK PARA KAZANDIRAN MÜŞTERİM VE KAZANDIRDIĞI PARA? ( EN DEĞERLİ MÜŞTERİM )
const getMVC = async () => {
    let orders = await getOrders();

    let customerTotalPrice = [];
    orders.forEach((order) => {
        let customer = { id: order.customerId, totalPrice: 0 };

        let totalOrderPrice = 0;
        order.details.forEach((detail) => {
            const { unitPrice, quantity } = detail;
            totalOrderPrice += quantity * unitPrice;
        });

        customer.totalPrice = totalOrderPrice;

        const hasCustomer = customerTotalPrice.some((item) => {
            return item.id === order.customerId;
        });

        if (hasCustomer) {
            customerTotalPrice.find(
                (item) => item.id === order.customerId
            ).totalPrice += totalOrderPrice;
        } else {
            customerTotalPrice.push(customer);
        }
    });

    console.log(customerTotalPrice);
    
    const bestCustomer = customerTotalPrice.sort((a, b) => {
        return b.totalPrice - a.totalPrice;
    })[0];

    console.log(bestCustomer);
};

getMVC();
