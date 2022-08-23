let cardin =[]
let sum = 0
let hasblackjack = false
let isalive = false
let message =" "



let player = {
 Name:"per",
Chips: 123
}

function desk(){
    play()
 isalive = true
let text = document.getElementById("Plugins")

 text.textContent = player.Name + " : $" + player.Chips
}
function getRandomCard(){
 
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


function play(){
    let sumEl = document.getElementById("sum-el")
    let mess = document.getElementById("message-el")
let card = document.getElementById("card")
card.textContent= "Cards: "
for (i = 0 ; i < cardin.length; i++){
    card.textContent += cardin[i] + " "
}
  
sumEl.textContent = "Sum: " + sum 


    if (sum <= 20){
        message = "Do you want to draw new card😳?";
    }
    
    
    else if(sum == 21){
        message = "Woohoow you Got Blackjack😋🙆";
        hasblackjack = true;
    
    }
    else if(sum > 21){
        message = "Your are Out Of The Game🙆";
     isalive= false;
    
    }
     mess.textContent = message
  
}

function newcard(){
    if( isalive === true && hasblackjack == false){

   
    let cardx = getRandomCard()
    sum += cardx
    cardin.push(cardx)
    play()
}
}



