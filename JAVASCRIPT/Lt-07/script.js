const SText=document.getElementById("text");
const BGBtn=document.getElementById("background");
const SBtn=document.getElementById("size");
const CBtn=document.getElementById("center");
const RBtn=document.getElementById("reset");

let CFontSize=14;

BGBtn.addEventListener("click", function(){
    const RandomColor="#"+ Math.floor(Math.random()*16777215).toString(14);
    SText.style.backgroundColor=RandomColor;
});

SBtn.addEventListener("click", function(){
    CFontSize +=2;
    SText.style.fontSize= CFontSize+ "px";
});

CBtn.addEventListener("click", function(){
    SText.style.textAlign="center";
});

RBtn.addEventListener("click", function(){
    SText.style.backgroundColor="white";
    CFontSize=14;
    SText.style.fontSize= CFontSize+ "px";
    SText.style.textAlign="left";
});