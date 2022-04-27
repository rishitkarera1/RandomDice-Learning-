var randomNumber1  = Math.floor( (Math.random()*6)+1 );
var randomNumber2  = Math.floor( (Math.random()*6)+1 );


if (randomNumber1>randomNumber2){
    document.getElementById("heading").textContent = "Player 1 wins!"
}
else if (randomNumber1<randomNumber2){
    document.getElementById("heading").textContent = "Player 2 wins!"
}
else{
    document.getElementById("heading").textContent = "Draw"
}

function changeDiceNumber(diceName , randomNumber) {
    Image = "img"
    if (randomNumber == 1) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice1.png")
    }
    if (randomNumber == 2) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice2.png")
    }
    if (randomNumber == 3) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice3.png")
    }
    if (randomNumber == 4) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice6.png")
    }
    if (randomNumber == 5) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice5.png")
    }
    if (randomNumber == 6) {
        document.querySelectorAll(Image)[diceName].setAttribute("src" , "images/dice6.png")
    }
}
changeDiceNumber(0 , randomNumber1);
changeDiceNumber(1 , randomNumber2);
