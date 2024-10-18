//Tekstin värin vaihto funktio

function colorChange() {
    document.getElementById("para1").style.color = "blue"; 
}

//Tekstin vaihto funktio

function textChange() {
    document.getElementById("para2").innerHTML ="Toimii";
}

function huhuu() {
    let sanat = ["Huhuu?!", "Huhuu?!", "Huhuu?!", "Huhuu?!", "Huhuu?!"];
    console.log(sanat);
    };

//Vanha funktio etu- ja sukunimelle.
/*
function personName() {
    kokoNimi = document.getElementById("etunimi").value + " " + document.getElementById("sukunimi").value;
    const tervehdys = "Hei " + kokoNimi + "!";
    document.getElementById("kokoNimi").innerHTML = tervehdys;
};
*/

// Funktio etu- ja sukunimelle

function personName(etuNimi, sukuNimi) {
     etuNimi = "Oiva";
     sukuNimi = "Laukkanen";
    const tervehdys = "Hei " + etuNimi + " " + sukuNimi;
    return tervehdys;
};
console.log(personName());