const Nav=document.getElementById("nav");
const Greeting=document.getElementById("greetings");
const About=document.getElementById("about");
const Project=document.getElementById("project");
const Contact=document.getElementById("contact");
const Head=document.getElementsByClassName("head");
const Mode=document.getElementById("mode");

let isDark=false;

function lightMode(){
    document.body.style.background="white";
    document.body.style.color="black";

    Nav.style.background="#A7D67D";
    Nav.style.border="1px solid black";
    Greeting.style.background="tan";
    Greeting.style.color="black";
    About.style.color="black";
    Project.style.color="black";
    Contact.style.color="black";
    Greeting.style.border="2px solid black";
    Mode.style.border="1px solid black";
}

function darkMode(){
    document.body.style.background="black";
    document.body.style.color="white";

    Nav.style.background="gray";
    Nav.style.border="1px solid black";
    Greeting.style.background="gray";
    Greeting.style.color="white";
    About.style.color="white";
    Project.style.color="white";
    Contact.style.color="white";
    Greeting.style.border="2px solid black";
    Mode.style.border="1px solid black";
}

Mode.addEventListener("click", function(){
    if(isDark===false)
    {
        darkMode();
        Mode.innerText="LIGHT";
        isDark=true;
    }
    else{
        lightMode();
        Mode.innerText="DARK";
        isDark=false;
    }
});
lightMode();

function setGreeting()
{
    const Now= new Date();
    const Hour= Now.getHours();

    if(Hour<12)
    {
        Greeting.innerText="Good Morning...";
    }
    else if(Hour<18)
    {
        Greeting.innerText="Good Afternoon...";
    }
    else
    {
        Greeting.innerText="Good Afternoon...";
    }

}
setGreeting();

const A=document.getElementById("a");
const B=document.getElementById("b");
const C=document.getElementById("c");

Nav.addEventListener("change", function(){

    if(Nav.value==="b")
    {
        About.style.display="none";
        Project.style.display="block";
        Contact.style.display="none";
    }
    else if(Nav.value==="c")
    {
        About.style.display="none";
        Project.style.display="none";
        Contact.style.display="block";
    }
    else{
        About.style.display="block";
        Project.style.display="none";
        Contact.style.display="none";
    }

});

const fname=document.getElementById("name");
const email=document.getElementById("email");
const msg=document.getElementById("message");

const fnameERR=document.getElementById("nameERR");
const emailERR=document.getElementById("emailERR");
const msgERR=document.getElementById("msgERR");

const Form=document.getElementById("Form");
Form.addEventListener("submit", function(e){

    let isERR= false;
    fnameERR.innerHTML="";
    emailERR.innerHTML="";
    msgERR.innerHTML="";


    if(fname.value.trim()==="")
    {
        isERR=true;
        fnameERR.innerHTML="name Cannot be Empty";
    }
    if(email.value.trim()==="")
    {
        isERR=true;
        emailERR.innerHTML="email Cannot be Empty";
    }
    if(msg.value.trim()==="")
    {
        isERR=true;
        msgERR.innerHTML="Field Cannot be Empty";
    }
   

    if(isERR)
    {
        e.preventDefault();
    }   
});

