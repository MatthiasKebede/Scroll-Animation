console.log("check")

AOS.init();


var dandelion = document.getElementById("dandelion-image");
var yellow = document.getElementById("Yellow_Head");
var stem = document.getElementById("Stem");
var brown = document.getElementById("Brown_Head");
var seeds = document.getElementById("Seeds");
var main = document.getElementById("Main");



document.addEventListener('scroll', updatePos);
document.addEventListener('click', reset)



function updatePos() {
    // dandelion.style.top = window.scrollY + 100;
    if (window.scrollY >= 1500) {
        yellow.style.display = "none";
        brown.style.display = "block";
        seeds.style.display = "block";
        main.style.display = "block";
    }
    else if (window.scrollY >= 1000) {
        brown.style.display = "none";
        seeds.style.display = "none";
        main.style.display = "none";
        yellow.style.display = "block";
        stem.style.display = "block";
    }
    else {
        yellow.style.display = "none";
        stem.style.display = "none";
        brown.style.display = "none";
        seeds.style.display = "none";
        main.style.display = "block";
    }


    if (window.scrollY < 1000)
        dandelion.style.top = window.scrollY / 2.5;
    else
        dandelion.style.top = 100;
}

function reset() {
    if (window.scrollY >= 1500)
        window.scrollTo(0,0)
}