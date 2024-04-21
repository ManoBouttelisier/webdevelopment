const setup = () => {

    let output = document.getElementById('output');

    let today = new Date();
    let birthday = new Date('December 12, 2005 12:00:00')

    let verschil = today.getTime() - birthday.getTime();
    let dagenTusen = Math.floor(verschil / (1000 * 60 * 60 * 24))


    let outputText = 'Tussen vandaag en mijn verjaardag 12/12/2005 zitten er ' + dagenTusen + ' dagen'

    console.log(outputText);
    output.textContent = outputText;

}


window.addEventListener("load", setup);