/**
 Enkelt kortspel där spelaren gissar om nästa kort som dras ur högen
 är högre, längre eller likvärdigt. Poäng ges vid rätt gissning.
 Spelet är slut när kortleken är slut, eller man gissatfel 3 ggr.
 **/

// 1. Generera kortlek
// 2. Välj ett slumpmässig kort och ta bort ur kortleken

const lowerButton = document.querySelector("#lower");
const equalButton = document.querySelector("#equal");
const higherButton = document.querySelector("#higher");

const deck = generateDeck();
let activeCard = {};
pickCard();
showCard();

function generateDeck() {
  let deck = [];
  const suits = ["&spades", "&hearts", "€clubs", "&diams"];

  for (let i = 0; i < suits.length; i++) {
    // Loopa igenom varje färg
    for (let j = 2; j < 15; j++) {
      // För varje färg loopa och skapa kort från värde 2-14
      let card = {
        suit: suits[i],
        color: getColor(suits[i]),
        display: getDisplay(j),
        value: "",
      };

      deck.push(card);
    }
  }

  function getColor(suit) {
    if (suit === "&hearts" || suit === "&diams") {
      return "red";
    } else {
      return "black";
    }
  }

  function getDisplay(value) {
    if (value < 11) {
      return value;
    } else if (value === 11) {
      return "J";
    } else if (value === 12) {
      return "D";
    } else if (value === 13) {
      return "K";
    } else if (value === 14) {
      return "A";
    }
  }

  return deck;
}

function pickCard() {
  const randomPosition = Math.floor(Math.random() * deck.length);
  const pickedCard = deck.splice(randomPosition, 1); // Startar från slumpad position och plockar ut det elementet från array:en

  console.log(pickedCard);
  activeCard = pickedCard[0];
}

function showCard() {
  const cardHolderElem = document.querySelector("#show-card");

  cardHolderElem.innerHTML = `
  <section class"front">
  <header><span class="${activeCard.color}">${activeCard.suit}</span>${activeCard.display}</header>
  <div class="suite ${activeCard.color}">${activeCard.suit}</div>
  <footer><span class="${activeCard.color}">${activeCard.suit}</span>${activeCard.display}</footer>
  </section>
  `;
}

lowerButton.addEventListener("click", () => {
  const previousCard = activeCard;
  pickCard();
  showCard();

  console.log(previousCard);
  console.log(activeCard);

  if (activeCard.value < previousCard.value) {
  } else {
  }
});

equalButton.addEventListener("click", () => {
  const previousCard = activeCard;
  pickCard();
  showCard();

  console.log(previousCard);
  console.log(activeCard);

  if (activeCard.value === previousCard.value) {
  } else {
  }
});

higherButton.addEventListener("click", () => {
  const previousCard = activeCard;
  pickCard();
  showCard();

  console.log(previousCard);
  console.log(activeCard);

  if (activeCard.value > previousCard.value) {
  } else {
  }
});
