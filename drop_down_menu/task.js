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

function displayDropDownMenu(position) {
    let menuPosition = position.closest(".menu__item");
    let element = menuPosition.querySelector("ul.menu, ul.menu_sub");

    if (!(element.classList.contains("menu_active"))) {
        element.classList.add("menu_active");
    }
}

menuLink.forEach((element) => {
    element.onclick = () => {
        closeDropDownMenu();
        displayDropDownMenu(element);
        // return false to EventListener to prevent following a link
        return false

    }
})