const cards = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

const gameBoard = document.querySelector('.game-board');
const shuffledCards = shuffleArray(cards);

let firstCard, secondCard;
let canFlip = true;
let matchedPairs = 0;

shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = card;
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
});

function flipCard() {
    if (!canFlip) return;
    this.classList.add('visible');
    this.style.color = 'white';

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;

    if (firstCard.textContent === secondCard.textContent) {
        setTimeout(() => {
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            resetCards();
            matchedPairs++;

            if (matchedPairs === 8) {
                alert('Gratulacje! Wygrałeś!');
            }
        }, 1000);
    } else {
        setTimeout(() => {
            firstCard.style.color = 'transparent';
            secondCard.style.color = 'transparent';
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
    canFlip = true;
}

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}
``