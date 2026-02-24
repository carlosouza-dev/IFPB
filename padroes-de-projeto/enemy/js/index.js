let audioScream = new Audio("audio/scream.mp3");
let audioDeath = new Audio("audio/death.mp3");
let audioSad = new Audio("audio/music-sad.mp3");

let life = 200;
let isDead = false;

btnAttack.onclick = attack;

function attack() {
    takeDamageOnLife(40);
    
    updateLifeBar();

    if (life <= 0){
        imgPlayerFace.src = "../img/deading.png";
        audioDeath.play();

        setTimeout(function() {
            imgPlayerFace.src = "../img/dead.png"
            isDead = true;
            audioSad.play();

            setTimeout(reset, 18_000);
        }, 5000);

        return;
    }
    
    imgPlayerFace.src = "../img/scream.png";
    audioScream.play();
    setTimeout(function() {
        imgPlayerFace.src = "../img/happy.png";
    }, 4000);
}

function takeDamageOnLife(damage) {
    life -= damage;
    if (life < 0) life = 0;
}

function updateLifeBar() {
    lifeBar.style.width = life + "px";
}

function reset() {
    life = 200;
    isDead = false;
    lifeBar.style.width = life + "px";
    imgPlayerFace.src = "../img/happy.png"
}