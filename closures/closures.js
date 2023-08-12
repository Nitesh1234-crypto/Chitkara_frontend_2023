// // // function outer(){
// // //     var a=10;
// // //     function inner(){
// // //         a++;
// // //         console.log(a);
// // //     }
// // //     return inner;
// // // }
// // // let f1=outer();
// // // let f2=outer();
// // // f1();
// // // f1();
// // // f1();
// // // f2();
// // // f2();
// // // f2();
// // function outer(){
// //     var a=10;
// //     function inner(){
// //         var b=20
// //         function innermost(){
// //             a++;
// //             b++;
// //             console.log(a);
// //             console.log(b);

// //         }
// //         return innermost;
// //     }
// //     return inner;
// // }
// // let f1=outer();
// // let f11=f1();

// // f11();
// // f11();

// function outer(){
//     var a=10;
//     function inner(){
//         a++;
//         function innermost(){
//             a++;
//             console.log(a);
//         }
//         return innermost;
//     }
//     return inner;
// }
// let f1=outer();
// let f2=outer();

// let f11=f1();
// let f12=f1();

// let f21=f2();
// let f22=f2();
// f11();
// f11();
// f12();
// f12();
// f21();
// f21();
// f22();
// f22();
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

