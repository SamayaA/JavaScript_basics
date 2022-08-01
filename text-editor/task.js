// save textarea textContent to localStorage
const textarea = document.getElementById("editor");
textarea.value = (localStorage.getItem("textarea"))? JSON.parse(localStorage.getItem("textarea")): textarea.textContent;

const btnClear = document.getElementById("clear-editor");

textarea.addEventListener("keyup", ()=>{
    if (textarea.value.trim() < 1){
        localStorage.removeItem("textarea");
    } else {
        localStorage.setItem("textarea", JSON.stringify(textarea.value.trim()));
    }
});

btnClear.addEventListener("click", ()=>{
    localStorage.removeItem("textarea");
    textarea.value = '';
})


