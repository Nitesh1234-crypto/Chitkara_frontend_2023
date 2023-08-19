//ById
const myHello=document.getElementById("hello");
console.log(myHello);

//byClass
const byClass=document.getElementsByClassName("class17");
console.log(byClass);

//byTagName
const para=document.getElementsByTagName("p");
console.log(para);

//querySelector class

const query=document.querySelector(".class17");
console.log(query);
//querySelectorAll
const query1=document.querySelectorAll(".class17");
console.log(query1);

//Dom Properties
//1. innerHtml
//2.innerText
//3.textContent

console.log(myHello.innerHTML);
myHello.innerHTML="<div>Hello</div><p>world</p>"
myHello.innerText="hello world!";
myHello.textContent="hello world! learning dom"

//styling
myHello.style.color="blue";
myHello.style.fontSize="100px";
//get Attribute

console.log(myHello.getAttribute("id"));

//set Attribute
myHello.setAttribute("class", "myClass");

//classList
//1.add
//2.remove
//3.toggle

console.log(myHello.classList);
console.log(myHello.classList);

const classLis=document.querySelector(".divClass");
console.log(classLis.classList);

classLis.classList.add("g4");
classLis.classList.add("randomClass");

const btn=document.querySelector(".btn");
const form= document.querySelector(".myForm");
btn.addEventListener("click",function(){
    // form.classList.remove("hide");
    form.classList.toggle("hide");
})


















// //getAtr
// console.log(myHello.getAttribute("id"));
// //setAtr
// myHello.setAttribute("class","myClass");

// //classList
// //1.add
// //2.remove
// //3.toggle
// const myDiv=document.querySelector(".divClass");
// console.log(myDiv.classList);
// myDiv.classList.add("myDiv");
// myHello.classList.add("myDiv");

//pop-up form

// const btn=document.querySelector(".btn");
// const form=document.querySelector(".myForm");

// btn.addEventListener("click",function(){
//     // form.classList.remove("hide");
//     form.classList.toggle("hide");
// })












// console.log(myHello.innerHTML);
// myHello.innerHTML="<div>hello</div>"

// console.log(myHello.innerText);
// myHello.innerText="hello world!"

// console.log(myHello.textContent);
// myHello.textContent="hello world Learning dom"

// myHello.style.color="blue";
// myHello.style.fontSize="100px";

// //getAtr 

// console.log(myHello.getAttribute("id"));
// //setAtr
// myHello.setAttribute("class","myClass");

//classList
//1.add
//2.remove
//3.toggle
// console.log(myHello.classList);
// myHello.classList.add("world");
 



// console.log(myHello.innerHTML);
// myHello.innerHTML="<div>Hello<p>World!</p></div>";

// console.log(myHello.innerText);
// myHello.innerText="class G4 learing Dom"

// //textContent
// console.log(myHello.textContent)

// //style
// myHello.style.color="blue";
// myHello.style.fontSize="100px"
// // console.log(byClass[0]);
// for(let i=0;i<byClass.length;i++){
//     console.log(byClass[i]);
// }
// //getAttribute;
// let atr1=para[0].getAttribute("class");
// console.log(atr1);
// let atr=myHello.getAttribute("id");
// console.log(atr);

// //setAttribute;
// myHello.setAttribute("class","class17");

// console.log(myHello.nextElementSibling);

// console.log(para[0].parentElement);
// console.log(para[0].previousElementSibling);

//create Element
// const myDiv=document.getElementsByClassName("myDiv");

// function createElement(){
//     let div=document.createElement('div');
//     div.innerHTML="<h1>hello Creating Element</h1><p>loerhfafsdfsfsdf</p>"
//     myDiv[0].appendChild(div);
// }
// createElement();


// const form=document.querySelector(".myForm");
// let btn=document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     console.log(form.classList)
//     form.classList.toggle("hide");
// })

