const popUp = document.querySelector("#modal_main");
const popUpSuccess = document.querySelector("#modal_success");

const close = Array.from(document.querySelectorAll("div.modal__close"));
const showSuccess =  Array.from(document.querySelectorAll(".show-success"));

function displayPopUp(element) {
    element.classList.add("modal_active");
}

function closePopUp(element) {
    element.closest(".modal").classList.remove("modal_active");
}

close.forEach(element => {
    element.onclick = () => {closePopUp(element)};
});

showSuccess.forEach(element =>{
    // close #modal_main div and display #modal_success div
    element.onclick = () => {
        popUp.classList.remove("modal_active");
        displayPopUp(popUpSuccess);
    };
})

displayPopUp(popUp);
