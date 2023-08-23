//EventListner
//1.click

let btn= document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click",function(ev){
    console.log(ev);
    console.log("click event success!!");
});
function clickEvent(){
    console.log("click!!");
}
btn.addEventListener("click",clickEvent);
btn.addEventListener("click",function(){
    clickEvent();
}); 

btn.removeEventListener("click",clickEvent);

function addElement(value){
let li=document.createElement("li");
console.log(li);
li.classList.add("listItem")
li.innerText=`${value}`
ul.append(li);
}
btn.addEventListener("click",addElement);
function removeLstElement(){
    let list= document.querySelector(".list");
    list.lastElementChild.remove();

}
let deletebtn= document.querySelector(".delete");
deletebtn.addEventListener("click",removeLstElement);

//keypress
let input= document.querySelector(".inp");
console.log(input);
input.addEventListener("keypress",function(ev){
    // console.log(input.value)
    console.log(ev.key);
    console.log(ev.target.value)
})

//submitEvent
let myForm= document.querySelector(".myForm");
myForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    let inp=document.querySelector("#inp");
    console.log(inp.value);
    addElement(inp.value)

})
