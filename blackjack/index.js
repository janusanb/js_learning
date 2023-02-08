let cardsInHandArray = []


let hasBlackJack = false;
let isAlive = true;
let outputMessage = "";

let messageEl = document.getElementById("message-el")
// let sumMessageEl = document.getElementById("sum-message-el")

let sumMessageEl = document.querySelector("#sum-message-el")
let cardsMessageEl = document.querySelector("#cards-message-el")

function getRandomCard() {
    /* Come back to this and convert the code to include 
    a flag to see if Ace shows up. If it does then use a 
    "soft" sum to check if the player is bust by adding 
    an additional card
    */
    let card = Math.floor( (Math.random()) * 11) + 1
    if (card == 1) {
        card = 11
    }
    return card



}


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsInHandArray = [firstCard, secondCard];
    renderGame()

}

function renderGame() {
    let sum = 0;
    cardsMessageEl.textContent = "Cards: ";
    for (let i = 0; i < cardsInHandArray.length; i++) {
        sum += cardsInHandArray[i];
        cardsMessageEl.textContent += cardsInHandArray[i] + " ";
    }
    sumMessageEl.textContent = "Sum: " + sum;
    console.log("start game button pressed");
    if (sum <= 20) {
        outputMessage = "Do you want another card?";
    } else if (sum == "21") {
        outputMessage = "Woohoo! You got Blackjack!";
        hasBlackJack = true;
    } else {
        outputMessage = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = outputMessage;
    console.log(outputMessage);
}

function newCard() {
    if (cardsInHandArray.length == 0) {
        outputMessage = "Press Start Game" 
    } else if (hasBlackJack) {
        console.log("Black Jack!");
        cardsInHandArray = [];
        outputMessage = "You hit Black Jack! Want to play a round?";
        sumMessageEl.textContent = "Sum: ";
        cardsMessageEl.textContent = "Cards: ";
        hasBlackJack = false
    } else if (isAlive && !hasBlackJack) {
        console.log("Drawing a new card");
        let newDealtCard = getRandomCard();
        cardsInHandArray.push(newDealtCard);
        renderGame();
    } else {
        console.log("Player Bust! Want to play a round?");
        cardsInHandArray = [];
        outputMessage = "Want to play a round?";
        sumMessageEl.textContent = "Sum: ";
        cardsMessageEl.textContent = "Cards: ";
        isAlive = true;
    }
    messageEl.textContent = outputMessage;

}