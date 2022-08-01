const popUp = document.getElementById("subscribe-modal");
const close = document.querySelector("div.modal__close");

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function displayPopUp(element) {
    element.classList.add("modal_active");
}

if (getCookie("popup") !== "false"){
    displayPopUp(popUp);
}

close.onclick = (event) => {
    event.target.closest(".modal").classList.remove("modal_active");
    document.cookie = encodeURIComponent("popup") + "=" + encodeURIComponent(false);
    event.stopPropagation();
};
