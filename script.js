function kap() {
    let lambda =  document.getElementById("materialy").value;
    let plocha = document.getElementById("plocha").value;
    let deltaT = document.getElementById("deltaT").value;
    let delka = document.getElementById("delka").value;
    let cas = document.getElementById("cas").value;

    document.getElementById("vypsatMaterial").innerText = lambda;

    let sVysledek = document.getElementById("sVysledek").value

    let vysledek = (lambda * ((plocha * deltaT * cas)/delka))/1000
    console.log(vysledek)

    if (checkbox.checked) {
         if (vysledek == sVysledek) {
        document.getElementById("hodnoceni").innerText = "Skvěle! Q = " + vysledek + " kJ je správný výsledek."
        } else {
        document.getElementById("hodnoceni").innerText = "Ne ne, tohle není správná odpověď. Měl(a) ses dobrat k výsledku Q = " + vysledek + " kJ."
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

    let vysledek2 = (lambda * ((plocha * deltaT * cas)/delka))/1000
    console.log(vysledek2)

    document.getElementById("vysledek").innerText = vysledek2
}