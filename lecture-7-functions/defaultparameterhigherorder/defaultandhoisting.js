//default parameter
function add(a=10,b=20){
    return a+b;
}
console.log(add());
console.log(add(30));
console.log(add(undefined,40));

//hoisting question
var a=10
function foo(){
    console.log(a);
    var a=20;
    function foo1(){
        a++;
        console.log(a);
        var a=30;
        console.log(a);
    }
    foo1();
}
foo();


