const Name=document.getElementById("name");
const Id=document.getElementById("id");
const Dept=document.getElementById("dept");
const Btn=document.getElementById("btn");
const Table=document.getElementById("table");

Btn.addEventListener("click", function(){
    if(Name.value.trim()===""||Id.value.trim()===""||Dept.value.trim()==="")
    {
        alert("All field must be filled");
        return;
    }

const Tr=document.createElement("tr");
const NTd=document.createElement("td");
const ITd=document.createElement("td");
const DTd=document.createElement("td");
const ATd=document.createElement("td");

NTd.innerText=Name.value;
ITd.innerText=Id.value;
DTd.innerText=Dept.value;

const DelBtn=document.createElement("button");
DelBtn.innerText="Delete";
DelBtn.style.background="red";

DelBtn.addEventListener("click", function(){
    Tr.remove();
});

ATd.appendChild(DelBtn);

Tr.appendChild(NTd);
Tr.appendChild(ITd);
Tr.appendChild(DTd);
Tr.appendChild(ATd);

Table.appendChild(Tr);

});
