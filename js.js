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


// Funktio etu- ja sukunimelle

function personName(etuNimi, sukuNimi) {
    const tervehdys = "Hei " + etuNimi + " " + sukuNimi;
    return tervehdys;
};
console.log(personName("Oiva", "Laukkanen"));

function formInput(){
    const etunimi = document.getElementById("etunimi").value;
    const sukunimi = document.getElementById("sukunimi").value;
    const loppuTervehdys = personName(etunimi, sukunimi);
    document.getElementById("kokoNimi").innerHTML = loppuTervehdys;
}