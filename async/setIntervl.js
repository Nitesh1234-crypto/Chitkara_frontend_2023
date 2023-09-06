let returnVl=setInterval(()=>{
    console.log("inside first setIntervl");
},2000)
// console.log(returnVl);

let second=setInterval(()=>{
console.log("inside second SetIntervl")
},3000)
// console.log(second);
setTimeout(()=>{
    clearInterval(returnVl); //run fter 5second
},5000)





