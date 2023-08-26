//parentElement
let h3=document.querySelector("h3");
console.dir(h3);
let parent= h3.parentElement;
console.log(parent);

let h1=document.querySelector("h1");
let grandParent=h1.parentElement.parentElement;
console.log(grandParent);

//prevSibling

let prevsb=h1.previousElementSibling;
console.log(prevsb)

//nextsb
let nextsb=h1.nextElementSibling;
console.log(nextsb);

console.log(h1);
let h=h1.parentElement.nextElementSibling;
console.log(h);

console.dir(h1);

 //children
let head= document.querySelector("header");
console.log(head);
let child= head.children;
console.log(child);

//adding Element in the list  esa nhi krna time O(n)
let ul=document.querySelector("ul");
console.log(ul);
let str=ul.innerHTML;
console.log(str);
str+='<li class="listItem">AI</li>';
ul.innerHTML=str;

//1.createElement
//2.kya likhna hai use likho  innerText, innerHtml
//3.add element append/appendChild

let li=document.createElement("li");
console.log(li);
li.classList.add("listItem")
li.innerText="Digital Media"
ul.append(li);

// ul.append("embeded") // ho skta hai
// ul.append("<li>hello</li>") nhi ho skta li ko string jesa print krega

// ul.appendChild("hello");  // error not possible only nodes can be append


//removeChild / remove()
ul.removeChild(li);

//remove()
let heading= document.querySelector("h1");
console.log(heading);
heading.remove();
