const prev = document.getElementById("previous");
const next = document.getElementById("next");
const texts = document.getElementById("texts");
const allImages = document.getElementById("images");
const names = document.getElementById("names");
const titles = document.getElementById("titles");

let arrayOfP = [...texts.children]
let arrayOfImages = [...allImages.children]
let arrayOfNames = [...names.children]
let arrayOfTitles = [...titles.children]
let all = [arrayOfP, arrayOfImages, arrayOfNames, arrayOfTitles];
let arraySize = arrayOfP.length;

all.forEach(arr => arr[0].classList.add("active"));
let currentItem = 0;

next.onclick = nextreview;
prev.onclick = prereview;

function nextreview() {
    currentItem++;
    if (currentItem == arraySize) {
        currentItem = 0;
    }
    checked();
}
function prereview() {
    currentItem--;
    if (currentItem == -1) {
        currentItem = arraySize - 1;
    }
    checked();
}

function checked() {
    removeActiveTwo();
    all.forEach(arr => arr[currentItem].classList.add("active"));
}

function removeActiveTwo() {
    all.forEach(arr => { arr.forEach(el => el.classList.remove("active")) })
}

// Change background image
//
const images = ["/images/hero-image-02.jpg", "/images/hero-image-03.jpg", "/images/hero_image_01.jpg", "/images/hero-image-04.jpg"];
let landing = document.getElementById('landing');

setInterval(change, 5000);
function change() {
    let random = Math.floor(Math.random() * images.length);
    landing.style.backgroundImage = "url(.." + images[random] + ")";
}

// For Toggle Menu

const menu = document.getElementsByClassName("menu")[0];
const toshow = document.getElementsByClassName("toshow")[0];
const second = document.getElementsByClassName("second")[0];
menu.addEventListener("click", () => {
    toshow.classList.toggle('open')
    if (toshow.classList.contains("open")) {
        second.classList.toggle("dif")
    } else {
        second.classList.remove("dif")
    }
});

// For Click In A Link

const links = [...document.querySelectorAll("#toshow li a")]

links.forEach(li => {
    li.onclick = () => {
        removeActive();
        addActive();
    }
})

function removeActive() { links.forEach(li => { li.classList.remove("active"); }) }

function addActive() {
    links.forEach(li => [
        li.addEventListener("click", (e) => {
            e.target.classList.add("active");
        })
    ])
}


// For To Top Button


const header = document.querySelector("header");
const up = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 127 ? header.style.backgroundColor = "#060606" : header.style.backgroundColor = "transparent";
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
