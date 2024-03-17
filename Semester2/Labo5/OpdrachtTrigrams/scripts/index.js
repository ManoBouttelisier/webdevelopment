const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener('click', trigram);
}

const trigram = () => {
    let text = document.getElementById("input").value;
    //let result = document.getElementById("result");
    let trigram = [];

    for (let i = 0; i < text.length - 2; i++) {
        trigram.push(text.slice(i, i + 3));
    }

    for(let i = 0; i < trigram.length ;i++){
        console.log(trigram[i]);
    }
}

window.addEventListener("load", setup);