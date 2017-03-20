// JavaScript source code

var anis = document.querySelectorAll(".animatable");
for (i = 0; i < anis.length; i++) {
  anis[i].style.transitionDelay = 0.1*i + "s";
}

var bars = document.querySelectorAll(".bottom-bar");
for (i = 0; i < bars.length; i++) {
    bars[i].style.transitionDelay = 0.1 * i + "s";
}



var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});

var home = document.querySelector(".home");
home.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});
var about = document.querySelector(".about");
about.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});
var skills = document.querySelector(".skills");
skills.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});
var projects = document.querySelector(".projects");
projects.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});
var contact = document.querySelector(".contact");
contact.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.getElementById("mobile-menu").classList.toggle("is-open");
    document.querySelector(".tint").classList.toggle("is-open");
});
