
const timer = document.getElementById( 'timer' );

function delayTime(time){
    setTimeout(timerSet(time), 1000);
}

function timerSet(value) {
    if (value > 0){
        timer.textContent = timer.textContent - 1;
    }
    else {
        alert("You win");
    }
}

while (timer.textContent > 0){
    delayTime(timer.textContent);
    console.log(timer.textContent);
}
    

