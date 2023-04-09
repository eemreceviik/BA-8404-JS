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

const textElement = document.querySelector('#text');

// console.log(textElement.innerText);
// textElement.innerText = 'Korhan Kösece';
// console.log(textElement.innerText);

const textList = document.querySelectorAll('.text-class');

// textList.forEach((element) => {
//     element.innerText = 'Yeni text ekledim!'
// });

// textElement.innerHTML = `<h2>this is a new text</h2>`;
// textElement.innerText = `<h2>this is a new text</h2>`;
// textElement.innerHTML = textElement.innerHTML + `<h2>this is a new text</h2>`
// textElement.innerHTML += `<h2>this is a new text</h2>`

// const link = document.querySelector('a');
// console.log(link.getAttribute('id'));
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

const elementList = document.querySelectorAll('p');
console.log(elementList);

elementList.forEach((element) => {
    if (element.textContent.toLowerCase().includes('success')) {
        element.classList.add('success');
    } else if (element.textContent.toLowerCase().includes('error')) {
        element.classList.add('error');
    }
});
