// console.log(document)

// const text = document.getElementById('text');
// console.log(text);

// const textList = document.getElementsByClassName('text-class');
// console.log(textList);
// console.log(textList[0]);

// textList.forEach((item) => {
//     console.log(item);
// });

// for (let i = 0; i < textList.length; i++) {
//     console.log(textList[i]);
// }

// const title = document.getElementsByTagName('h1');
// console.log(title);

// const text = document.querySelector('#text');

// const text = document.querySelector('.text-class')
// console.log(text);

// const textList = document.querySelectorAll('.text-class');
// console.log(textList);
// console.log(textList[1]);

// textList.forEach((text) => console.log(text));

// const textElement = document.querySelector('#text');

// console.log(textElement.innerText);
// textElement.innerText = 'Korhan Kösece';
// console.log(textElement.innerText);

// const textList = document.querySelectorAll('.text-class');

// textList.forEach((element) => {
//     element.innerText = 'Yeni text ekledim!'
// });

// textElement.innerHTML = `<h2>this is a new text</h2>`;
// textElement.innerText = `<h2>this is a new text</h2>`;
// textElement.innerHTML = textElement.innerHTML + `<h2>this is a new text</h2>`
// textElement.innerHTML += `<h2>this is a new text</h2>`

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.linkedin.com/');
// link.innerText = "Linkedn'e yönlendir";

// const text = document.querySelector('p');

// console.log(text.getAttribute('class'));

// text.setAttribute('class', 'error');
// text.setAttribute('style', 'color:green');

// console.log(text.style);

// text.style.color = 'green';
// text.style.backgroundColor = 'tomato'
// text.style.fontSize = '24px'

// const text = document.querySelector('p');

// console.log(text.classList);
// text.classList.add('test');
// text.classList.add('error');
// text.classList.remove('success');

// const elementList = document.querySelectorAll('.text-wrapper p');
// console.log(elementList);

// elementList.forEach((element) => {
//     if (element.textContent.toLowerCase().includes('success')) {
//         element.classList.add('success');
//     } else if (element.textContent.toLowerCase().includes('error')) {
//         element.classList.add('error');
//     }
// });

// elementList[0].classList.toggle('test')

// const box = document.querySelector('#box');
// const box2 = document.querySelector('#box-2');
// console.log(box);

// console.log(box.childNodes);
// console.log(box.children);
// console.log([...box.children]);
// console.log(box.childElementCount);

// [...box.children].forEach((child) => {
//     console.log(child);
//     child.classList.add('test');
// });

// console.log(box.parentElement);
// console.log(box.parentElement.parentElement);
// console.log(box2.parentElement);
// console.log(box2.parentElement.childNodes);
// console.log(box2.nextSibling);
// console.log(box2.nextElementSibling);
// console.log(box2.nextElementSibling.children);
// console.log(box2.nextElementSibling.childNodes);
// console.log(box2.previousSibling);
// console.log(box2.previousElementSibling);
// console.log(box2.nextElementSibling.parentElement.childNodes);

// const pElement = document.createElement('p');
// pElement.innerText = 'Ben yeni bir text elementiyim.';
// pElement.style.color = 'red';
// box.append(pElement);
// box.appendChild(pElement);
// box.prepend(pElement);
// console.log(pElement);

const renderCategories = async () => {
    const response = await fetch('https://northwind.vercel.app/api/categories');
    const categories = await response.json();
    console.log(categories);

    const ulElement = document.createElement('ul');
    ulElement.id = 'category-list';
    const bodyElement = document.querySelector('body');
    bodyElement.prepend(ulElement);

    categories.forEach((category) => {
        const categoryName = category.name.toUpperCase();
        // if (categoryName !== null && categoryName !== undefined) {
        if (categoryName) {
            // const liElement = document.createElement('li');
            // liElement.innerText = categoryName;

            ulElement.innerHTML += `<li>${categoryName}</li>`;
        }
    });
};

// renderCategories();

const renderSuppliers = async () => {
    const response = await fetch('https://northwind.vercel.app/api/suppliers');
    const suppliers = await response.json();
    console.log(suppliers);

    const tableElement = document.querySelector('table');

    // 1.Yöntem
    // const header = document.createElement('tr');

    // const companyHeader = document.createElement('th');
    // companyHeader.innerText = 'Company';
    // header.append(companyHeader);
    // const contactHeader = document.createElement('th');
    // contactHeader.innerText = 'Contact';
    // header.append(contactHeader);
    // const countryHeader = document.createElement('th');
    // countryHeader.innerText = 'Country';
    // header.append(countryHeader);

    // tableElement.append(header);

    // 2.Yöntem
    const header = `<tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>`;

    tableElement.innerHTML = header;

    suppliers.forEach((supplier) => {
        // 1.Yöntem
        // const trElement = document.createElement('tr');

        // const companyData = document.createElement('td');
        // companyData.innerText = supplier.companyName;
        // trElement.append(companyData);

        // const contactData = document.createElement('td');
        // contactData.innerText = supplier.contactName;
        // trElement.append(contactData);

        // const countryData = document.createElement('td');
        // countryData.innerText = supplier.address.country
        //     ? supplier.address.country
        //     : 'BOŞ';
        // trElement.append(countryData);

        // const region = supplier.address.region?.toLowerCase().trim();

        // if (region === 'null') {
        //     countryData.style.color = 'red';
        // }

        // tableElement.append(trElement);

        // 2.Yöntem
        const region = supplier.address.region?.toLowerCase().trim();

        // let trElement;
        // if (region === 'null') {
        //     trElement = `<tr>
        //     <td>${supplier.companyName}</td>
        //     <td>${supplier.contactName}</td>
        //     <td style="color:red;">${
        //         supplier.address.country ? supplier.address.country : 'BOŞ'
        //     }</td>
        //    </tr>`;
        // } else {
        //     trElement = `<tr>
        //     <td>${supplier.companyName}</td>
        //     <td>${supplier.contactName}</td>
        //     <td>${
        //         supplier.address.country ? supplier.address.country : 'BOŞ'
        //     }</td>
        //    </tr>`;
        // }

        // tableElement.innerHTML += trElement;

        // 3.Yöntem
        const trElement = `<tr>
            <td>${supplier.companyName}</td>                        
            <td>${supplier.contactName}</td>                        
            <td ${region === 'null' ? 'style=color:red' : null}>${
            supplier.address.country ? supplier.address.country : 'BOŞ'
        }</td>                        
           </tr>`;

        tableElement.innerHTML += trElement;
    });
};

// renderSuppliers();

// const button = document.querySelector('button');
// const table = document.querySelector('table');

// let tableStatus = false;
// button.addEventListener('click', (event) => {
//     console.log('clicklendi');

//     // if (!tableStatus) {
//     //     renderSuppliers();
//     //     tableStatus = true;
//     // } else {
//     //     table.innerHTML = '';
//     //     tableStatus = false;
//     // }

//     // console.log(event);
//     console.log(event.target);
//     // console.log(button);
// });

// const items = document.querySelectorAll('li');

// console.log(items);

// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         console.log(e);
//         e.target.style.textDecoration = 'line-through';
//         console.log(item);
//         // e.target.remove();
//     });
// });

// EVENT BUBBLING VE EVENT DELEGATION

// const button = document.querySelector('button');
// const items = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// const div = document.querySelector('div');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Audio Slave';
//     ul.append(li);
// });

// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI');
//         e.target.style.textDecoration = 'line-through';
//     });
// });

// ul.addEventListener('click', (e) => {
//     console.log('event in UL');
//     console.log(e.target);
//     // console.log(e.target.tagName);

//     e.stopPropagation();
//     if (e.target.tagName === 'LI') {
//         e.target.style.color = '#FFF';
//     }
// });

// div.addEventListener('click', () => {
//     console.log('event in DIV');
// });

const button = document.querySelector('button');
const input = document.querySelector('input');
const brandsSelect = document.querySelector('#brands');

button.addEventListener('click', () => {
    // console.dir(input);
    console.log(input.value);
    console.log(brandsSelect.value);
});

brandsSelect.addEventListener('change', (e) => {
    console.log('changed');
    console.log(e.target.value);
    alert(e.target.value)
});
