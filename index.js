let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1

    if(randomCard === 1){
        return 11
    }else if(randomCard > 10){
        return 10
    }else{
        return randomCard
    }

    
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
    let anotherCard = getRandomCard()
    sum += anotherCard
    cards.push(anotherCard)
    renderGame()
}
