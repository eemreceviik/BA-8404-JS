// * Ekrana bir input iki buton koy. Arka tarafta global bir dizi oluştur. İçi boş bir dizi. ( var sayilar = []; gibi )
//  Butonlardan birine tıkladığında inputtan veriyi alıp diziye ekle.
// Diğer butona tıkladığında ise dizideki elemanları sıralayıp console a yaz.

const arrayQuestion = () => {
    let array = [];

    const addBtn = document.querySelector('#add-btn');
    const showBtn = document.querySelector('#show-btn');

    addBtn.addEventListener('click', () => {
        const input = document.querySelector('input');
        console.dir(input.value);
        array.push(input.value);
        input.value = '';
    });

    showBtn.addEventListener('click', () => {
        const p = document.querySelector('#number-list');
        p.innerText = array.join('|');
    });
};

// arrayQuestion();

// * Ekrana bir input ve bir buton koy. inputtan girilen name' i supplierdaki company namele ya da contactNamelerde aratsın
// ve sadece o verileri getirsin. Tablo olarak listelenecek. tablo kolonları:  company contact name ve city

const getSuppliersFromName = async () => {
    const response = await fetch('https://northwind.vercel.app/api/suppliers');
    const suppliers = await response.json();

    const button = document.querySelector('#search-btn');

    button.addEventListener('click', () => {
        const input = document.querySelector('#search-supplier');
        const searchValue = input.value.toLowerCase().trim();

        let filteredSuppliers = suppliers.filter((supplier) => {
            return (
                supplier.companyName.toLowerCase().includes(searchValue) ||
                supplier.contactName.toLowerCase().includes(searchValue)
            );
        });

        const header = `<tr>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>City</th>
                        </tr>`;
        const table = document.querySelector('#suppliers');
        table.innerHTML = header;

        filteredSuppliers.forEach((element) => {
            table.innerHTML += `<tr>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.address.city}</td>
            </tr>`;
        });
    });
};

// getSuppliersFromName();

// * Ekrana bir select koy ve içini kategori nameler ile doldur. bu selectten seçilen kategoriye göre ekranda ürünler listelensin.
// tablo kolonları: name quantity per unit ve unit price

const getProductsByCategory = async () => {
    const responseCategories = await fetch(
        'https://northwind.vercel.app/api/categories'
    );
    const categories = await responseCategories.json();

    const select = document.querySelector('#categories');
    select.innerHTML = `<option value='-1'>Kategori Seçiniz...</option>`;
    categories.forEach((category) => {
        select.innerHTML += `<option value='${category.id}'>${category.name}</option>`;
    });

    const responseProducts = await fetch(
        'https://northwind.vercel.app/api/products'
    );
    const products = await responseProducts.json();

    select.addEventListener('change', (event) => {
        // const categoryId = event.target.value;
        // const filteredProducts = products.filter((product) => {
        //     return +product.categoryId === +categoryId;
        // });

        // const productTable = document.querySelector('#products');
        // const header = `<tr>
        //                     <th>Product Name</th>
        //                     <th>Quantity Per Unit</th>
        //                     <th>Unit Price</th>
        //                 </tr>`;

        // if (!productTable) {
        //     const table = document.createElement('table');
        //     table.id = 'products';
        //     const body = document.querySelector('body');
        //     body.appendChild(table);

        //     table.innerHTML = header;
        // } else {
        //     productTable.innerHTML = header;
        // }

        // const existedProductTable = document.querySelector('#products');

        // filteredProducts.forEach((product) => {
        //     console.log(existedProductTable);
        //     existedProductTable.innerHTML += `<tr>
        //                             <td>${product.name}</td>
        //                             <td>${product.quantityPerUnit}</td>
        //                             <td>${product.unitPrice}</td>
        //                         </tr>`;
        // });

        products.forEach((product) => {
            console.log(product.category?.description);
        });
    });
};

getProductsByCategory();
