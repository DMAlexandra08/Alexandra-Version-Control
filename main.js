"use strict";

//Greeting

window.onload = function() {
    const currentTime = new Date().getHours();
    const greetingElement = document.getElementById("greeting");

    let greetingMessage = "";

    if (currentTime >= 1 && currentTime < 12) {
        greetingMessage = "Good Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }
console.log(greetingMessage);
    greetingElement.textContent = greetingMessage;
}

//Footer

const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();

const btn = document.getElementById("btn-alert");
    btn.addEventListener("click", function () {
    alert("Hello!");
    console.log('clicked');
    })


const ol = document.getElementById("numbers");
for (let i = 1; i <=12; i++) {
    const li = document.getElementById("li");
    if (i % 2 === 0) {
        li.textContent = `Even`;
    } else {
        li.textContent = `Odd`;
    }
    ol.appendChild(li);
}

