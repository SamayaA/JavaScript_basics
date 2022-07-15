const inputSearch = document.querySelector(".autocomplete__search");
const textContent = document.querySelector(".autocomplete__text-content"); 
const options = Array.from(document.querySelector(".autocomplete__input").children);
const autocompleteList = document.querySelector(".autocomplete__list")


function getMatches(){
    let answer = [];
    for (let i=0; i<options.length; i++){
        if (options[i].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())){
            answer.push({
                text: options[i].textContent,
                value: options[i].value
              })
        }
    } 
    return answer
}

function displayChoices(answer){
    autocompleteList.innerText = '';
    answer.forEach((element) =>{
        let li = document.createElement("li");
        li.setAttribute("value", element.value);
        li.innerText = element.text;
        li.addEventListener("click", ()=>{
            textContent.innerText = li.innerText;
            inputSearch.value = '';
            inputSearch.classList.remove("autocomplete__search_active");
            autocompleteList.classList.remove("autocomplete__list_active");
        })
        autocompleteList.append(li);
    })
}

textContent.addEventListener("click", () => {
    inputSearch.classList.add("autocomplete__search_active");
    autocompleteList.classList.add("autocomplete__list_active");
})

inputSearch.addEventListener("keydown", () => {
    let matches = getMatches();
    displayChoices(matches);
})