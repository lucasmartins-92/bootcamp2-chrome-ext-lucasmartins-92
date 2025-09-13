document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const cores = [
        '#a8dadc',
        '#f1faee',
        '#e63946',
        '#f4a261',
        '#2a9d8f',
        '#e9c46a',
    ];

    let indiceAtual = 0;
    colorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = cores[indiceAtual];
        indiceAtual = (indiceAtual + 1) % cores.length;
    });

    const dontPressButton = document.getElementById('dontPressButton');
    dontPressButton.addEventListener('click', () => {
        chrome.tabs.create({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' });
    });
});