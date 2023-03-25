function kap() {
    let lambda =  document.getElementById("materialy").value;
    let plocha = document.getElementById("plocha").value;
    let deltaT = document.getElementById("deltaT").value;
    let delka = document.getElementById("delka").value;
    let cas = document.getElementById("cas").value;

    let sVysledek = document.getElementById("sVysledek").value

    let vysledek = lambda * ((plocha * deltaT * cas)/delka)
    console.log(vysledek)

    let chce = document.getElementById("checkbox").value
    console.log(chce)

    if (chce == "on") {

         if (vysledek == sVysledek) {
        document.getElementById("hodnoceni").innerText = "Skvěle! Q = " + vysledek + " J je správný výsledek."
        } else {
        document.getElementById("hodnoceni").innerText = "Ne ne, tohle není správná odpověď. Měl(a) ses dobrat k výsledku Q = " + vysledek + " J."
        }
    } else {
        if (vysledek == sVysledek) {
            document.getElementById("hodnoceni").innerText = "Skvěle! Tvá odpověď je správná. Můžeš procvičovat dál s jinými hodnotami."
        } else {
        document.getElementById("hodnoceni").innerText = "Ne ne, tohle není správná odpověď. Zkus to znovu."
        }
    }
}

function vypocet() {
    let lambda =  document.getElementById("lambda").value;
    let plocha = document.getElementById("plocha").value;
    let deltaT = document.getElementById("deltaT").value;
    let delka = document.getElementById("delka").value;
    let cas = document.getElementById("cas").value;

    let vysledek2 = lambda * ((plocha * deltaT * cas)/delka)
    console.log(vysledek2)

    document.getElementById("vysledek").innerText = vysledek2
}