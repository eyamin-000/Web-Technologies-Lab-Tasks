const UType=document.getElementById("type");
const Student=document.getElementById("student");
const Teacher=document.getElementById("teacher");
const Depertment=document.getElementById("Dept");
const Roll=document.getElementById("Roll");

UType.addEventListener("change", function(){

    if(UType.value==="student")
    {
        Roll.style.display="block";
        Depertment.style.display="none";
    }
    else if(UType.value==="teacher")
    {
        Roll.style.display="none";
        Depertment.style.display="block";
    }
    else{
        Roll.style.display="none";
        Depertment.style.display="none";
    }

});
