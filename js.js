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

    for (let i in sanat) {
        let element = document.createElement("p");
        element.innerHTML = tit[i];
        ("#tit").append(element);
    }
};
