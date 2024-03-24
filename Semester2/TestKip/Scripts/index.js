const setup = () => {
    updatePagina();
    document.getElementById('kip').addEventListener('change', updatePagina);
    document.getElementById('letterInput').addEventListener('input',countLetter);
}
let text = document.getElementById('note');
const updatePagina = () => {
    let options = document.getElementById('kip').value;
    let image = document.getElementById('img');
    let optionsText = options.toLowerCase();

    if (options === "--KIES--") {
        image.className = 'hidden';
    } else if (options === "met een ei") {
        image.className = 'with-egg';
        text.innerHTML = 'Hierboven, een kip ' + optionsText;
    } else if (options === "zonder een ei") {
        image.className = '';
        text.innerHTML = 'Hierboven, een kip ' + optionsText;
    }
}
function countLetter() {
    let letter = document.getElementById('letterInput').value.toLowerCase();
    let count = 0;
    let textContent = document.getElementById('note').innerText.toLowerCase();
    for (let i = 0; i < textContent.length; i++) {
        if (textContent[i] === letter) {
            count++;
            console.log("test dit");
        }
    }
    text.innerHTML += "<br> Letter \"" + letter + "\" komt " + count.toString() + " keer voor in bovenstaande zin";
}
window.addEventListener("load", setup);