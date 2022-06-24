// set timer
const countDown = setInterval(() => {
    const timer = document.getElementById( 'timer' );
    if (timer.innerHTML > 0){
        timer.textContent = timer.textContent - 1;
    }
    else {
        clearInterval(countDown);
        alert("Вы победили в конкурсе");
    }
}, 1000)
    

