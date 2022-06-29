const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

let activeTabIndex = tabs.indexOf(document.querySelector(".tab_active"));

// changes tab and content to display
function changeActiveTab(index=null){
    if (index == null){
        return false
    } else {
        tabs[index].classList.toggle("tab_active"); 
        tabContents[index].classList.toggle("tab__content_active"); 
    }
}

function displayTab(event) {
    changeActiveTab(activeTabIndex);
    activeTabIndex = tabs.indexOf(event.target);
    changeActiveTab(activeTabIndex);
    return false;
}

tabs.forEach((element) => { element.addEventListener('click', displayTab, false)});