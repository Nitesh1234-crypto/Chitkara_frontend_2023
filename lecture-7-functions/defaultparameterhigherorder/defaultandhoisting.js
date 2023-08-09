
// var a=10
// function foo(){
//     console.log(a);
//     var a=20;
//     function foo1(){
//         a++;
//         console.log(a);
//         var a=30;
//         console.log(a);
//     }
//     foo1();
// }
// foo();

//Higher order function
function outerfun(fun){
    console.log(fun);
    console.log("inside outerfunction"+fun());
}
function anotherfun(){
    console.log("inside another fun");
}
// outerfun(10);
outerfun(anotherfun);