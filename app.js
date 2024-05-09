const cols = document.querySelectorAll('.column');

document.addEventListener('keydown', (event) => { // по нажатию на пробел запускается функция setRandomColors()
    if (event.code.toLowerCase() === 'space') {
        setRandomColors();
    }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type

    if (type === 'lock') {
        console.log('lock');
    }
})

function generateRandomColors() {
    // RGB
    // red #FF0000
    // green #00FF00
    // blue #0000FF

    const hexCodes = '1234567890abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color = color + hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
}

function setRandomColors() {
    cols.forEach((cols) => {
        const text = cols.querySelector('h2');
        const btn = cols.querySelector('button');
        const color = generateRandomColors();

        /*
        const color = chroma.random() - библиотека, которую мы подключили тоже дает возможность генерировать цвета случайно, но мы уже сделали свою функцию)
        */

        text.textContent = color;
        cols.style.background = color;

        setTextColor(text, color);
        setTextColor(btn, color);
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance(); // берем с библиотеки
    text.style.color = luminance > 0.7 ? 'black' : 'white';
}

setRandomColors();