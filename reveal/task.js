const messageBoxes = Array.from(document.querySelectorAll(".reveal"));

function isRectangle(box) {
    const {top, bottom} = box.getBoundingClientRect();
    if ((bottom > 0) & (top < window.innerHeight)) {
        return true
    } else {
        return false
    }
}

document.addEventListener("scroll", () => {
    messageBoxes.forEach((element) => {
        if (isRectangle(element)) {
            if (!(element.classList.contains("reveal_active"))){
                element.classList.add("reveal_active")
            }
        } else {
            element.classList.remove("reveal_active")
        }
    }) 
})

