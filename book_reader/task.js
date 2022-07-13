const book = document.querySelector(".book")
const fontSizes = Array.from(document.querySelectorAll(".font-size"));

function changeFont(event) {
    event.preventDefault();
    book.className = "book";

    let activeFont = document.querySelector(".font-size_active");
    activeFont.classList.remove("font-size_active");
    event.target.classList.add("font-size_active");

    if (event.target.dataset.size == "small"){
        book.classList.add("book_fs-small");        
        return false
    };
    if (event.target.dataset.size == "big"){
        book.classList.add("book_fs-big");
        return false
    };
}

fontSizes.forEach((element) => {
    element.addEventListener("click", changeFont)
})