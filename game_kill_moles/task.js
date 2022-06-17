const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function hasMole(hole){
    if (hole.classList.contains("hole_has-mole")){
        dead.innerHTML = parseInt(dead.innerHTML) + 1;
        // check for the win
        if (dead.innerHTML == 10){
            alert("Победа!")
        }
    }
    else {
        lost.innerHTML = parseInt(dead.innerHTML) + 1;
        // check for lose
        if (lost.innerHTML == 5){
            alert("Вы проиграли!")
        }
    }
} 

for (i=1; i<=9; i++){
    document.getElementById(`hole${i}`).onclick = hasMole(document.getElementById(`hole${i}`));
}