const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderItemsLength = sliderItems.length;

let currentSlider = document.querySelector(".slider__item_active");
let currentSliderNumber = sliderItems.indexOf(currentSlider);

const dots = Array.from(document.querySelectorAll(".slider__dot"));

function changeSlider(dotNumber=null) {
    // change current slide number to clicked dot number
    if (dotNumber !== null){
        currentSliderNumber = dotNumber;
    }

    currentSlider.classList.toggle("slider__item_active"); 
    currentSlider = sliderItems[currentSliderNumber];
    currentSlider.classList.toggle("slider__item_active");
}

function swipeLeft(){
    if (currentSliderNumber == 0){
        currentSliderNumber = sliderItemsLength - 1;
    } else {
        currentSliderNumber = currentSliderNumber - 1;
    }
    changeSlider();
    }

function swipeRight(){
    if (currentSliderNumber == sliderItemsLength - 1){
        currentSliderNumber = 0;
    } else {
        currentSliderNumber = currentSliderNumber + 1;

    }
    changeSlider();
 }

// click on previous sign
const previous = document.querySelector(".slider__arrow_prev");
previous.onclick = () => { swipeLeft(); }

// click on next sign
const next = document.querySelector(".slider__arrow_next");
next.onclick = () => { swipeRight(); }

// click on dot
dots.forEach((element, index) => {element.onclick = () => {changeSlider(index)}})