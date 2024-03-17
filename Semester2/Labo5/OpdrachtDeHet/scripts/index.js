const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener('click', replaceDeByHet);
}

const replaceDeByHet = () => {
    let zin = document.getElementById("input").value;

    if(zin.slice(0, 3) === 'De ') {
        zin = 'Het' + zin.slice(2);
    }

    let output = "";
    for(let i = 0; i < zin.length; i++) {
        if(zin.slice(i, i + 4) === ' de ') {
            output += zin.slice(0, i) + ' het' + zin.slice(i + 3);
        }
    }
    console.log(output);
}

window.addEventListener("load", setup);
//"De "
//" de "