let audioScream = new Audio("audio/scream.mp3");
let audioDeath = new Audio("audio/death.mp3");
let audioSad = new Audio("audio/music-sad.mp3");

let life = 200;
let isDead = false;

const playerFaceImage = document.querySelector("#imgPlayerFace");
const attackButton = document.querySelector("#btnAttack");
const lifeBar = document.querySelector("#lifeBar")
const messageDeath = document.querySelector("#msgDeath");

attackButton.onclick = attack;

function attack() {
    if (isDead) return;

    takeDamageOnLife(20);
    
    updateLifeBar();

    if (life <= 0){
        dead();

        return;
    }
    
    hit();
}

function takeDamageOnLife(damage) {
    life -= damage;
    if (life < 0) life = 0;
}

function updateLifeBar() {
    lifeBar.style.width = life + "px";

    updateColorLifeBar();
}

function updateColorLifeBar() {
    if (life <= 50) {
        lifeBar.style.backgroundColor = "red";
    } else if (life <= 100) {
        lifeBar.style.backgroundColor = "orange";
    } else {
        lifeBar.style.backgroundColor = "green";
    }
}

function dead() {
    playerFaceImage.src = "./img/deading.png";
    messageDeath.textContent = "MORRENDO";
    audioDeath.play();

    setTimeout(function () {
        playerFaceImage.src = "./img/dead.png";
        messageDeath.textContent = "MORREU";
        isDead = true;
        audioSad.play();

        setTimeout(reset, 18000);
    }, 5000);
}

function reset() {
    life = 200;
    isDead = false;
    messageDeath.textContent = "";
    updateLifeBar();
    playerFaceImage.src = "./img/happy.png"
}

function hit() {
    audioScream.currentTime = 0;
    audioScream.play();
    
    playerFaceImage.src = "./img/scream.png";
    
    setTimeout(function () {
        playerFaceImage.src = "./img/happy.png";
    }, 4000);
}