const menuLink = Array.from(document.getElementsByClassName("menu__link"));

function closeDropDownMenu(){
    let activeMenu = Array.from(document.querySelectorAll("ul.menu, ul.menu_sub, ul.menu_active"));
    // close all active Drop down menu
    activeMenu.forEach((element) => {
        if (element.classList.contains("menu_active")){
            element.classList.remove("menu_active")
        }
    });
}

function displayDropDownMenu(event) {
    let menuPosition =event.target.closest(".menu__item");
    let element = menuPosition.querySelector("ul.menu, ul.menu_sub");
    if (element != null){
        element.classList.toggle("menu_active");
    }
}

menuLink.forEach((element) => {
    element.onclick = (event) => {
        closeDropDownMenu();
        displayDropDownMenu(event);
        // return false to EventListener to prevent following a link
        return false
    }
})