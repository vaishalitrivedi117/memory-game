import "./styles.css";

const cardArray = [
  {
    name: "fries",
    img: "../src/images/fries.png"
  },
  {
    name: "cheesburger",
    img: "../src/images/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "../src/images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "../src/images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "../src/images/milkshake.png"
  },
  {
    name: "pizza",
    img: "../src/images/pizza.png"
  },
  {
    name: "fries",
    img: "../src/images/fries.png"
  },
  {
    name: "cheesburger",
    img: "../src/images/cheeseburger.png"
  },
  {
    name: "hotdog",
    img: "../src/images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "../src/images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "../src/images/milkshake.png"
  },
  {
    name: "pizza",
    img: "../src/images/pizza.png"
  }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosedIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../src/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosedIds[0];
  const optionTwoId = cardsChosedIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "../src/images/blank.png");
    cards[optionTwoId].setAttribute("src", "../src/images/blank.png");
    alert("you have clicked same image");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "../src/images/white.png");
    cards[optionTwoId].setAttribute("src", "../src/images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "../src/images/blank.png");
    cards[optionTwoId].setAttribute("src", "../src/images/blank.png");
    alert("sorry try again");
  }
  cardsChosen = [];
  cardsChosedIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You found them all!";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosedIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
