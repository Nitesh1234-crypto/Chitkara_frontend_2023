function outerfun(fun){
    console.log(fun);
    console.log("inside outerfunction"+fun());
}
function anotherfun(){
    console.log("inside another fun");
}
// outerfun(10);
outerfun(anotherfun);
