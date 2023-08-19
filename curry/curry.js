console.log(add(1)(2)(3)(4)(5)(6)());//currying function
console.log(mul(1)(2)(3)(4)(5)())
function add(value){
    if(typeof value=="undefined") return 0;
    function inner(nextValue){
        if(typeof nextValue=="undefined"){
            return value;
        }
        value+=nextValue;
        return inner;
    }
    return inner;
}
function mul(value){
    if(typeof value=="undefined") return 0;
    function inner(nextValue){
        if(typeof nextValue=="undefined"){
            return value;
        }
        value*=nextValue;
        return inner;
    }
    return inner;
}
