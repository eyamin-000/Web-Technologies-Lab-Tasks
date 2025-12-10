const Header=document.getElementById("header");
const Main=document.getElementById("main");
const Footer=document.getElementById("footer");
const Button=document.getElementById("btn");

let isDark= false;

function lightTheme(){
    document.body.style.background="white";
    document.body.style.color="black";

    Header.style.background="white";
    Main.style.background="white";
    Footer.style.background="white";
    Header.style.border="2px solid black";
    Main.style.border="2px solid black";
    Footer.style.border="2px solid black";
}

function darkTheme(){
    document.body.style.background="black";
    document.body.style.color="white";
    Header.style.background="gray";
    Main.style.background="gray";
    Footer.style.background="gray";
    Header.style.border="2px solid white";
    Main.style.border="2px solid white";
    Footer.style.border="2px solid white";
}

Button.addEventListener("click", function(){
    if(isDark===false)
    {
        darkTheme();
        Button.innerText="Light Theme";
        isDark=true;
    }
    else{
        lightTheme();
        Button.innerText="Dark Theme";
        isDark=false;
    }
});
lightTheme();
