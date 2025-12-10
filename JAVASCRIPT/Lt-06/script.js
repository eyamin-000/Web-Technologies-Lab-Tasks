function Clock(){
    let Now=new Date();
    let H= Now.getHours();
    let M= Now.getMinutes();
    let S= Now.getSeconds();
    let AMPM= "AM";

    if(H>=12)
    {
        AMPM="PM";
    }
    if(H==0)
    {
        H=12;
    }
    else if(H>12)
    {
        H=H-12;
    }
    H=String(H).padStart(2, "0");
    M=String(M).padStart(2, "0");
    S=String(S).padStart(2, "0");

    document.getElementById("clock").innerText=H+":"+M+":"+S+" "+AMPM;
}
setInterval(Clock, 1000);
Clock();