const fname=document.getElementById("name");
const email=document.getElementById("email");
const age=document.getElementById("age");
const pass=document.getElementById("password");
const conPass=document.getElementById("conPassword");
const phone=document.getElementById("pnum");

const fnameERR=document.getElementById("nameERR");
const emailERR=document.getElementById("emailERR");
const ageERR=document.getElementById("ageERR");
const passERR=document.getElementById("passERR");
const conPassERR=document.getElementById("conPassERR");
const pnumERR=document.getElementById("pnumERR")

const Form=document.getElementById("form");
Form.addEventListener("submit", function(e){

    let isERR= false;
    fnameERR.innerHTML="";
    emailERR.innerHTML="";
    ageERR.innerHTML="";
    passERR.innerHTML="";
    conPassERR.innerHTML="";
    pnumERR.innerHTML="";

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
    if(age.value==="" || age.value<0)
    {
        isERR=true;
        ageERR.innerHTML="age Cannot be empty or negative";
    }
    if(pass.value.trim()==="")
    {
        isERR=true;
        passERR.innerHTML="Password cannot be empty";
    }
    else if(pass.value.length<6)
    {
        isERR=true;
        passERR.innerHTML="password must be at least 6 characters"
    }
    if(conPass.value.trim()==="")
    {
        isERR=true;
        conPassERR.innerHTML="Confirm password filled cannot be empty";
    }
    else if(pass.value !=conPass.value)
    {
        isERR=true;
        conPassERR.innerHTML="password do not match";
    }
    if(phone.value.trim()==="")
    {
        isERR=true;
        pnumERR.innerHTML="Phone number can not be empty";
    }
    else if(isNaN(phone.value))
    {
        isERR=true;
        pnumERR.innerHTML="phone must contains digits only"
    }

    if(isERR)
    {
        e.preventDefault();
    }   
});