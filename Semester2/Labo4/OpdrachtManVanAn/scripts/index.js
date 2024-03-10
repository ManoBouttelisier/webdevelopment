const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener('click', telAn1);

    let button2 = document.getElementById("button2");
    button2.addEventListener('click', telAn2);
}
const telAn1 = () => {
    const zin = document.getElementById("tekst").innerText.toLowerCase();
    let result = document.getElementById("result");
    let index = zin.indexOf('an');
    let teller = 0;

    while(index !== -1){
        index = zin.indexOf('an', index + 1);
        teller++;
    }
    result.innerText = teller.toString();
}

const telAn2 = () => {
    const zin = document.getElementById("tekst").innerText.toLowerCase();
    let result2 = document.getElementById("result2");
    let index = zin.lastIndexOf('an');
    let teller = 0;

    while(index !== -1){
        index = zin.lastIndexOf('an', index - 1);
        teller++;
    }
    result2.innerText = teller.toString();
}
window.addEventListener("load", setup);