
countDown = setInterval(() => {
    let timer = document.getElementById( 'timer' );
    if (timer.innerHTML > 0){
        timer.textContent = timer.textContent - 1;
        console.log(timer.textContent);
    }
    else {
        clearInterval(countDown);
        alert("Вы победили в конкурсе");
    }
}, 1000)
    

