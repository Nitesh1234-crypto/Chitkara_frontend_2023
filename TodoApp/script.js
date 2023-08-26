//addItem;
let form= document.querySelector(".myForm");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    let input=document.querySelector("#inp");
    console.log(input.value);
    let value=input.value;
    addItem(value);
    input.value="";
})
function addItem(value){
    let ul=document.querySelector(".taskList");
    let li= document.createElement("li");
    li.classList.add("taskItem");
    li.innerHTML=`<input type="checkbox" name="" id="complete">${value} <span><button class="up">⬆</button><button class="down">⬇</button><button class="delete">delete</button></span>`;
   ul.append(li);

}
//deleteItem
let taskList=document.querySelector(".taskList");
taskList.addEventListener("click",function(ev){
    // console.log(ev.target);
    console.log(ev);
    let currentElement=ev.target;
    let className=ev.target.className;
    console.log(className);
    if(className=="delete"){
        let item=currentElement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
    //
    if(className=="up"){
        let currentListItem=currentElement.parentElement.parentElement;
        let prevListItem=currentListItem.previousElementSibling;
        console.log(prevListItem);
        taskList.insertBefore(currentListItem,prevListItem);

    }
    if(className=="down"){
        let currentListItem=currentElement.parentElement.parentElement;
        let nextListItem=currentListItem.nextElementSibling;
        taskList.insertBefore(nextListItem,currentListItem);
    }
    if(className=="complete"){
        let listItem=currentElement.parentElement;
        console.log(listItem);
        listItem.classList.toggle("cut");
    }
    
});



