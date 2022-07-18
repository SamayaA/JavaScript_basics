const subMenu = Array.from(document.getElementsByClassName("menu_sub"))
const menuLink = [];
subMenu.forEach((element) => {
    menuLink.push(element.closest(".menu__item").querySelector(".menu__link"));
});

function closeDropDownMenu(){
    let activeMenu = document.querySelector("ul.menu_active");
    // close all active Drop down menu
    if (activeMenu !== null){
        activeMenu.classList.remove("menu_active")
    };
}

function displayDropDownMenu(menu) {
    if (menu != null){
        menu.classList.toggle("menu_active");
    }
}

menuLink.forEach((element) => {
    element.onclick = (event) => {
        let menu = event.target.closest(".menu__item").querySelector("ul.menu_sub");
        if ((menu !== null) & menu.classList.contains("menu_active")){
            closeDropDownMenu();
        } else {
            closeDropDownMenu();
            displayDropDownMenu(menu);
        }
        // return false to EventListener to prevent following a link
        return false
    }
})