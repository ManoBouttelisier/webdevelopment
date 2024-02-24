const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = tekst;
}

document.addEventListener("DOMContentLoaded", function() {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
});
