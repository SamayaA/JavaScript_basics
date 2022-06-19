const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function clear(){
    dead.innerHTML = 0;
    lost.innerHTML = 0;

}
function hasMole(hole){
    if (hole.classList.contains("hole_has-mole")){
        dead.innerHTML = parseInt(dead.innerHTML) + 1;
        // check for the win
        if (dead.innerHTML == 10){
            alert("Победа!");
            clear();
        }
    }
    else {
        lost.innerHTML = parseInt(lost.innerHTML) + 1;
        // check for lose
        if (lost.innerHTML == 5){
            alert("Вы проиграли!");
            clear();
        }
    }
} 

for (i = 1; i <= 9; i++) {
    let element = document.getElementById(`hole${i}`);
    element.onclick = () => {hasMole(element)};
}