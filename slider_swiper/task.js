const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderItemsLength = sliderItems.length;
const dots = Array.from(document.querySelectorAll(".slider__dot"));

function findCurrentNumber(){
    let currentSlider = document.querySelector(".slider__item_active");
    return sliderItems.indexOf(currentSlider);
}

function deactivate(number){
    sliderItems[number].classList.remove("slider__item_active");
    dots[number].classList.remove("slider__dot_active");
}

function activate(number){
    sliderItems[number].classList.add("slider__item_active");
    dots[number].classList.add("slider__dot_active");
}

function swipeLeft(number){
    currentNumber = (number == 0)? sliderItemsLength - 1 : number - 1;
    return currentNumber
    }

function swipeRight(number){
    currentNumber = (number == sliderItemsLength - 1)? 0: number + 1;
    return currentNumber
 }

// click on previous sign
const previous = document.querySelector(".slider__arrow_prev");
previous.onclick = ()=> {
    let number = findCurrentNumber();
    deactivate(number);
    number = swipeLeft(number);
    activate(number);
};

// click on next sign
const next = document.querySelector(".slider__arrow_next");
next.onclick = ()=> {
    let number = findCurrentNumber();
    deactivate(number);
    number = swipeRight(number);
    activate(number);
};

// click on dot
dots.forEach((element, index) => {
    element.onclick = () => {
        let number = findCurrentNumber();
        deactivate(number);
        activate(index);
    }
})