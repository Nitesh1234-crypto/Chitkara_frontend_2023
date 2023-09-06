//setTimeout
console.log("hi");
// setTimeout(function(){
//     console.log("inside loop")
//     let currentTime= new Date().getTime();
//     while(currentTime+5000>new Date().getTime()){

//     }
// },2000);
setTimeout(()=>{
    console.log("inside loop")
    let currentTime= new Date().getTime();
    while(currentTime+5000>new Date().getTime()){

    }
},2000);
console.log("function ke bd");
sub(20,5);
function sub(c,d){
    console.log(c-d);
}