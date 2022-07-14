// Реализуйте функционал, когда при клике на галочку будут проставляться/сниматься галочки вложенных списков

const ulChildren = Array.from(document.querySelector("ul").children);

ulChildren.forEach(element => {
    element.addEventListener("click", (event)=> {
        let li = Array.from(event.target.closest("li.interest").querySelectorAll("ul li label input"));
        li.forEach((element) => {element.checked = event.target.checked;})

        if (li.length == 1){
            li = li[0];
            let ul = li.closest("ul");
            nestedLi = Array.from(ul.children);
            let filtered = nestedLi.filter((element)=> element.querySelector("input").checked)
            let input = ul.closest("li").querySelector("input");
            input.checked = filtered.length == 0? false: true;
            
        }

    })
});

