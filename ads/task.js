const rotators = Array.from(document.querySelectorAll(".rotator"));
function makeRotators() {
    rotators.forEach((element) => {
        setInterval(() => changeAd(element), 1000);
    })
}

function changeAd(rotator) {
    let activeAd = rotator.querySelector(".rotator__case_active");
    activeAd.classList.toggle("rotator__case_active");
    if (activeAd == rotator.lastElementChild){
        activeAd = rotator.firstElementChild;
    } else {
        activeAd = activeAd.nextElementSibling;
    }
    activeAd.classList.toggle("rotator__case_active");
    activeAd.style.color = activeAd.dataset.color;
}
makeRotators();