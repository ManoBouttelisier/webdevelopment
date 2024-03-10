setup = () => {
	button.addEventListener('click', genereerSpaties)
}
let button = document.getElementById("button")
const genereerSpaties = () => {
    console.log("test");
    let tekst = document.getElementById("text").value;
    let output = document.getElementById("output");
    let woord = "";

    for(let i = 0; i < tekst.length;i++){
        woord += tekst.charAt(i) + " ";
    }
    return output.textContent = woord;
}


window.addEventListener("load", setup);