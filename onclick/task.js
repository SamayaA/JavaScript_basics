const cookieImg = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");

// create clicker speed div
const clickSpeed = document.createElement('div');

clickSpeed.setAttribute("class", "click_speed");
clickSpeed.innerHTML = 'Скорость клика: <span id="clicker__speed"></span>'
document.getElementById("clicker").appendChild(clickSpeed);
const clickerSpeed = document.getElementById("clicker__speed")

// initialization of start click and next click time
let start = 0;
let end = 0;

// click on cookie img
cookie.onclick = () => {
    // increase or decrease img on click and count click
    cookieImg.width = ++clickCounter.textContent % 2 ? 220 : 200;
    cookieImg.height = clickCounter.textContent % 2 ? 150 : 130;

    // output click speed
    if (clickCounter.innerHTML == 1){
        start = Date.now();
    }
    else {
        end =  Date.now();
        clickerSpeed.innerHTML = Math.round((1/((end - start) / 1000))*100) / 100;
        start = Date.now();
    }
}