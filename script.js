

// startup()
// function startup(){
//     document.getElementById("voteh").innerHTML = localStorage.clickedh;
//     document.getElementById("voteap").innerHTML = localStorage.clickedap;
//     document.getElementById("votesp").innerHTML = localStorage.clickedsp;
//     document.getElementById("votefrp").innerHTML = localStorage.clickedfrp;
//     document.getElementById("votemdg").innerHTML = localStorage.clickedmdg;
//     document.getElementById("votekrf").innerHTML = localStorage.clickedkrf;
//     document.getElementById("voterd").innerHTML = localStorage.clickedrd;
//     document.getElementById("votesv").innerHTML = localStorage.clickedsv;
//     document.getElementById("votev").innerHTML = localStorage.clickedv;
// }



function Hvoted(){

    if (localStorage.clickedh) {

        localStorage.clickedh = Number(localStorage.clickedh)+1;
    } else {
        localStorage.clickedh = 1;
    }
    // document.getElementById("voteh").innerHTML = localStorage.clickedh;
    

}

function APvoted(){
    if (localStorage.clickedap) {

        localStorage.clickedap = Number(localStorage.clickedap)+1;
    } else {
        localStorage.clickedap = 1;
    }
    // document.getElementById("voteap").innerHTML = localStorage.clickedap;
    
}

function SPvoted(){
    if (localStorage.clickedsp) {

        localStorage.clickedsp = Number(localStorage.clickedsp)+1;
    } else {
        localStorage.clickedsp = 1;
    }
    // document.getElementById("votesp").innerHTML = localStorage.clickedsp;
    
}

function FRPvoted(){
    if (localStorage.clickedfrp) {

        localStorage.clickedfrp = Number(localStorage.clickedfrp)+1;
    } else {
        localStorage.clickedfrp = 1;
    }
    // document.getElementById("votefrp").innerHTML = localStorage.clickedfrp;
}

function MDGvoted(){
    if (localStorage.clickedmdg) {

        localStorage.clickedmdg = Number(localStorage.clickedmdg)+1;
    } else {
        localStorage.clickedmdg = 1;
    }
    // document.getElementById("votemdg").innerHTML = localStorage.clickedmdg;
    
}

function KRFvoted(){
    if (localStorage.clickedkrf) {

        localStorage.clickedkrf = Number(localStorage.clickedkrf)+1;
    } else {
        localStorage.clickedkrf = 1;
    }
    // document.getElementById("votekrf").innerHTML = localStorage.clickedkrf;
    
}

function RDvoted(){
    if (localStorage.clickedrd) {

        localStorage.clickedrd = Number(localStorage.clickedrd)+1;
    } else {
        localStorage.clickedrd = 1;
    }
    // document.getElementById("voterd").innerHTML = localStorage.clickedrd;
    
}

function SVvoted(){
    if (localStorage.clickedsv) {

        localStorage.clickedsv = Number(localStorage.clickedsv)+1;
    } else {
        localStorage.clickedsv = 1;
    }
    // document.getElementById("votesv").innerHTML = localStorage.clickedsv;
    
}

function Vvoted(){
    if (localStorage.clickedv) {

        localStorage.clickedv = Number(localStorage.clickedv)+1;
    } else {
        localStorage.clickedv = 1;
    }
    // document.getElementById("votev").innerHTML = localStorage.clickedv;
    
}



function reset(){
    localStorage.clickedh = 0
    localStorage.clickedap = 0
    localStorage.clickedsp = 0
    localStorage.clickedfrp = 0
    localStorage.clickedmdg = 0
    localStorage.clickedkrf = 0
    localStorage.clickedrd = 0
    localStorage.clickedsv = 0
    localStorage.clickedv = 0
    // document.getElementById("voteh").innerHTML = localStorage.clickedh;
    // document.getElementById("voteap").innerHTML = localStorage.clickedap;
    // document.getElementById("votesp").innerHTML = localStorage.clickedsp;
    // document.getElementById("votefrp").innerHTML = localStorage.clickedfrp;
    // document.getElementById("votemdg").innerHTML = localStorage.clickedmdg;
    // document.getElementById("votekrf").innerHTML = localStorage.clickedkrf;
    // document.getElementById("voterd").innerHTML = localStorage.clickedrd;
    // document.getElementById("votesv").innerHTML = localStorage.clickedsv;
    // document.getElementById("votev").innerHTML = localStorage.clickedv;


}




var popupLink = document.getElementById("popup-link");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");

popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
});

closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
});


var xValues = ["", "Høyre", "Arbeiderpartiet", "Senterpartiet", "FRP", "MDG", "KRF", "Rødt", "SV", "Venstre", ""];
var yValues = [0, localStorage.clickedh, localStorage.clickedap, localStorage.clickedsp, localStorage.clickedfrp, localStorage.clickedmdg, localStorage.clickedkrf, localStorage.clickedrd, localStorage.clickedsv, localStorage.clickedv, 0];
var barColors = ["gray", "darkblue", "darkred","lightgreen","lightblue","darkgreen", "orange", "red", "purple", "darkcyan"];

const ctx = document.getElementById("myChart")
new Chart(ctx, {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
        
        scales: {
            y: {
                beginAtZero: true
            }
        },

        legend: {display: false},
        title: {
            display: true,
            text: "Antall stemmer"
    
        }
    }
  
});





myChart.data.datasets[0].data[0] = localStorage.clickedh
myChart.data.datasets[0].data[1] = localStorage.clickedap
myChart.data.datasets[0].data[2] = localStorage.clickedsp
myChart.data.datasets[0].data[3] = localStorage.clickedfrp
myChart.data.datasets[0].data[4] = localStorage.clickedmdg



