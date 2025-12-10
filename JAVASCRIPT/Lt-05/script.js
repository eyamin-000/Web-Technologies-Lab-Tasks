const IText=document.getElementById("text");
const Btn=document.getElementById("btn");
const TWord=document.getElementById("words");
const TChar=document.getElementById("characters");
const RText=document.getElementById("reverse");


Btn.addEventListener("click", function(){

    if(IText.value.trim()==="")
    {
        alert("Enter Some Texts");
        return;
    }
    TChar.innerText=IText.value.length;

    let words = IText.value.split("");
    TWord.innerText = words.length;

    let reversed = IText.value.split("").reverse().join("");
    RText.innerText = reversed;

});