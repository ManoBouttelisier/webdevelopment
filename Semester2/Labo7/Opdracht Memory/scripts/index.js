const setup = () => {
    createCards();
}

let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    isBusy: false, // Variable to control user clicks during processing
    selectedCards: [], // Array to keep track of selected cards
    matchedPairs: 0 // Counter for matched pairs
};

const kaarten = ['kaart1.jpg', 'kaart2.jpg', 'kaart3.jpg', 'kaart4.jpg', 'kaart5.jpg', 'kaart6.jpg'];
const achterkant = 'achterkant.jpg';

window.addEventListener("load", setup);

const createCards = () => {
    const gameBoard = document.getElementById('game-board');
    const shuffledCards = shuffleArray(kaarten.concat(kaarten));

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.style.backgroundImage = `url(images/${achterkant})`;
        cardElement.addEventListener('click', handleCardClick);
        gameBoard.appendChild(cardElement);
    });
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const handleCardClick = (event) => {
    if (global.isBusy) return; // If processing, ignore clicks
    const clickedCard = event.target;

    // If already matched or clicked on the same card twice, ignore
    if (clickedCard.classList.contains('matched') || clickedCard.classList.contains('selected')) return;

    const index = parseInt(clickedCard.dataset.index);
    const selectedCard = kaarten[index];
    clickedCard.style.backgroundImage = `url(images/${selectedCard})`; // Show the front side
    clickedCard.classList.add('selected');
    global.selectedCards.push({ card: selectedCard, element: clickedCard });

    if (global.selectedCards.length === 2) {
        global.isBusy = true; // Disable clicks during processing
        setTimeout(() => {
            checkForMatch();
            global.isBusy = false; // Enable clicks after processing
        }, 1000); // Adjust delay as needed
    }
}


const checkForMatch = () => {
    const [firstCard, secondCard] = global.selectedCards;
    if (firstCard.card === secondCard.card) {
        firstCard.element.classList.add('matched');
        secondCard.element.classList.add('matched');
        global.matchedPairs++;
        if (global.matchedPairs === global.AANTAL_KAARTEN) {
            // End game logic here
            console.log("Game Over! All pairs matched.");
        }
    } else {
        // If no match, flip cards back after a delay
        setTimeout(() => {
            firstCard.element.style.backgroundImage = `url(images/${achterkant})`;
            secondCard.element.style.backgroundImage = `url(images/${achterkant})`;
            firstCard.element.classList.remove('selected');
            secondCard.element.classList.remove('selected');
        }, 1000); // Adjust delay as needed
    }
    global.selectedCards = []; // Clear selected cards for next turn
}

