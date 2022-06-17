const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");

// create clicker speed div
clickSpeed = document.createElement('div');
clickSpeed.setAttribute("class", "click_speed");
clickSpeed.innerHTML = 'Скорость клика: <span id="clicker__speed"></span>'
document.getElementById("clicker").appendChild(clickSpeed);
const clickerSpeed = document.getElementById("clicker__speed")

// click on cookie img
cookie.onclick = () => {
    // count clicks
    if (clickCounter.innerHTML % 2 == 0){ 
        cookie.width = cookie.width * 1.1;
        cookie.height = cookie.height * 1.1;
    }
    else {
        cookie.width = cookie.width / 1.1;
        cookie.height = cookie.height / 1.1;
    }
    clickCounter.innerHTML = parseInt(clickCounter.innerHTML) + 1;

    // output the time from last click
    if (clickCounter.innerHTML == 1){
        start = Date.now();
    }
    else {
        end =  Date.now();
        clickerSpeed.innerHTML = (end - start) / 1000;
        start = Date.now();
    }
}