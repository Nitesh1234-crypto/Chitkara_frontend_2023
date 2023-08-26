let grandFather= document.querySelector(".grandfather");
let father=document.querySelector(".father");
let mother=document.querySelector(".mother");

grandFather.addEventListener("click",function(){
console.log("grandFather");
});
father.addEventListener("click",function(ev){
console.log("father");
ev.stopPropagation();

});
mother.addEventListener("click",function(){
console.log("mother");
});