digi();
function digi(){
let continer=document.querySelector(".time");
let time= new Date();
time=time.toLocaleTimeString();
continer.innerHTML=time;
}
setInterval(digi);

function updtecolor(){
    let body=document.querySelector("body");
    if(body.style.backgroundColor=="yellow"){
        body.style.backgroundColor="pink";
    }else{
        body.style.backgroundColor="yellow"; 
    }
}
setInterval(updtecolor)