let audioScream = new Audio("scream.mp3");

btnAttack.onclick = attack;

function attack() {
    audioScream.play();
    imgEnemy.scr = "scream.png";
}