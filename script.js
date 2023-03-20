let lambda = document.getElementById("lambda");
let plocha = document.getElementById("plocha");
let deltaT = document.getElementById("deltaT");
let delka = document.getElementById("delka");
let cas = document.getElementById("cas");

function vypocet() {
    let vysledek = lambda * ((plocha * deltaT * cas)/delka)
    console.log(vysledek)
    document.getElementById("vysledek").innerText = vysledek;
}