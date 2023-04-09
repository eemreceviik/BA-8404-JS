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

const getCustomers = async () => {
    const response = await fetch('https://northwind.vercel.app/api/customers');
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

// getMVC();

// * 1996 yılında en çok(adet bazında) ürün satan çalışanım ve adedi* 1996 yılında en çok(adet bazında) ürün satan çalışanım ve adedi
const getBestEmployee = async () => {
    let orders = await getOrders();

    orders = orders.filter((order) => {
        let formattedDate = new Date(order.orderDate);

        // if (formattedDate.getFullYear() === 1996) {
        //     return true;
        // }
        // return false;

        return formattedDate.getFullYear() === 1996;
    });

    let filteredOrders = orders.map((order) => {
        let totalOrderQuantity = order.details.reduce(
            (totalQuantity, detail) => {
                totalQuantity = totalQuantity + detail.quantity;
                return totalQuantity;
            },
            0
        );

        // let totalOrderQuantity = 0;
        // order.details.forEach((detail) => {
        //     totalQuantity = totalQuantity + detail.quantity;
        // });

        return {
            employee: order.employeeId,
            totalQuantity: totalOrderQuantity,
        };
    });

    console.log(filteredOrders);

    let employees = [];
    filteredOrders.forEach((order) => {
        let hasEmployee = employees.some(
            (e) => e.employeeId === order.employee
        );

        if (hasEmployee) {
            employees.find(
                (e) => e.employeeId === order.employee
            ).totalQuantity += order.totalQuantity;
        } else {
            let employee = {
                employeeId: order.employee,
                totalQuantity: order.totalQuantity,
            };
            employees.push(employee);
        }
    });

    console.log(employees);
};

// getBestEmployee();

const getCustomersWithName = async () => {
    let orders = await getOrders();

    let customers = [];

    orders.forEach((order) => {
        let totalAmount = 0;
        order.details.forEach((detail) => {
            const { quantity, unitPrice, discount } = detail;
            let productAmount = quantity * unitPrice;
            productAmount = productAmount - productAmount * discount;
            // totalAmount = totalAmount + productAmount;
            totalAmount += productAmount;
        });

        let currentCustomer = customers.find((customer) => {
            if (customer.customerId === order.customerId) {
                return true;
            }
            return false;
        });

        if (currentCustomer !== null && currentCustomer !== undefined) {
            currentCustomer.totalAmount += totalAmount;
        } else {
            customers.push({
                customerId: order.customerId,
                totalAmount,
            });
        }
    });

    const customersFromAPI = await getCustomers();

    customers = customers.map((customer) => {
        let existCustomer = customersFromAPI.find((c) => {
            return c.id === customer.customerId;
        });

        // customer.contactName = existCustomer.contactName;

        let obj = { ...customer, customerName: existCustomer.contactName };
        return obj;
    });


    customers.sort((a, b) => a.totalAmount - b.totalAmount);

    console.log(customers.reverse()[0])
};

getCustomersWithName();
