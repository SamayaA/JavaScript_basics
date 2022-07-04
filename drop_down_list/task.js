
const dropDown = document.querySelector(".dropdown");
const dropDownClassList = document.querySelector(".dropdown__list").classList;
const value = document.querySelector(".dropdown__value");

const listItems = Array.from(document.querySelectorAll(".dropdown__item"));

function list() {
    dropDownClassList.toggle("dropdown__list_active");
    return false;
}

// change value of dropDown 
function changeValue(evt) {
    evt.preventDefault();
    value.innerHTML = evt.target.textContent;
    list();
    return false;
}

dropDown.addEventListener('click', list);

listItems.forEach(element => {
    element.addEventListener('click', changeValue, false);
});



