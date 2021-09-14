"use strict";

window.addEventListener("load", function(){
    nav.style = "display: none";
});

// Variabler
let icon = document.getElementById("nav-icon");
let nav = document.getElementById("navbar");

// Lyssnare
icon.addEventListener("click", toggleNav);


// Funktion
function toggleNav() {
    // if(nav.style == "display: block"){
    //     $("#navbar").slideUp("2s");
    // } else if(nav.style == "display: none"){
    //     $("#navbar").slideDown("2s");
    // };

    $("#navbar").slideToggle();
};

