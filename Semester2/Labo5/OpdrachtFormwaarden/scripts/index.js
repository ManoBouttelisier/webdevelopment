const setup = () => {
    button.addEventListener('click', toonResultaat)
}

let button = document.getElementById("button");
const toonResultaat = () => {
    getIsRoker();
    getMoedertaal();
    getBuurland();
    getBestelling()
}

const getIsRoker = () => {
    let isRoker = document.getElementById('roker');
    if(isRoker.checked){
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }
}
const getMoedertaal = () => {
    let isNederlands = document.getElementById('nederlands');
    let isFrans = document.getElementById('frans');
    let isEngels = document.getElementById('engels');
    if(isNederlands.checked){
        console.log("moedertaal is nl");
    } else if(isFrans.checked){
        console.log("moedertaal is fr");
    } else{
        console.log('moedertaal is en');
    }
}
const getBuurland = () => {
    let buurland = document.getElementById("buurland").value;
    console.log("favoriete buurland is " + buurland.toString());
}
const getBestelling = () => {
    let bestellingLog = "Bestelling bestaat uit ";
    let bestelling = document.getElementById("bestelling").options;
    for(let i = 0; i < bestelling.length;i++){
        if(bestelling[i].selected){
            bestellingLog += bestelling[i].value.toString() + " ";
        }
    }
    console.log(bestellingLog);
}
window.addEventListener("load", setup);