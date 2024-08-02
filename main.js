
let logo = document.querySelector("#logo");
let interruptor = false;

logo.addEventListener("click", () => {
    if (interruptor == false) {
        logo.style.border = "2px solid #c81d25";
        interruptor = true;
    } else {
        logo.style.border = "none";
        interruptor = false;
    }
});

let number1 = document.querySelector ("#number1");

let number2 = document.querySelector ("#number2");

let number3 = document.querySelector ("#number3");

let btn = document.querySelector ("#btn");

let mensaje = document.querySelector ("#mensaje");

btn.addEventListener ("click", () => {
    suma =
        parseInt (number1.value) +
        parseInt (number2.value) +
        parseInt (number3.value);
    if (suma <= 0) {
        mensaje.innerHTML = "No llevas ningun sticker!";
    } else if (suma <= 10) {
        mensaje.innerHTML = `Llevas ${suma} stickers!`;
    } else mensaje.innerHTML =  "Llevas demasiados stickers";
});


let password1 = document.querySelector ("#password1");

let password2 = document.querySelector ("#password2");

let password3 = document.querySelector ("#password3");

let mensajepassword = document.querySelector ("#mensajepassword");

let btnpassword = document.querySelector ("#btnpassword");

btnpassword.addEventListener("click", () => {
    pass = 
    password1.value + 
    password2.value + 
    password3.value;

    if (pass === "911") {
        mensajepassword.innerHTML = "Password 1: Correcto!";
    } else if (pass === "714") {
        mensajepassword.innerHTML = "Password 2 Correcto!";
    } else {
        mensajepassword.innerHTML = "Password: Incorrecto";
    }
});