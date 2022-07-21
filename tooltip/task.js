const aWithTooltip = Array.from(document.querySelectorAll(".has-tooltip"))


function createTooltip(event){
    let tooltip = document.createElement("div");
    tooltip.setAttribute("class", "tooltip tooltip_active");
    // position css
    tooltip.style.top = `${event.target.style.fontSize}px`;
    tooltip.style.left = `${event.clientX}px`;
    tooltip.style.position = "absolute";
    tooltip.innerText = event.target.title;
    
    event.target.insertAdjacentHTML("afterend", tooltip.outerHTML);
}

function showTooltip(event) {
    event.preventDefault();
    nextSibling = event.target.nextElementSibling;
    if ((nextSibling != null) && (nextSibling.className == "tooltip tooltip_active")){
        deleteTooltip();
    } else {
        deleteTooltip();
        createTooltip(event);       
    }
}

function deleteTooltip() {
    let toolTip = document.querySelector(".tooltip");
    if (toolTip != null){
        toolTip.remove();
    }
}

aWithTooltip.forEach(((element) => {element.addEventListener("click", showTooltip)}))

