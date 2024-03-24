const setup = () => {
    document.querySelectorAll('p').forEach(function(paragraph) {
        // Change the text content of each <p> element
        paragraph.textContent = "Good Job!";
    });
}

window.addEventListener("load", setup);