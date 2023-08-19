/*parentElement
previousSibling
nextSibling
child
add element using str
prepend
appendChild
before
after
append
removeChild
remove()*/
 const div=document.querySelector(".header");
 console.log(div);
//parent
 console.log(div.parentElement);
 //child
 let parent=div.parentElement;
 console.log(parent.childNodes);

 //prevSibling

 const h=document.querySelector("h1");
 console.log(h);
 let prev=h.previousElementSibling;
 console.log(prev);
 //nextSibling
 let next=h.nextElementSibling;
 console.log(next);











