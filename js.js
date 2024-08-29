//Tekstin värin vaihto funktio

function colorChange() {
    document.getElementById("para1").style.color = "blue"; 
}

//Tekstin vaihto funktio

function textChange() {
    document.getElementById("para2").innerHTML ="Toimii";
}

(document).ready(function () {
    var sanat = ["Huhuu?!", "Huhuu?!", "Huhuu?!", "Huhuu?!", "Huhuu?!"];

    for (var i in sanat) {
        var element = document.createElement("h2");
        element.innerHTML = tit[i];
        ("#tit").append(element);
    }
});
