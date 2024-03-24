const setup = () => {
    let list = document.querySelectorAll('li');
    for(let i = 0; i < list.length; i++){
        list[i].classList.add('listItem');
        let image = document.createElement('img');
        image.src = "images/Spooky Train.jpg";
        document.body.appendChild(image);
    }
}
window.addEventListener("load", setup);