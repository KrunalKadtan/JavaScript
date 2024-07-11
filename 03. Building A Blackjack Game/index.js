let cards = []; //array
let hasBlackJAck = false;
let isAlive = false;
let message = "";

let sum = 0;

let player = {
  name: "Krunal",
  chips: 145
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");   [it's also correct]
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " : $" + player.chips

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  sum = firstCard + secondCard;

  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum : " + sum;
  cardEl.textContent = "Cards : ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ", ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card..!";
  } else if (sum === 21) {
    message = "You've a Blackjack..!";
    hasBlackJAck = true;
  } else {
    message = "You're out of the game..!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJAck === false) {
    let newCard = getRandomCard();

    sum += newCard;

    cards.push(newCard);

    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
