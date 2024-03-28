let setup;
setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", changeColor);
    }
    const saveButton = document.getElementById("SaveButton");
    saveButton.addEventListener('click', SaveColor);

    const savedColors = document.getElementById("SavedColors");
    savedColors.addEventListener('click', replaceColor);

    changeColor();
};

let changeColor;
changeColor = () => {
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");
    const colorSquare = document.getElementById("CP-square");

    let red = redSlider.value;
    let green = greenSlider.value;
    let blue = blueSlider.value;
    let bgColor = `rgb(${red}, ${green}, ${blue})`;

    colorSquare.style.backgroundColor = bgColor;
};

const SaveColor = () => {
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    let red = redSlider.value;
    let green = greenSlider.value;
    let blue = blueSlider.value;

    let colorBox = document.createElement("div");
    colorBox.classList.add("colorbox");
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorBox.style.width = "100px";
    colorBox.style.height = "100px";
    colorBox.style.display = "inline-block";
    colorBox.style.marginLeft = "15px";
    colorBox.style.marginBottom = "10px";
    colorBox.style.border = "4px solid black";
    colorBox.style.borderRadius = "15px";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', () => {
        colorBox.remove();
    });

    colorBox.appendChild(deleteButton);
    document.getElementById("SavedColors").appendChild(colorBox);
};

const replaceColor = (event) => {
    if (event.target.classList.contains('colorbox')) {
        const rgbColor = event.target.style.backgroundColor.match(/\d+/g);
        const red = rgbColor[0];
        const green = rgbColor[1];
        const blue = rgbColor[2];

        const redSlider = document.getElementById("red");
        const greenSlider = document.getElementById("green");
        const blueSlider = document.getElementById("blue");

        redSlider.value = red;
        greenSlider.value = green;
        blueSlider.value = blue;

        changeColor();
    }
};

window.addEventListener("load", setup);
