let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

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

console.log(message)