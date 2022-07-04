const book = document.querySelector(".book")
const fontSizes = Array.from(document.querySelectorAll(".font-size"));
const activeFont = document.querySelector(".font-size_active");

function changeFont(event) {
    event.preventDefault();
    if (event.target.dataset.size == "small"){
        book.classList.add("book_fs-small");
        return false
    };
    if (event.target.dataset.size == "big"){
        book.classList.add("book_fs-big");
        return false
    };
    book.className = "book";
    return false
}

fontSizes.forEach((element) => {
    element.addEventListener("click", changeFont)
})