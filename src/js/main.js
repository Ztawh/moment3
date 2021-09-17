// Skrivet av Amanda Hwatz Björkholm 2021.

"use strict";

// Lyssnar på när sidan laddats. Gömmer mobilmenyn
window.addEventListener("load", function(){
    nav.style = "display: none";
});

// Variabler
let icon = document.getElementById("nav-icon");
let nav = document.getElementById("navbar");

// Lyssnare
icon.addEventListener("click", toggleNav);


// Funktion. Toggla mobilmenyn vid klick
function toggleNav() {
    $("#navbar").slideToggle();
};

