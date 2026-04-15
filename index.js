let firstCard = 8
let secondCard = 11

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}


function renderGame(){
    
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "   "
    }






    sumEL.textContent = "Sum: " + sum


    if (sum < 21){
    message = "Do you want to draw a new card ??"
    }
    else if (sum === 21){
        message = "You got the BlackJack !! Congratulations !! "
        hasBlackJack = true
    }
    else{
        message = "Sorry, You are out of the game"
        isAlive = false
    }

    messageEL.textContent = message

}

function newCard(){
    let anotherCard = 1
    sum += anotherCard
    cards.push(anotherCard)
    startGame()
}
