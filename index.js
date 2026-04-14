let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")

function start(){
    
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
