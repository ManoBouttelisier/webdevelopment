const setup = () => {
    updatePagina();
    document.getElementById('kip').addEventListener('change', updatePagina);
    document.getElementById('count').addEventListener('input', countLetter);
}
let text = document.getElementById("note");
const updatePagina = () => {
    let options = document.getElementById('kip').value;
    let image = document.getElementById('img');

    if (options === "niets") {
        image.className = 'hidden';
    } else if (options === "metEi") {
        image.className = 'with-egg';
        text.innerHTML = 'kip heeft een ei'
    } else if (options === "zonderEi") {
        image.className = '';
    }
}

function countLetter() {
    let countText = document.getElementById('count');
    const letter = document.getElementById('inputLetter').value.toLowerCase();
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }
    countText.innerHTML = count.toString();
}
window.addEventListener("load", setup);